import type { ThreadId } from './threads';

/**
 * The all-periods view for each road: the capability strip laid vertically.
 *
 * A road's metric is allowed to die. Where it does, a seam row explains the
 * handover — that is a feature, not a fallback: when a road's own yardstick
 * stops measuring, the constraint it tracked is dead. Never force one unit
 * across all twelve periods.
 */

export interface Metric {
  /** Big number, e.g. "1,250°" or "200". */
  value: string;
  /** Small unit that sits inside the value, e.g. "km/day". */
  valueUnit?: string;
  /** 0–100. Bar length. */
  barPct: number;
  /** Caption under the bar on full bands, e.g. "BLOOMERY · °C". */
  caption?: string;
  /** The value did not move this period — renders in the "hold" tone. */
  hold?: boolean;
}

export interface RoadBand {
  kind: 'band';
  /** One or more periods sharing a row. Label is derived: "I", "VIII–IX". */
  periods: string[];
  /** full = stops listed with dots on the line; condensed = names only. */
  display: 'full' | 'condensed';
  /** The road has no stop here: compressed row, italic explanation. */
  passThrough?: string;
  /** Trailing clause after a condensed name list. */
  note?: string;
  /** Overrides the period's own year range (roads begin where they have stops). */
  years?: string;
  metric: Metric;
}

export interface RoadSeam {
  kind: 'seam';
  explanation: string;
  /** "°C → NINES OF PURITY" */
  handover: string;
}

export type RoadRow = RoadBand | RoadSeam;

export interface RoadView {
  thread: ThreadId;
  /** "The materials road · 27 entries · fired clay → engineered matter" */
  kicker: string;
  /** Claim-first H1 stating the column's arc. */
  headline: string;
  /** Optional lede under the headline (energy road has one). */
  lede?: string;
  /** Optional right-aligned mono aside in the intro block. */
  aside?: string[];
  /** Mono label above the metric on full bands. */
  metricLabel: string;
  /** Footer caption: column definition + placeholder disclaimer. */
  columnNote: string;
  rows: RoadRow[];
}

