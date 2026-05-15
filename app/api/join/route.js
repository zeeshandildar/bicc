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

async function sendJoinNotification({ fullName, email, phone, age, nationality, livesInBarcelona, playingRole, experienceLevel, message }) {
  const roleLabels = {
    batsman: 'Batsman',
    bowler: 'Bowler',
    'all-rounder': 'All-Rounder',
    'wicket-keeper': 'Wicket-Keeper',
    scorer: 'Scorer',
    other: 'Other / Not Sure',
  };

  const experienceLabels = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    professional: 'Professional',
  };

  await sendWebhookNotification({
    eventType: 'join_application',
    data: {
      fullName: escapeHtml(fullName),
      email: escapeHtml(email),
      phone: escapeHtml(phone || '—'),
      age: escapeHtml(age || '—'),
      nationality: escapeHtml(nationality || '—'),
      playingRole: escapeHtml(roleLabels[playingRole] || playingRole),
      experienceLevel: escapeHtml(experienceLabels[experienceLevel] || experienceLevel),
      livesInBarcelona: escapeHtml(livesInBarcelona || 'yes'),
      message: escapeHtml(message || '—'),
    },
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName = '',
      email = '',
      phone = '',
      age = '',
      nationality = '',
      livesInBarcelona = 'yes',
      playingRole = 'other',
      experienceLevel = 'beginner',
      message = '',
    } = body;

    const normalizedName = String(fullName).trim();
    const normalizedEmail = String(email).trim();
    const normalizedNationality = String(nationality).trim();

    if (!normalizedName || !normalizedEmail) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!normalizedNationality) {
      return NextResponse.json({ error: 'Nationality is required.' }, { status: 400 });
    }

    if (!isWebhookConfigured()) {
      return NextResponse.json({ error: 'Join form is not configured. Update lib/notificationConfig.js.' }, { status: 500 });
    }

    await sendJoinNotification({
      fullName: normalizedName,
      email: normalizedEmail,
      phone,
      age,
      nationality: normalizedNationality,
      livesInBarcelona,
      playingRole,
      experienceLevel,
      message,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Join API error:', error);
    return NextResponse.json({ error: 'Unable to submit application right now. Please try again.' }, { status: 502 });
  }
}
