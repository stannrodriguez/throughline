import type { ThreadId } from './threads';
import { THREADS } from './threads';
import { PERIODS } from './periods';
import { path } from '../lib/site';

/**
 * The canonical entry registry.
 *
 * Every entry has exactly ONE primary thread — that is its road placement and
 * its only home on the site. Stop numbers are DERIVED from this list (period
 * order, then the order written here), never authored, so an entry can never
 * carry a stale address. The "of N" totals live on the thread, and are the
 * author's target roster size — larger than this placeholder list.
 *
 * Prose lives in src/content/entries/<slug>.mdx. An entry without an MDX file
 * renders as an honest "not yet written" stop rather than a dead link.
 */

export interface SecondaryTag {
  thread: ThreadId;
  /** One sentence — a tag that can't justify itself in one sentence gets cut. */
  justification: string;
}

export interface EntryMeta {
  slug: string;
  /** Short title as it reads in rosters and on the road. */
  title: string;
  /** One-line dek. Claim-first: it states the point, never teases. */
  dek: string;
  /** Display year, e.g. "1712" or "−4500". */
  year: string;
  periodId: string;
  primary: ThreadId;
  /** Capped at two by the taxonomy rules. */
  secondary?: SecondaryTag[];
}

const E = (
  slug: string,
  title: string,
  year: string,
  periodId: string,
  primary: ThreadId,
  dek: string,
  secondary?: SecondaryTag[]
): EntryMeta => ({ slug, title, year, periodId, primary, dek, secondary });

/* -------------------------------------------------------------------------
   Energy — fire → fusion
------------------------------------------------------------------------- */

const ENERGY: EntryMeta[] = [
  E('fire-kept-and-carried', 'Fire, kept and carried', '−400,000', 'I', 'energy',
    'External digestion: cooking doubles usable calories.'),
  E('the-plow', 'The plow', '−4500', 'I', 'energy',
    'One ox does the digging work of eight people.'),
  E('the-sail', 'The sail', '−3500', 'I', 'energy',
    'The first prime mover that never tires.'),
  E('the-bloomery-furnace', 'The bloomery furnace', '−1200', 'II', 'energy',
    'Charcoal heat wins iron from common ore.'),
  E('the-rotary-quern', 'The rotary quern & animal mill', '−300', 'II', 'energy',
    'Grinding grain leaves human hands for the first time.'),
  E('the-waterwheel', 'The waterwheel, everywhere', '500', 'III', 'energy',
    'Rivers become the first industrial workforce.'),
  E('the-horse-collar', 'The horse collar', '900', 'III', 'energy',
    'Moves the load off the windpipe; a horse can finally pull.'),
  E('the-windmill', 'The windmill', '1180', 'IV', 'energy',
    'Power where no river runs — the Low Countries industrialize.'),
  E('newcomen-engine', 'The Newcomen engine', '1712', 'VI', 'energy',
    'Steam condensed inside the cylinder lets air pressure push the piston down: the atmosphere does the pumping work of about fifty horses.',
    [{ thread: 'materials', justification: 'demands cylinders cast true' }]),
  E('watt-separate-condenser', "Watt's separate condenser", '1769', 'VII', 'energy',
    'The same stroke at four times the efficiency.'),
  E('high-pressure-steam', 'High-pressure steam', '1802', 'VII', 'energy',
    'Small enough to put on wheels.'),
  E('the-oil-well', 'The oil well & refinery', '1859', 'VIII', 'energy',
    'Liquid fuel: energy dense enough to carry.'),
  E('the-dynamo', 'The dynamo', '1867', 'VIII', 'energy',
    'Motion becomes electricity; energy learns to travel by wire.'),
  E('filament-lamp', 'Filament lamp', '1879', 'IX', 'energy',
    'Light becomes something you buy by the hour, not the candle.'),
  E('the-grid', 'The grid', '1882', 'IX', 'energy',
    'Generation leaves the building it powers.'),
  E('internal-combustion', 'Internal combustion', '1886', 'IX', 'energy',
    'The engine shrinks until it fits under a seat.'),
  E('the-gas-turbine', 'The gas turbine', '1939', 'X', 'energy',
    'Continuous burning: power density enough to fly.'),
  E('fission', 'Fission', '1942', 'X', 'energy',
    'Energy from mass, at a million times the density of any fuel before it.'),
  E('the-photovoltaic-cell', 'The photovoltaic cell', '1954', 'XI', 'energy',
    'Sunlight to current with no moving part anywhere.'),
  E('the-lithium-battery', 'The lithium battery', '1985', 'XI', 'energy',
    'Storage light enough that the device stops needing a cord.'),
  E('grid-scale-storage', 'Grid-scale storage', '2015', 'XII', 'energy',
    'The grid stops having to match supply to demand in real time.'),
  E('fusion-attempted', 'Fusion, attempted', '2022', 'XII', 'energy',
    'Net energy gain, once, for a fraction of a second.'),
];

/* -------------------------------------------------------------------------
   Materials — fired clay → engineered matter
------------------------------------------------------------------------- */

