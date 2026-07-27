export const SITE = {
  name: 'Throughline',
  description:
    'A reading-first history of the inventions that removed humanity’s limits — ninety essays along three roads: energy, materials, information.',
};

/**
 * Every internal link goes through this. The site is served from a subpath on
 * GitHub Pages (/throughline/), and Astro does not rewrite hrefs written in
 * markup — so the base has to be applied where the link is built. With
 * `base: '/'` (custom domain, local dev) it is a no-op.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const path = (p: string) => `${BASE}${p}`;

/**
 * Where the reader is, before any client-side progress is known. The design
 * ships Period VI as the reading position; the progress script moves it once
 * localStorage says otherwise.
 */
export const DEFAULT_READING_PERIOD = 'VI';

/** Words per minute used for the build-time reading-time labels. */
export const WPM = 220;

/**
 * Assumed length of an entry that has not been written yet, so roster and road
 * reading-time labels stay plausible while the site is still a skeleton.
 * Drop this to 0 once every entry is written.
 */
export const ASSUMED_WORDS = 1500;
