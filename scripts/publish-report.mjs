/**
 * Step 2 of adding a match report.
 *
 *   npm run publish-report -- <slug>
 *
 * Reads reports/<slug>.md and public/images/events/<slug>/, then:
 *   - resizes the photos for the web (max 2000px)
 *   - adds the event (with the report) to data/events.js
 *   - adds a news card linking to that event to data/stories.js
 *   - deletes the draft
 */
import { readFile, writeFile, rm, rename } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import {
  DRAFTS_DIR, EVENTS_FILE, STORIES_FILE,
  imagesDirFor, listImages, parseDraft, slugify,
  jsString, jsTemplate, nextId, insertEntry,
} from './lib/reports.mjs';

const run = promisify(execFile);
const MAX_PIXELS = 2000;

const slug = slugify(process.argv[2] || '');

if (!slug) {
  console.error('Usage: npm run publish-report -- <slug>');
  process.exit(1);
}

const draftPath = path.join(DRAFTS_DIR, `${slug}.md`);
const imagesDir = imagesDirFor(slug);

const raw = await readFile(draftPath, 'utf8').catch(() => null);
if (raw === null) {
  console.error(`No draft found at reports/${slug}.md`);
  console.error('Create one with: npm run new-report -- "Event Title"');
  process.exit(1);
}

const { meta, bodyEn, bodyEs } = parseDraft(raw);

const missing = ['title', 'date', 'sortDate', 'location'].filter((key) => !meta[key]);
if (missing.length) {
  console.error(`Draft is missing required settings: ${missing.join(', ')}`);
  process.exit(1);
}
if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.sortDate)) {
  console.error(`sortDate must look like 2026-08-22 (got "${meta.sortDate}").`);
  process.exit(1);
}
if (!bodyEn) {
  console.error('The draft has no report text below the front matter.');
  process.exit(1);
}

// --- Photos: give them tidy names, shrink them, and build the gallery list ---
const originals = await listImages(imagesDir);

if (!originals.length) {
  console.error(`No photos found in public/images/events/${slug}/`);
  console.error('Add at least one photo (the first one becomes the cover image).');
  process.exit(1);
}

// `cover:` in the draft picks the main photo; otherwise the first by filename wins.
const ordered = [...originals];
if (meta.cover) {
  const wanted = meta.cover.trim().toLowerCase();
  const at = ordered.findIndex((name) => name.toLowerCase().includes(wanted));
  if (at > 0) {
    ordered.unshift(...ordered.splice(at, 1));
  } else if (at === -1) {
    console.warn(`No photo matched cover: "${meta.cover}" — using ${ordered[0]} instead.`);
  }
}

const webNames = [];
for (const [index, name] of ordered.entries()) {
  const ext = path.extname(name).toLowerCase();
  const base = slugify(path.basename(name, ext)) || 'photo';
  const webName = `${String(index + 1).padStart(2, '0')}-${base}${ext}`;

  if (webName !== name) {
    await rename(path.join(imagesDir, name), path.join(imagesDir, webName));
  }
  webNames.push(webName);
}

let resized = 0;
for (const name of webNames) {
  try {
    await run('sips', ['-Z', String(MAX_PIXELS), path.join(imagesDir, name)]);
    resized += 1;
  } catch {
    // sips is macOS-only; skipping just means the original size is kept.
  }
}

const imagePaths = webNames.map((name) => `/images/events/${slug}/${name}`);

// --- Event entry ---
const eventsSource = await readFile(EVENTS_FILE, 'utf8');

if (eventsSource.includes(`slug: "${slug}"`)) {
  console.error(`data/events.js already has an event with the slug "${slug}".`);
  console.error('Remove it first, or rename the draft, then try again.');
  process.exit(1);
}

const summary = meta.summary || bodyEn.split('\n').find((line) => line.trim() && !line.startsWith('#')) || meta.title;

const eventEntry = `  {
    id: ${nextId(eventsSource)},
    title: ${jsString(meta.title)},
    titleEs: ${jsString(meta.titleEs || meta.title)},
    slug: ${jsString(slug)},
    date: ${jsString(meta.date)},
    dateEs: ${jsString(meta.dateEs || meta.date)},
    sortDate: ${jsString(meta.sortDate)},
    time: ${jsString(meta.time || 'Weekend Tour')},
    location: ${jsString(meta.location)},
    locationEs: ${jsString(meta.locationEs || meta.location)},
    summary: ${jsString(summary)},
    summaryEs: ${jsString(meta.summaryEs || summary)},
    description: \`${jsTemplate(bodyEn)}\`,
    descriptionEs: \`${jsTemplate(bodyEs || bodyEn)}\`,
    category: ${jsString(meta.category || 'Tour')},
    type: ${jsString(meta.type || 'tour')},
    images: [
${imagePaths.map((p) => `      ${jsString(p)}`).join(',\n')}
    ]
  },
`;

await writeFile(EVENTS_FILE, insertEntry(eventsSource, 'events', eventEntry), 'utf8');

// --- News card linking to the event (optional) ---
let addedNewsCard = false;

if (meta.newsTitle) {
  const storiesSource = await readFile(STORIES_FILE, 'utf8');

  if (storiesSource.includes(`slug: "${slug}"`)) {
    console.warn(`Skipped the news card — data/stories.js already has "${slug}".`);
  } else {
    const publishedAt = meta.sortDate;
    const displayDate = new Date(`${publishedAt}T00:00:00`).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });

    const storyEntry = `  {
    id: ${nextId(storiesSource)},
    title: ${jsString(meta.newsTitle)},
    titleEs: ${jsString(meta.newsTitleEs || meta.newsTitle)},
    date: ${jsString(displayDate)},
    publishedAt: ${jsString(publishedAt)},
    excerpt: ${jsString(summary)},
    excerptEs: ${jsString(meta.summaryEs || summary)},
    image: ${jsString(imagePaths[0])},
    category: ${jsString(meta.category === 'Tour' ? 'Tour Report' : 'Match Report')},
    categoryEs: ${jsString(meta.category === 'Tour' ? 'Informe de Tour' : 'Crónica de Partido')},
    author: "BICC Committee",
    authorEs: "Comité del BICC",
    slug: ${jsString(slug)},
    // Links straight to the event page, where the full match reports live.
    link: ${jsString(`/events/${slug}`)}
  },
`;

    await writeFile(STORIES_FILE, insertEntry(storiesSource, 'stories', storyEntry), 'utf8');
    addedNewsCard = true;
  }
}

await rm(draftPath);

console.log(`
Published "${meta.title}".

  Event page:   /events/${slug}
  Photos:       ${imagePaths.length} (${resized} resized for the web)
  News card:    ${addedNewsCard ? 'added, linking to the event page' : 'skipped (no newsTitle in the draft)'}

Check it locally with "npm run dev", then commit and push.
`);
