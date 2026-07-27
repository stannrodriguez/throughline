# Throughline

A reading-first history of the inventions that removed humanity's limits: ~90
essays across 12 periods, organised as three roads — **energy**, **materials**,
**information**.

Built from the Claude Design handoff *"Three Roads, hybridized"* (design frames
4a–4d).

## The architecture contract

Two page types, two motions.

1. **Road pages** (3, plus a page per entry). A thread read end to end across all
   of history. The road **owns every essay** — there is exactly one copy of each
   entry on the site, addressed as `road / stop N of M`.
2. **Period landings** (12). A short era essay — the only prose that lives
   outside a road — the full roster of that era's entries across all three
   threads *as addresses, never duplicated prose*, the capability strip, and
   exits into the roads.

The only two navigation motions are **along** a road (prev/next stop; prev/next
period on landings) and **between** a landing and a road. No global menu, no
search-first UI, no breadcrumbs. The 12-period spine in the header is the entire
map. If a reader is ever more than one tap from both motions, the design has
failed.

### Thread taxonomy

Every entry has exactly one **primary** thread — that is its road placement, and
placement is singular. **Secondary tags** are capped at two and each must carry a
one-sentence justification; a tag that can't explain itself gets cut. On road and
roster views a secondary tag is a small typographic mark; inside the entry it
expands into a card.

### Seams

Each road's all-periods view carries a metric column — the capability strip laid
vertically. Energy (GJ per person) never seams. Information hands `km/day` over
to `bits/second` after Period VII; materials hands `°C` over to nines of purity
after Period IX. The seam is a designed row, not a fallback: when a road's own
yardstick stops measuring, the constraint it tracked is dead, and that is the
story. Never force one unit across twelve periods.

### Era-voiced forward references

Every entry closes with *"What this makes possible — written from [year]"*:
italic period-voice prose with modern links breaking to roman inside parentheses.
This is the **only** place the site uses period voice. Science sections stay in
plain modern voice.

## Running it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build
npm run check    # astro check — types and template errors
```

## Layout

```
src/data/         the content model — threads, periods, the entry registry, road views
src/content/      entry prose (MDX); structural metadata never appears here
src/components/   chrome and the repeated devices (capability strip, road band, figure)
src/pages/        /, /periods/[id], /roads/[thread], /entries/[slug]
src/styles/       design tokens + base type
```

`src/data/entries.ts` is the single source of truth for placement. **Stop numbers
are derived from it**, never authored, so an address can't go stale — and the
`of N` totals come from the thread, which is the author's target roster size
rather than the current placeholder count.

Cross-references and forward links resolve slugs through that registry, so a link
to an entry that doesn't exist **fails the build** instead of shipping.

### Writing an entry

Add the entry to `src/data/entries.ts` (placement, dek, year, secondary tags),
then write `src/content/entries/<slug>.mdx`:

```mdx
---
headline: The claim, stated. Never a tease.
dateline: DUDLEY, ENGLAND · 1712 · T. NEWCOMEN, IRONMONGER
crossRefs:
  - label: Fed by the information road
    thread: information
    to: barometer-and-vacuum-pump      # must exist in the registry
    addressNote: same era
    tinted: true
    body: Why this matters, in a sentence. <strong>The named entry</strong> in bold.
---

<Before>…</Before>
<Breakthrough>…</Breakthrough>
<Science numbers="1,600 : 1 · 22 kN · <1%">
  …two columns of prose…
  <Figure caption="WIDE DIAGRAM — …" spec="what the illustration should show" />
</Science>
<Forward year={1712}>
  Period voice, with moderns breaking out:
  <Modern>(<Ref to="watt-separate-condenser">Watt's separate condenser</Ref>, next stop)</Modern>.
</Forward>
```

An entry in the registry with no MDX file renders as an honest *not yet written*
stop with its address already fixed — navigation never dead-ends.

## Reading position

The only client state: visited entry slugs per road, in `localStorage` under
`throughline:progress:v1`. The road view renders the design's default position
(Period VI) server-side; the progress script moves it to wherever the reader
actually got to, marking earlier stops solid and later ones outlined. With
storage unavailable the default stands and every stop stays solid — reading never
depends on it.

Reading-time labels are computed at build time from word count
(`src/lib/reading.ts`). Entries with no prose yet count as `ASSUMED_WORDS`, so
the labels stay plausible while the site is a skeleton; drop that constant to 0
once everything is written.

## Content status

Period VI (the instrument era) is the only era with finished content: its
headline, essay and capability strip, plus the Newcomen engine and the marine
chronometer at full depth. Everything else — the other eleven eras' essays,
rosters, capability numbers, and road metrics — is structural placeholder,
flagged in the data and surfaced honestly in the UI rather than hidden.

Figures are placeholder frames whose captions are the commissioning spec for the
real technical illustration (Macaulay-spirit cutaways, patent-style linework).

### Ground rules to keep

- Claim-first headlines everywhere: the title states the point, never teases.
- No duplicated entry prose outside its road page.
- Secondary tags capped at two, each with a justification sentence.
- Period voice appears only in the forward-reference block.
- A road with nothing to say in a period says so explicitly.
- No border radius anywhere; rules do hierarchy (2px ink = section, 1px hairline
  = row).
