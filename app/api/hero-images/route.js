import { NextResponse } from 'next/server';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const HERO_DIR = path.join(process.cwd(), 'public', 'images', 'hero');
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

export async function GET() {
  try {
    const files = await readdir(HERO_DIR);
    const images = files
      .filter((name) => IMAGE_EXT.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((name) => `/images/hero/${name}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Hero images API error:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}
