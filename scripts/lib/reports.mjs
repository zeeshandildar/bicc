/**
 * Shared helpers for the match report scripts.
 * No dependencies — plain Node so `npm run` works on a fresh checkout.
 */
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const DRAFTS_DIR = path.join(ROOT, 'reports');
export const EVENTS_FILE = path.join(ROOT, 'data', 'events.js');
export const STORIES_FILE = path.join(ROOT, 'data', 'stories.js');

export const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

export function slugify(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function imagesDirFor(slug) {
  return path.join(ROOT, 'public', 'images', 'events', slug);
}

export async function listImages(dir) {
  let files;
  try {
    files = await readdir(dir);
  } catch {
    return [];
  }
  return files
    .filter((name) => IMAGE_EXT.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}

/**
 * Splits a draft into `{ meta, bodyEn, bodyEs }`.
 * Front matter is `key: value` lines between `---` fences.
 * An optional `===ES===` line separates the English and Spanish reports.
 */
export function parseDraft(raw) {
  const text = raw.replace(/^﻿/, '').replace(/\r\n/g, '\n');
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    throw new Error('Draft is missing the --- front matter block at the top.');
  }

  const meta = {};
  for (const line of match[1].split('\n')) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const at = line.indexOf(':');
    if (at === -1) continue;
    const key = line.slice(0, at).trim();
    const value = line.slice(at + 1).trim().replace(/^["']|["']$/g, '');
    if (key) meta[key] = value;
  }

  const [bodyEn, bodyEs = ''] = match[2].split(/^===ES===$/m);

  return { meta, bodyEn: bodyEn.trim(), bodyEs: bodyEs.trim() };
}

/** Escapes a value for embedding in a JS double-quoted string. */
export function jsString(value) {
  return JSON.stringify(String(value ?? ''));
}

/** Escapes a value for embedding in a JS template literal. */
export function jsTemplate(value) {
  return String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

/** Highest numeric `id:` in a data file, so new entries continue the sequence. */
export function nextId(source) {
  const ids = [...source.matchAll(/^\s*id:\s*(\d+)/gm)].map((m) => Number(m[1]));
  return ids.length ? Math.max(...ids) + 1 : 1;
}

/** Inserts a new entry immediately after `export const <name> = [`. */
export function insertEntry(source, arrayName, entry) {
  const marker = `export const ${arrayName} = [`;
  const at = source.indexOf(marker);

  if (at === -1) {
    throw new Error(`Could not find "${marker}" — the data file layout changed.`);
  }

  const insertAt = at + marker.length;
  return `${source.slice(0, insertAt)}\n${entry}${source.slice(insertAt)}`;
}
