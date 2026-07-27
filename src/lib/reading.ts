import { getCollection } from 'astro:content';
import { ASSUMED_WORDS, WPM } from './site';
import type { Entry } from '../data/entries';

/**
 * Reading-time labels are computed at build time from word count. Entries that
 * have no prose yet count as ASSUMED_WORDS so the labels stay plausible while
 * the site is still a skeleton.
 */

const countWords = (s: string) => (s.trim().match(/\S+/g) ?? []).length;

let cache: Map<string, number> | null = null;

async function wordCounts(): Promise<Map<string, number>> {
  if (cache) return cache;
  const written = await getCollection('entries');
  cache = new Map(written.map((e) => [e.id, countWords(e.body ?? '')]));
  return cache;
}

export async function writtenSlugs(): Promise<Set<string>> {
  return new Set((await wordCounts()).keys());
}

export async function minutesFor(entries: Entry[]): Promise<number> {
  const counts = await wordCounts();
  const words = entries.reduce((sum, e) => sum + (counts.get(e.slug) ?? ASSUMED_WORDS), 0);
  return Math.max(1, Math.round(words / WPM));
}

/** "~41 min" / "~4 hr 10 min" */
export function formatDuration(minutes: number): string {
  if (minutes < 90) return `~${minutes} min`;
  const hr = Math.floor(minutes / 60);
  const min = minutes % 60;
  return min ? `~${hr} hr ${min} min` : `~${hr} hr`;
}

export async function durationFor(entries: Entry[]): Promise<string> {
  return formatDuration(await minutesFor(entries));
}
