/**
 * The twelve periods.
 *
 * Period VI is the only era with finished content — its headline, essay and
 * capability strip come straight from the design. Everything else here is
 * structural placeholder (flagged with `placeholder: true`) so the skeleton is
 * walkable end to end; the author replaces it with real content.
 */

export interface CapabilityCell {
  label: string;
  value: string;
  /** The accumulating flat-note: "— unchanged since II", "— as ever". */
  note: string;
  /** A number that moves this period renders in energy orange with a ▲. */
  moved?: boolean;
}

export interface Period {
  /** Roman numeral — the canonical id, also the URL slug (lowercased). */
  id: string;
  /** 1-based position, for prev/next and the spine. */
  index: number;
  /** Short name used in mastheads and prev/next links: "The Press", "Steam". */
  name: string;
  yearRange: string;
  /** The constraint removed, lowercase, as it appears after "constraint removed:". */
  constraint: string;
  /** Short form of the constraint for the road view's left column. */
  constraintShort: string;
  /** Claim-first H1 for the landing. */
  title: string;
  /** The front-page essay, in period voice. Paragraphs. Empty = not yet written. */
  essay: string[];
  capabilityStrip: CapabilityCell[];
  /** True while the era's content is structural placeholder. */
  placeholder?: boolean;
}

const strip = (
  speed: [string, string, boolean?],
  message: [string, string, boolean?],
  light: [string, string, boolean?],
  energy: [string, string, boolean?]
): CapabilityCell[] => [
  { label: 'Top speed', value: speed[0], note: speed[1], moved: speed[2] },
  { label: 'Message / day', value: message[0], note: message[1], moved: message[2] },
  { label: 'Brightest light', value: light[0], note: light[1], moved: light[2] },
  { label: 'Energy / person', value: energy[0], note: energy[1], moved: energy[2] },
];

