import crypto from 'crypto';
import { notificationConfig } from './notificationConfig';

export function getNotificationConfig() {
  return {
    webhookUrl: notificationConfig.webhookUrl,
    sharedSecret: notificationConfig.sharedSecret || '',
    notificationEmails: Array.isArray(notificationConfig.notificationEmails)
      ? notificationConfig.notificationEmails
      : [],
    timeoutMs: Number(notificationConfig.timeoutMs) || 20000,
  };
}

export function isWebhookConfigured() {
  return Boolean(getNotificationConfig().webhookUrl);
}

function signPayload(payload, secret) {
  return crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');
}

export async function sendWebhookNotification({ eventType, data }) {
  const config = getNotificationConfig();

  if (!config.webhookUrl) {
    throw new Error('Webhook is not configured. Set webhookUrl in lib/notificationConfig.js.');
  }

  const unsignedPayload = {
    eventType,
    submittedAt: new Date().toISOString(),
    recipients: config.notificationEmails,
    data,
  };

  const payload = {
    ...unsignedPayload,
    signature: config.sharedSecret
      ? signPayload(JSON.stringify(unsignedPayload), config.sharedSecret)
      : '',
  };

  const body = JSON.stringify(payload);

  const headers = { 'Content-Type': 'application/json' };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), config.timeoutMs);

  try {
    const response = await fetch(config.webhookUrl, {
      method: 'POST',
      headers,
      body,
      signal: controller.signal,
      cache: 'no-store',
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Webhook request failed (${response.status}): ${body.slice(0, 300)}`);
    }

    return true;
  } finally {
    clearTimeout(timeout);
  }
}
