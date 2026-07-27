# Throughline — prose rules

The site is a reading-first history of ~90 inventions. The reader is curious
enough to read ninety short essays; the prose has to earn trust, not applause.
These rules govern all copy: the homepage, period heroes and essays, deks, road
headlines, and entry bodies.

## Voice

Plain declarative prose that leads with a mechanism, a number, a date or a
place. Two sentences already in the build are the model:

> Clock error falls from fifteen minutes a day to fifteen seconds.

> One ox does the digging work of eight people.

Every dek should be that shape — a concrete fact a reader could repeat
accurately at dinner. Period essays should read like the best kind of
encyclopedia entry: confident, specific, unhurried, no throat-clearing.

## Rules

1. **No aphorisms, no thesis-as-epigram.** Rewrite on sight.
2. **No dramatic fragments as sentences.** Fold the fragment into a full
   sentence carrying the fact it gestures at.
3. **No "X stops being Y."** State what changed, with a date or number.
4. **No reversal pivots** — "— and yet everything afterward depends on this"
   and similar em-dash turns. If the contrast is real, state both facts plainly
   and let the reader feel it.
5. **No totality claims that aren't literally defensible.** "Every limit,"
   "ends Earth's centrality," "the first honest measure of." Superlatives
   ("first", "only") are allowed only where they are checkable and true.
6. **One pointed sentence per page, maximum**, and only in the hero or dek
   position — never in essay body. If in doubt, don't spend it.
7. **Navigation copy is navigation copy.** State structure plainly. Data-model
   invariants ("every entry sits on exactly one road") are documentation, not
   front-page prose.
8. **The per-sentence test.** If a sentence would work as a movie tagline or a
   tweet, rewrite it. If it contains a number, a mechanism, a date or a place,
   it is probably fine.

Run rule 8 over every changed sentence before committing.

## Facts

Dates, numbers, entry counts and structure are not writing material. Do not
adjust a fact to improve a sentence. Where a figure is approximate, say so
("about fifty horses", "roughly two tonnes"). Numbers that appear in more than
one place — the capability strips in `src/data/periods.ts`, the road columns in
`src/data/roads.ts`, and the prose that describes them — must agree.

## Where copy lives

| Copy | File |
| --- | --- |
| Homepage hero, lede | `src/pages/index.astro` |
| Site description | `src/lib/site.ts` |
| Period heroes, essays, pass-through notes | `src/data/periods.ts` |
| Entry deks | `src/data/entries.ts` |
| Road headlines, seams, metric trial | `src/data/roads.ts` |
| Entry bodies | `src/content/entries/<slug>.mdx` |

## Entry structure

Each entry MDX file carries frontmatter (`headline`, `dateline`, `keyNumbers`,
`crossRefs`) and four blocks in order: `<Before>`, `<Breakthrough>`,
`<Science numbers="…">`, `<Forward year={…}>`. Cross-references use `<Ref
to="slug">` inside `<Modern>` and may only point at slugs that exist in
`src/data/entries.ts`.

Run `npm run build` before committing: it validates the content schema and every
`<Ref>` target.