export const PERIODS: Period[] = [
  {
    id: 'I',
    index: 1,
    name: 'Fire',
    yearRange: '−9000 — −1200',
    constraint: 'muscle power',
    constraintShort: 'Muscle power',
    title: 'Fire, the plow and the sail put work outside the human body for the first time.',
    essay: [],
    capabilityStrip: strip(
      ['5 km/h', '— on foot'],
      ['40 km', '— a runner'],
      ['Firelight', '— the first'],
      ['8 GJ/yr', '— baseline']
    ),
    placeholder: true,
  },
  {
    id: 'II',
    index: 2,
    name: 'Metal',
    yearRange: '−1200 — 400',
    constraint: 'metal scarcity',
    constraintShort: 'Metal scarcity',
    title: 'Iron is common where bronze was rare, and the tool stops being a luxury.',
    essay: [],
    capabilityStrip: strip(
      ['15 km/h', '— the horse', true],
      ['200 km', '— relay, new', true],
      ['Oil lamp', '— steadier', true],
      ['11 GJ/yr', '— animal muscle', true]
    ),
    placeholder: true,
  },
  {
    id: 'III',
    index: 3,
    name: 'The Mill',
    yearRange: '400 — 1000',
    constraint: 'perishability',
    constraintShort: 'Perishability',
    title: 'Rivers take over the grinding, and paper makes a record cheap enough to waste.',
    essay: [],
    capabilityStrip: strip(
      ['15 km/h', '— unchanged since II'],
      ['200 km', '— relay, as in Rome'],
      ['Candle', '— new'],
      ['13 GJ/yr', '— the waterwheel', true]
    ),
    placeholder: true,
  },
  {
    id: 'IV',
    index: 4,
    name: 'Wind & Water',
    yearRange: '1000 — 1450',
    constraint: 'wind & water alone',
    constraintShort: 'Wind & water alone',
    title: 'The mill leaves the riverbank, and the furnace finally melts iron.',
    essay: [],
    capabilityStrip: strip(
      ['15 km/h', '— unchanged since II'],
      ['200 km', '— relay, as in Rome'],
      ['Candle', '— as ever'],
      ['15 GJ/yr', '— wind added', true]
    ),
    placeholder: true,
  },
  {
    id: 'V',
    index: 5,
    name: 'The Press',
    yearRange: '1450 — 1600',
    constraint: 'copying by hand',
    constraintShort: 'Copying by hand',
    title: 'A page stops being copied and starts being printed; knowledge outruns the copyist.',
    essay: [],
    capabilityStrip: strip(
      ['15 km/h', '— unchanged since II'],
      ['200 km', '— relay, as in Rome'],
      ['Candle', '— as ever'],
      ['17 GJ/yr', '— creeping']
    ),
    placeholder: true,
  },
  {
    id: 'VI',
    index: 6,
    name: 'The Instrument Era',
    yearRange: '1600 — 1760',
    constraint: 'unaided human senses',
    constraintShort: 'Unaided senses',
    title: 'Glass and escapements gave the world a set of senses it could trust.',
    essay: [
      "This is a record of the years in which humanity stopped trusting its senses and built better ones. Nothing in this period moves faster, carries further, or burns brighter — the strip above is four flat lines — and yet everything afterward depends on what happens here. The reason is a single craft: lens-grinding. The same Dutch and Italian workshops that grind spectacle glass grind the telescope that ends Earth's centrality and the microscope that gives disease a visible cause two centuries early. Beside them, clockmakers turn a swinging mass into the first honest measure of time, and instrument-makers weigh the air itself. Four devices, one culture: artisans, not philosophers, converting the invisible into something a person can read off a scale.",
      'Two of the six entries below are not instruments at all — they are what instruments make possible. The vacuum, once weighed, becomes an engine part; the clock, once seaworthy, becomes a position. One bends the energy line upward for the first time in four centuries. The other keeps every ship that will carry the next period’s trade from the rocks.',
    ],
    capabilityStrip: strip(
      ['15 km/h', '— unchanged since II'],
      ['200 km', '— relay, as in Rome'],
      ['Candle', '— as ever'],
      ['20 GJ/yr', 'first rise in 400 years', true]
    ),
  },
  {
    id: 'VII',
    index: 7,
    name: 'Steam',
    yearRange: '1760 — 1840',
    constraint: 'muscle, again',
    constraintShort: 'Muscle, again',
    title: 'Fuel becomes motion, and the mill walks away from the river.',
    essay: [],
    capabilityStrip: strip(
      ['15 km/h', '— unchanged since II'],
      ['200 km', '— relay, as in Rome'],
      ['Argand lamp', '— ten candles', true],
      ['26 GJ/yr', '— coal, at last', true]
    ),
    placeholder: true,
  },
  {
    id: 'VIII',
    index: 8,
    name: 'Distance',
    yearRange: '1840 — 1900',
    constraint: 'distance',
    constraintShort: 'Distance',
    title: 'The wire and the rail delete distance within a single lifetime.',
    essay: [],
    capabilityStrip: strip(
      ['100 km/h', '— the rail', true],
      ['Instant', '— the telegraph', true],
      ['Gaslight', '— the lit street', true],
      ['38 GJ/yr', '— steam everywhere', true]
    ),
    placeholder: true,
  },
  {
    id: 'IX',
    index: 9,
    name: 'Light',
    yearRange: '1880 — 1930',
    constraint: 'darkness',
    constraintShort: 'Darkness',
    title: 'Electricity arrives as a utility, and the day stops ending at sunset.',
    essay: [],
    capabilityStrip: strip(
      ['160 km/h', '— express rail', true],
      ['Instant', '— telegraph, then radio'],
      ['Filament lamp', '— on a grid', true],
      ['54 GJ/yr', '— the grid', true]
    ),
    placeholder: true,
  },
  {
    id: 'X',
    index: 10,
    name: 'The Molecule',
    yearRange: '1930 — 1960',
    constraint: 'infection',
    constraintShort: 'Infection',
    title: 'Matter is designed rather than found, and infection stops being fate.',
    essay: [],
    capabilityStrip: strip(
      ['900 km/h', '— the jet', true],
      ['Instant', '— telephone, worldwide'],
      ['Fluorescent', '— cheaper light', true],
      ['78 GJ/yr', '— oil', true]
    ),
    placeholder: true,
  },
  {
    id: 'XI',
    index: 11,
    name: 'Computation',
    yearRange: '1960 — 1990',
    constraint: 'computation',
    constraintShort: 'Computation',
    title: 'Purified silicon makes arithmetic almost free.',
    essay: [],
    capabilityStrip: strip(
      ['900 km/h', '— unchanged since X'],
      ['Instant', '— packet-switched'],
      ['Halogen', '— incremental', true],
      ['104 GJ/yr', '— nuclear added', true]
    ),
    placeholder: true,
  },
  {
    id: 'XII',
    index: 12,
    name: 'Judgement',
    yearRange: '1990 —',
    constraint: 'judgement',
    constraintShort: 'Judgement',
    title: 'Machines begin to do the part of the work nobody could write down.',
    essay: [],
    capabilityStrip: strip(
      ['900 km/h', '— unchanged since X'],
      ['Instant', '— everyone, at once'],
      ['LED', '— light stops costing', true],
      ['120 GJ/yr', '— plateauing', true]
    ),
    placeholder: true,
  },
];

export const PERIOD_BY_ID = new Map(PERIODS.map((p) => [p.id, p]));

export const periodSlug = (id: string) => id.toLowerCase();

export const periodById = (id: string): Period => {
  const p = PERIOD_BY_ID.get(id);
  if (!p) throw new Error(`Unknown period: ${id}`);
  return p;
};

export const periodNeighbours = (id: string) => {
  const p = periodById(id);
  return {
    prev: PERIODS[p.index - 2] ?? null,
    next: PERIODS[p.index] ?? null,
  };
};
