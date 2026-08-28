/**
 * Step 1 of adding a match report.
 *
 *   npm run new-report -- "La Manga Tour August 2026"
 *
 * Creates a draft file to paste the report into, and a folder for the photos.
 * Run `npm run publish-report -- <slug>` afterwards to put it on the site.
 */
import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { DRAFTS_DIR, imagesDirFor, slugify } from './lib/reports.mjs';

const title = process.argv.slice(2).join(' ').trim();

if (!title) {
  console.error('Usage: npm run new-report -- "Event Title"');
  console.error('Example: npm run new-report -- "La Manga Tour August 2026"');
  process.exit(1);
}

const slug = slugify(title);
const draftPath = path.join(DRAFTS_DIR, `${slug}.md`);
const imagesDir = imagesDirFor(slug);

const exists = await access(draftPath).then(() => true).catch(() => false);
if (exists) {
  console.error(`A draft already exists: reports/${slug}.md`);
  console.error('Edit that file, or delete it first if you want to start over.');
  process.exit(1);
}

const today = new Date();
const iso = today.toISOString().slice(0, 10);
const displayDate = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

const template = `---
# Everything above the second --- is settings. Fill these in, then write the
# report below. Lines starting with # are notes and are ignored.
title: ${title}
titleEs:
# How the date is shown on the page, e.g. 22-23 August 2026
date: ${displayDate}
dateEs:
# Used for sorting only — always YYYY-MM-DD (the first day of the event)
sortDate: ${iso}
location: Barcelona, Spain
locationEs:
# tour | match | social | training
type: tour
category: Tour
# One sentence shown on the events list and news cards
summary:
summaryEs:
# Main/cover photo — part of the filename is enough, e.g. team-photo.
# Leave blank to use whichever photo sorts first.
cover:
# Headline for the news card that links to this event.
# Leave blank to skip the news card and only add the event.
newsTitle:
newsTitleEs:
---

## Saturday — T20 Game 1

Paste the first match report here. Leave a blank line between paragraphs.

## Sunday — 40-Over Match

Paste the next report here. Add or remove ## sections as needed — each one
becomes a heading on the event page.

===ES===

## Sábado — T20 Partido 1

Optional: the Spanish version goes below the ===ES=== line. If you leave this
empty, the English text is shown to Spanish readers too.
`;

await mkdir(DRAFTS_DIR, { recursive: true });
await writeFile(draftPath, template, 'utf8');
await mkdir(imagesDir, { recursive: true });

console.log(`
Draft created.

  1. Write the report:  reports/${slug}.md
  2. Add photos to:     public/images/events/${slug}/
     (set "cover:" in the draft to choose the main photo)
  3. Publish it:        npm run publish-report -- ${slug}
`);
