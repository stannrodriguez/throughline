import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Entry prose. Structural metadata (thread, stop, period, dek) lives in
 * src/data/entries.ts — the registry is the single source of truth for
 * placement, so nothing here may restate it.
 */
const entries = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/entries' }),
  schema: z.object({
    /** Claim-first H1. Longer than the registry's short title. */
    headline: z.string(),
    /** "DUDLEY, ENGLAND · 1712 · T. NEWCOMEN, IRONMONGER" */
    dateline: z.string(),
    /** Mono key numbers sitting opposite THE SCIENCE label. */
    keyNumbers: z.string().optional(),
    /** Deliberate cross-references shown in the side column. Max two. */
    crossRefs: z
      .array(
        z.object({
          label: z.string(),
          thread: z.enum(['energy', 'materials', 'information']),
          /** Slug of the entry being pointed at. */
          to: z.string(),
          /** Trailing clause on the address line, e.g. "same era", "P.VII". */
          addressNote: z.string().optional(),
          /** Short body; <strong> around the named entry. */
          body: z.string(),
          /** Tinted panel (the "fed by" card) vs plain border (the "why 2°" card). */
          tinted: z.boolean().default(false),
        })
      )
      .max(2)
      .default([]),
  }),
});

export const collections = { entries };
