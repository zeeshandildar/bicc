import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    // In production, this would send an email or save to database
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json({ success: true, message: 'Message received! We\'ll get back to you soon.' });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
