import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Story from '../../../models/Story';

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const query = category ? { category } : {};
    const stories = await Story.find(query).sort({ publishedAt: -1 });
    return NextResponse.json(stories);
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const story = await Story.create(body);
    return NextResponse.json(story, { status: 201 });
  } catch (error) {
    console.error('Story API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
