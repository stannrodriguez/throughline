// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // GitHub Pages project site. On a custom domain, set site to that domain and
  // base to '/' — every internal link runs through path() in src/lib/site.ts,
  // so nothing else changes.
  site: 'https://stannrodriguez.github.io',
  base: '/throughline',
  integrations: [mdx()],
  markdown: {
    smartypants: true,
  },
});
