# Throughline

A reading-first history of the inventions that removed humanity's limits: ~90
essays across 12 periods, organised as three roads — **energy**, **materials**,
**information**.

Built from the Claude Design handoff *"Three Roads, hybridized"* (design frames
4a–4d). The architecture contract, in one paragraph: the **road owns every
essay** — there is exactly one copy of each entry on the site, addressed as
`road / stop N of M` — and **period landings** carry the only prose that lives
outside a road. There are exactly two navigation motions: *along* a road
(prev/next stop, prev/next period) and *between* a landing and a road.

## Running it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Layout

```
src/data/         the content model — threads, periods, the entry registry, road views
src/content/      entry prose (MDX); structural metadata never appears here
src/components/   chrome and the repeated devices (capability strip, road band, figure)
src/pages/        /, /periods/[id], /roads/[thread], /entries/[slug]
src/styles/       design tokens + base type
```

`src/data/entries.ts` is the single source of truth for placement. Stop numbers
are **derived** from it, never authored, so an address can't go stale.

## Content status

Period VI (the instrument era) is the only era with finished content. Every
other period, roster and metric is structural placeholder, flagged as such in
the data and surfaced honestly in the UI. Figures are placeholder frames whose
captions are the commissioning spec for the real technical illustration.
