import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import Member from '../../../../models/Member';

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params;
    const member = await Member.findOne({ slug: id });
    if (!member) {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 });
    }
    return NextResponse.json(member);
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