const MATERIALS: EntryMeta[] = [
  E('fired-pottery', 'Fired pottery', '−7000', 'I', 'materials',
    'The first transformed matter: clay that will never be mud again.'),
  E('the-loom', 'The loom', '−5000', 'I', 'materials',
    'Fiber becomes fabric; the first engineered structure.'),
  E('bronze-casting', 'Bronze casting', '−1500', 'II', 'materials',
    'Tin + copper: the first alloy better than both parents.'),
  E('bloomery-iron', 'Bloomery iron', '−1200', 'II', 'materials',
    'The common metal — ore is everywhere tin is not.'),
  E('paper', 'Paper', '105', 'III', 'materials',
    'A writing surface cheap enough to waste — the substrate of every archive after.',
    [{ thread: 'information', justification: 'the substrate every later record is kept on' }]),
  E('the-blast-furnace', 'The blast furnace', '1350', 'IV', 'materials',
    "Water-driven bellows push past iron's melting point; metal pours like bronze at last.",
    [{ thread: 'energy', justification: 'water power is what buys the extra 150°' }]),
  E('type-metal', 'Type metal', '1450', 'V', 'materials',
    'Lead-tin-antimony: an alloy that shrinks nowhere as it cools — a letter every time.',
    [{ thread: 'information', justification: 'the press is only as good as the alloy holds an edge' }]),
  E('coke-smelted-iron', 'Coke-smelted iron', '1763', 'VII', 'materials',
    'Iron divorces the forest; the furnace moves to the coalfield.',
    [{ thread: 'energy', justification: 'coal replaces charcoal as the reducing fuel' }]),
  E('crucible-steel', 'Crucible steel', '1770', 'VII', 'materials',
    "Molten, uniform, castable — steel stops being a blacksmith's guess."),
  E('wilkinsons-boring-machine', "Wilkinson's boring machine", '1774', 'VII', 'materials',
    'A cylinder true to the thickness of a shilling — the first part made to a tolerance.'),
  E('bessemer-steel', 'Bessemer steel', '1856', 'VIII', 'materials',
    'Air through the melt: steel by the tonne instead of the pound.'),
  E('portland-cement', 'Portland cement', '1824', 'VIII', 'materials',
    'A stone you can pour into any shape you can build a mould for.'),
  E('vulcanized-rubber', 'Vulcanized rubber', '1839', 'VIII', 'materials',
    'Sulphur cross-links turn a seasonal gum into an engineering material.'),
  E('electric-arc-furnace', 'Electric-arc furnace', '1900', 'IX', 'materials',
    'Heat stops coming from combustion, and the ceiling rises by two thousand degrees.'),
  E('aluminum-cheap', 'Aluminum, cheap', '1886', 'IX', 'materials',
    'Electrolysis drops the price of a light metal by a factor of two hundred.',
    [{ thread: 'energy', justification: 'the process is electricity in solid form' }]),
  E('tungsten-carbide', 'Tungsten carbide', '1927', 'IX', 'materials',
    'A tool harder than the thing every other tool was made of.'),
  E('nylon-and-polymers', 'Nylon & the polymers', '1935', 'X', 'materials',
    'The first material designed molecule-first rather than found and refined.'),
  E('penicillin-at-scale', 'Penicillin, fermented at scale', '1943', 'X', 'materials',
    'Manufacturing hands the job to an organism and controls the conditions instead.'),
  E('zone-refined-silicon', 'Zone-refined silicon', '1952', 'XI', 'materials',
    'Nine nines of purity: one foreign atom per billion, deliberately.',
    [{ thread: 'information', justification: 'no transistor without a crystal this clean' }]),
  E('optical-fiber', 'Optical fiber', '1970', 'XI', 'materials',
    'Glass pure enough to see through twenty kilometres of it.',
    [{ thread: 'information', justification: 'the medium every modern message travels on' }]),
  E('lithium-ion-chemistry', 'Lithium-ion chemistry', '1991', 'XII', 'materials',
    'Intercalation: a battery whose electrodes are a parking structure for ions.',
    [{ thread: 'energy', justification: 'portable storage is what makes portable power possible' }]),
  E('atomic-layer-deposition', 'Atomic-layer deposition', '1995', 'XII', 'materials',
    'Films grown one atomic layer at a time, on command.'),
];

/* -------------------------------------------------------------------------
   Information — the tally stick → deep learning
------------------------------------------------------------------------- */

