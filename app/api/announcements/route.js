import { NextResponse } from 'next/server';
import { notificationConfig } from '../../../lib/notificationConfig';

// Refetch the Google Sheet feed at most every 10 minutes.
const REVALIDATE_SECONDS = 600;

export async function GET() {
  const feedUrl = notificationConfig.announcementsFeedUrl;

  if (!feedUrl) {
    return NextResponse.json({ announcements: [] });
  }

  try {
    const response = await fetch(feedUrl, {
      redirect: 'follow',
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`Announcements feed responded with ${response.status}`);
    }

    // Apps Script serves JSON via a redirect that may arrive as text/plain.
    const data = JSON.parse(await response.text());
    const announcements = Array.isArray(data.announcements) ? data.announcements : [];

    return NextResponse.json({ announcements });
  } catch (error) {
    console.error('Announcements API error:', error);
    return NextResponse.json({ announcements: [] });
  }
}
