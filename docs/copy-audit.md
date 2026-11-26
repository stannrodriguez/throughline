# Copy audit: throughline

Audit by Neon on branch `copy/neon-audit`. Scope: interface copy, labels, navigation, empty states, metadata, alt/aria text, and `README.md`.

## Issues found and changes made

- **Homepage `<title>` and metadata** (`Base.astro`, `site.ts`, `site.webmanifest`, `og-card.svg`, `package.json`): Homepage title was only `"Throughline"`; added `: A History of Technology` to match the web manifest. Removed em dashes from `SITE.description`, `og:image:alt`, `site.webmanifest`, `og-card.svg`, and `package.json`, and made `og:image:alt` name the three roads explicitly.
- **Homepage lede** (`index.astro`): Removed em dashes and cut repetition of "three roads" and "twelve periods" directly below the kicker.
- **Misleading header indicator** (`RoadHeader.astro`): Replaced non-interactive `"All periods ▴"` (which looked like a dropdown) with `"All 12 periods"`.
- **Navigation jargon and boundary labels** (`EntryChrome.astro`, `entries/[slug].astro`, `RoadBand.astro`, `roads.ts`): Replaced internal `"landing"` jargon with `"Period X: Name"` / `"period page"`. Removed misleading directional arrows from non-link `"Start of road"` / `"End of road"` labels, clarified `aria-label="Road navigation"`, and tightened footer road links.
- **Accessible labels and tooltips** (`PeriodSpine.astro`, `SecondaryChip.astro`, `fusion-attempted.astro`): Added `aria-label` on Roman numeral period links so screen readers announce period names, added a `title` tooltip explaining `2°` secondary chips, and replaced em dashes in the fusion figure's `aria-label`.
- **Period page grammar, jargon, and empty states** (`periods/[period].astro`, `ExitCards.astro`): Fixed ungrammatical `"Reading time, all one:"`, trimmed internal architecture note (`"each lives on its road"`), replaced `"deks"` / `"capability strip"` jargon in the placeholder disclaimer, standardized `"PERIOD ESSAY NOT YET WRITTEN"`, clarified `"First period"` / `"Present"` and `"Next on the ... road"`, and removed em dashes from fallback pass-through prose.
- **Entry page labels and unwritten stub** (`entries/[slug].astro`, `Forward.astro`, `TagRow.astro`, `Ref.astro`, `CrossRefCard.astro`): Replaced em dashes with commas or colons in `"What this makes possible, written from {year}"`, secondary tags, and build errors; gave unwritten entry stubs a clearer next-step note.
- **Road legend, CTA, seam prose, and date ranges** (`roads/[thread].astro`, `ReadingProgress.astro`, `RoadBand.astro`, `roads.ts`, `periods.ts`): Replaced em dashes in `"Continue reading:"`, band notes, `"Holds"`, all 18 `yearRange`/`years` ranges (`to` / `to present`), Period VI's H1, and all 47 capability-strip notes (matching Period VI's existing un-dashed cell). Fixed `"goes irrelevant"` to `"becomes irrelevant"`, fixed the comma splice in the information seam, and replaced en dashes in prose (`Periods I to IX`, `X to XII`).
- **README accuracy and punctuation** (`README.md`): Removed em/en dashes, aligned the `<Forward>` label reference, and updated the outdated claim that figures are still placeholder frames (all 61 registered entries now have SVG plates in `src/components/figures/`).

## Left alone on purpose

- **All 61 entry essays** (`src/content/entries/*.mdx`), **entry registry deks/titles/justifications** (`src/data/entries.ts`), and **in-diagram technical plate text** (`src/components/figures/*.astro`): Stephanie's authored essays, definitions, and figure annotations; untouched per policy (only the `aria-label` on `fusion-attempted.astro` was updated).
- **All 12 period essays, pass-through notes, and remaining period H1s** (`src/data/periods.ts`): Authored historical prose; untouched per policy.
- **Target roster counts and `"~4 hr"` aside** (`index.astro`, `threads.ts`, `roads.ts`): Left untouched to avoid inventing or contradicting author-defined target counts (31/27/34 vs 61 currently registered).
- **Compact Roman numeral range labels** (`RoadBand.astro`): Non-prose paired-period table labels in a narrow column; left as standard range notation.

## Not done (next pass)

- Re-render `public/og-card.png` from the updated `public/og-card.svg` so the raster social card drops its em dash.
- Decide whether the hardcoded `"Read in order: ~4 hr"` aside in `src/data/roads.ts` should instead use the build-time `duration` from `src/lib/reading.ts`.
- Optional editorial pass (with Stephanie's sign-off): unify occasional US/UK spelling mixes across authored deks (`kilometers`/`kilometres`, `fiber`/`fibre`, `Vulcanized`/`vulcanised`).
