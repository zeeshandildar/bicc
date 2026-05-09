import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import JoinApplication from '../../../models/JoinApplication';

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { fullName, email, phone, age, playingRole, experienceLevel, message } = body;

    if (!fullName || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const application = await JoinApplication.create({
      fullName, email, phone, age, playingRole, experienceLevel, message
    });

    return NextResponse.json({ success: true, id: application._id }, { status: 201 });
  } catch (error) {
    console.error('Join API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const applications = await JoinApplication.find().sort({ createdAt: -1 });
    return NextResponse.json(applications);
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
