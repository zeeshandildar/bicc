import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Event from '../../../models/Event';

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const query = type ? { type } : {};
    const events = await Event.find(query).sort({ date: -1 });
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const event = await Event.create(body);
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error('Event API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
