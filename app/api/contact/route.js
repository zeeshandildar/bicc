import { NextResponse } from 'next/server';
import { isWebhookConfigured, sendWebhookNotification } from '../../../lib/notifications';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name = '', email = '', message = '' } = body;

    const normalizedName = String(name).trim();
    const normalizedEmail = String(email).trim();
    const normalizedMessage = String(message).trim();

    if (!normalizedName || !normalizedEmail || !normalizedMessage) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!isWebhookConfigured()) {
      return NextResponse.json({ error: 'Contact form is not configured. Update lib/notificationConfig.js.' }, { status: 500 });
    }

    await sendWebhookNotification({
      eventType: 'contact_message',
      data: {
        name: escapeHtml(normalizedName),
        email: escapeHtml(normalizedEmail),
        message: escapeHtml(normalizedMessage),
      },
    });

    return NextResponse.json({ success: true, message: 'Message received! We\'ll get back to you soon.' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Unable to send message right now. Please try again.' }, { status: 502 });
  }
}