const INFORMATION: EntryMeta[] = [
  E('writing', 'Writing', '−3200', 'I', 'information',
    'A record that outlives the person who made it.'),
  E('the-alphabet', 'The alphabet', '−1050', 'I', 'information',
    'Two dozen signs replace two thousand; literacy stops being a profession.'),
  E('the-road-relay', 'The road relay', '−500', 'II', 'information',
    'Fresh horses in stages: two hundred kilometres a day, and no faster for two millennia.'),
  E('arabic-numerals', 'Arabic numerals', '825', 'III', 'information',
    'Positional notation makes arithmetic something you can write down and check.'),
  E('movable-type', 'Movable type', '1450', 'V', 'information',
    'Copies multiply; the messenger does not accelerate.',
    [{ thread: 'materials', justification: 'the press waits on an alloy that will not shrink' }]),
  E('telescope', 'The telescope', '1608', 'VI', 'information',
    'Two ground lenses in a tube: in 1610 Galileo counts four moons orbiting Jupiter rather than Earth.'),
  E('microscope', 'The microscope', '1665', 'VI', 'information',
    "Ground glass pointed down instead of up: Hooke's Micrographia of 1665 draws organisms two centuries before anyone connects them to disease."),
  E('pendulum-clock', 'The pendulum clock', '1656', 'VI', 'information',
    "A pendulum's swing depends only on its length: clock error falls from fifteen minutes a day to fifteen seconds."),
  E('barometer-and-vacuum-pump', 'The barometer & vacuum pump', '1643', 'VI', 'information',
    'A column of mercury 760 millimeters high balances the weight of the atmosphere, and the space above it is a vacuum.',
    [{ thread: 'energy', justification: 'the vacuum it proves is what the first engine works in' }]),
  E('marine-chronometer', 'The marine chronometer', '1761', 'VI', 'information',
    'The Earth turns fifteen degrees an hour, so a clock holding home-port time gives longitude: H4 crosses the Atlantic and fixes its position to within two kilometers.'),
  E('optical-semaphore', 'The optical semaphore', '1793', 'VII', 'information',
    'Paris to Lille in minutes, weather permitting.'),
  E('electric-telegraph', 'The electric telegraph', '1844', 'VIII', 'information',
    'A message arrives before any horse leaves the yard. Distance stops being a quantity.'),
  E('telephone', 'The telephone', '1876', 'VIII', 'information',
    'The wire carries a voice, not a code — and the operator stops being a translator.'),
  E('radio', 'Radio', '1901', 'IX', 'information',
    'A message with no wire under it, and no way to stop it at a border.'),
  E('the-transistor', 'The transistor', '1947', 'X', 'information',
    'A switch with no moving part, small enough to make by the billion.'),
  E('the-internet', 'The internet', '1969', 'XI', 'information',
    'Packet switching: a network with no centre to cut.'),
  E('deep-learning', 'Deep learning', '2012', 'XII', 'information',
    'Machines start doing the part of the work nobody could write the rules for.'),
];

/* -------------------------------------------------------------------------
   Derivation
------------------------------------------------------------------------- */

const PERIOD_INDEX = new Map(PERIODS.map((p) => [p.id, p.index]));

export interface Entry extends EntryMeta {
  /** 1-based position along its road. Derived — never authored. */
  stop: number;
  /** Total stops the finished road will have. */
  total: number;
  href: string;
  /** "ENERGY ROAD · STOP 9 OF 31" */
  address: string;
  periodIndex: number;
}

const build = (list: EntryMeta[]): Entry[] => {
  const ordered = [...list].sort(
    (a, b) => (PERIOD_INDEX.get(a.periodId) ?? 0) - (PERIOD_INDEX.get(b.periodId) ?? 0)
  );
  return ordered.map((meta, i) => {
    const total = THREADS[meta.primary].total;
    const stop = i + 1;
    return {
      ...meta,
      stop,
      total,
      href: path(`/entries/${meta.slug}`),
      address: `${THREADS[meta.primary].addressName} · stop ${stop} of ${total}`.toUpperCase(),
      periodIndex: PERIOD_INDEX.get(meta.periodId) ?? 0,
    };
  });
};

export const ROAD_ENTRIES: Record<ThreadId, Entry[]> = {
  energy: build(ENERGY),
  materials: build(MATERIALS),
  information: build(INFORMATION),
};

export const ALL_ENTRIES: Entry[] = [
  ...ROAD_ENTRIES.energy,
  ...ROAD_ENTRIES.materials,
  ...ROAD_ENTRIES.information,
];

const BY_SLUG = new Map(ALL_ENTRIES.map((e) => [e.slug, e]));

export const entryBySlug = (slug: string): Entry => {
  const e = BY_SLUG.get(slug);
  if (!e) throw new Error(`Unknown entry: ${slug}`);
  return e;
};

export const tryEntry = (slug: string): Entry | undefined => BY_SLUG.get(slug);

/** Every stop of one road that falls inside one period, in road order. */
export const stopsIn = (thread: ThreadId, periodId: string): Entry[] =>
  ROAD_ENTRIES[thread].filter((e) => e.periodId === periodId);

/** The whole roster of a period, grouped by road, in energy/materials/info order. */
export const rosterFor = (periodId: string) =>
  (['energy', 'materials', 'information'] as ThreadId[]).map((thread) => ({
    thread,
    stops: stopsIn(thread, periodId),
  }));

/** Prev/next along a road. */
export const roadNeighbours = (entry: Entry) => {
  const road = ROAD_ENTRIES[entry.primary];
  return {
    prev: road[entry.stop - 2] ?? null,
    next: road[entry.stop] ?? null,
  };
};

/** The first stop of a road at or after a period — used by landing exit cards. */
export const nextStopFrom = (thread: ThreadId, periodIndex: number): Entry | null =>
  ROAD_ENTRIES[thread].find((e) => e.periodIndex >= periodIndex) ?? null;
