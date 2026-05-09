import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Member from '../../../models/Member';

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role');
    const query = role ? { role, isActive: true } : { isActive: true };
    const members = await Member.find(query).select('-peerReviews -careerHighlights -funnyMoments').sort({ name: 1 });
    return NextResponse.json(members);
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const member = await Member.create(body);
    return NextResponse.json(member, { status: 201 });
  } catch (error) {
    console.error('Member API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