export const ROAD_VIEWS: Record<ThreadId, RoadView> = {
  /* ---------------------------------------------------------------- energy */
  energy: {
    thread: 'energy',
    kicker: 'The energy road · 31 entries · −400,000 → today',
    headline: 'Energy per person rises from 8 gigajoules a year to 20 across the first six periods, then to 120 across the next six.',
    lede: "Every stop below is a full entry. The number on the right is the same energy-per-person figure that opens each period landing.",
    aside: ['Read in order: ~4 hr', 'or start anywhere;', 'every stop links on'],
    metricLabel: 'Energy / person',
    columnNote:
      'Column: energy per person (GJ/yr), the same number that opens every period · one unit holds for all twelve · entries outside VI are placeholders',
    rows: [
      { kind: 'band', periods: ['I'], display: 'full', years: '−400,000 — −1200', metric: { value: '8', barPct: 7, caption: 'GJ/yr' } },
      { kind: 'band', periods: ['II'], display: 'full', metric: { value: '11', barPct: 9, caption: 'GJ/yr' } },
      { kind: 'band', periods: ['III'], display: 'full', metric: { value: '13', barPct: 11, caption: 'GJ/yr' } },
      { kind: 'band', periods: ['IV'], display: 'full', metric: { value: '15', barPct: 13, caption: 'GJ/yr' } },
      {
        kind: 'band',
        periods: ['V'],
        display: 'full',
        passThrough:
          'The road passes through. Print and the press are on the information road; the next energy stop waits for coal.',
        metric: { value: '17', barPct: 14 },
      },
      { kind: 'band', periods: ['VI'], display: 'full', metric: { value: '20 ▲', barPct: 17, caption: 'GJ/yr · first rise in 400 yrs' } },
      { kind: 'band', periods: ['VII'], display: 'full', metric: { value: '26', barPct: 22, caption: 'GJ/yr' } },
      { kind: 'band', periods: ['VIII'], display: 'full', metric: { value: '38', barPct: 32, caption: 'GJ/yr' } },
      { kind: 'band', periods: ['IX'], display: 'condensed', metric: { value: '54', barPct: 45 } },
      { kind: 'band', periods: ['X'], display: 'condensed', metric: { value: '78', barPct: 65 } },
      { kind: 'band', periods: ['XI'], display: 'condensed', metric: { value: '104', barPct: 87 } },
      { kind: 'band', periods: ['XII'], display: 'condensed', metric: { value: '120', barPct: 100 } },
    ],
  },

  /* ------------------------------------------------------------- materials */
  materials: {
    thread: 'materials',
    kicker: 'The materials road · 27 entries · fired clay → engineered matter',
    headline:
      'Each class of material waits on a furnace temperature: 900° for pottery, 1,250° for iron, 3,500° for aluminum. From Period X the constraint is purity instead, and the column changes its unit.',
    metricLabel: 'Hottest controlled',
    columnNote:
      'Column: hottest sustained, controlled temperature (°C) through Period IX · nines of achievable purity after the seam · entries outside VI are placeholders',
    rows: [
      { kind: 'band', periods: ['I'], display: 'full', years: '−9000 — −1200', metric: { value: '900°', barPct: 24, caption: 'Kiln · °C' } },
      { kind: 'band', periods: ['II'], display: 'full', metric: { value: '1,250°', barPct: 34, caption: 'Bloomery · °C' } },
      { kind: 'band', periods: ['III'], display: 'full', metric: { value: '1,300°', barPct: 36, caption: 'Stoneware kiln · °C' } },
      { kind: 'band', periods: ['IV'], display: 'full', metric: { value: '1,500°', barPct: 42, caption: 'Blast furnace · °C' } },
      { kind: 'band', periods: ['V'], display: 'full', metric: { value: '1,500°', barPct: 42, caption: '— holds', hold: true } },
      {
        kind: 'band',
        periods: ['VI'],
        display: 'full',
        passThrough:
          'The road passes through the instrument era. Glass is ground finer and brass bored truer, in service of the instruments rather than as a constraint removed.',
        metric: { value: '1,500°', barPct: 42 },
      },
      { kind: 'band', periods: ['VII'], display: 'full', metric: { value: '1,600°', barPct: 46, caption: 'Crucible · °C' } },
      { kind: 'band', periods: ['VIII'], display: 'condensed', metric: { value: '1,700°', barPct: 49 } },
      { kind: 'band', periods: ['IX'], display: 'condensed', metric: { value: '3,500°', barPct: 100 } },
      {
        kind: 'seam',
        explanation:
          'Past 3,500° there is little left to melt that matters. The constraint moves from <em>how hot</em> to <em>how pure, and how precisely arranged</em>, so the column changes its unit here: temperature measures Periods I–IX, purity measures X–XII.',
        handover: '°C → nines of purity',
      },
      { kind: 'band', periods: ['X'], display: 'condensed', metric: { value: '99.9%', barPct: 33 } },
      { kind: 'band', periods: ['XI'], display: 'condensed', metric: { value: '9 nines', barPct: 75 } },
      { kind: 'band', periods: ['XII'], display: 'condensed', metric: { value: '11 nines', barPct: 100 } },
    ],
  },

  /* ----------------------------------------------------------- information */
  information: {
    thread: 'information',
    kicker: 'The information road · 34 entries · the tally stick → deep learning',
    headline:
      'A message covers 200 kilometres a day from Rome until 1840, and then crosses a continent in minutes.',
    metricLabel: 'Message / day',
    columnNote:
      'Column: message range per day through Period VII · sustained throughput after the seam · log-scale bars past the seam · entries outside VI are placeholders',
    rows: [
      {
        kind: 'band',
        periods: ['I', 'II'],
        display: 'condensed',
        years: '−9000 — 400',
        metric: { value: '200', valueUnit: 'km/day', barPct: 9 },
      },
      {
        kind: 'band',
        periods: ['III', 'IV', 'V'],
        display: 'condensed',
        note: 'more copies of each message, carried no faster',
        years: '400 — 1600',
        metric: { value: '200', valueUnit: 'km/day', barPct: 9 },
      },
      {
        kind: 'band',
        periods: ['VI'],
        display: 'condensed',
        note: 'five stops, all of them precision rather than speed',
        metric: { value: '200', valueUnit: 'km/day', barPct: 9 },
      },
      {
        kind: 'band',
        periods: ['VII'],
        display: 'condensed',
        metric: { value: '800', valueUnit: 'km/day', barPct: 22 },
      },
      {
        kind: 'seam',
        explanation:
          'The telegraph does not raise the number, it retires it: a message arrives in minutes at any distance the wire reaches, so “how far in a day” measures nothing. The constraint moves from distance to volume, and the column’s unit becomes throughput.',
        handover: 'km/day → bits/second',
      },
      {
        kind: 'band',
        periods: ['VIII', 'IX'],
        display: 'condensed',
        years: '1840 — 1930',
        metric: { value: '~40', valueUnit: 'bit/s', barPct: 12 },
      },
      {
        kind: 'band',
        periods: ['X', 'XI', 'XII'],
        display: 'condensed',
        years: '1930 —',
        metric: { value: '10¹⁴', valueUnit: 'bit/s', barPct: 100 },
      },
    ],
  },
};

/**
 * The metric tribunal shown above the materials road — the rejected candidates
 * and why. Kept in data because it is an argument the design makes on purpose.
 */
export const MATERIALS_METRIC_TRIAL = {
  kicker: 'The metric, put on trial',
  candidates: [
    {
      verdict: 'rejected' as const,
      claim: 'Rejected: price of iron/steel per kg.',
      body: "It is an economic proxy rather than a capability: it moves with wars, tariffs and wages as much as with furnaces. It does not exist before Period II, when there is no iron, and it goes irrelevant after IX, when the materials story becomes polymers and silicon. It would measure three-quarters of the road with an economic ruler instead of a physical one.",
    },
    {
      verdict: 'rejected' as const,
      claim: 'Rejected: strongest available tensile strength.',
      body: 'Clean and physical, but it ranks one property of one class of solids. Paper, glass, porcelain, cement, rubber and silicon are half the road, and none of them is an achievement in tensile strength. The column would imply the road is about metal, which it is not.',
    },
    {
      verdict: 'chosen' as const,
      claim: 'Chosen: hottest sustained, controlled temperature.',
      body: 'Temperature is the gate each new class of matter waits behind: 900° buys pottery, 1,150° bronze, 1,250° bloomery iron, 1,500° cast iron, 1,600° crucible steel, 3,500° aluminum and the carbides. It is monotonic, physical and causal, and each figure names a process the period before could not run.',
    },
  ],
  coda:
    'The temperature column dies at Period X: polymers and semiconductors are made by molecular control and purity, not by heat. Rather than force one number across twelve periods, <strong>the column hands over at a visible seam</strong>, with temperature measuring I–IX and purity — the nines of silicon — measuring X–XII. Temperature separates the first nine periods and then flattens; purity separates the last three. One unit for all twelve would hide both facts.',
};
