/**
 * The twelve periods.
 *
 * Period VI's headline, essay and capability strip come straight from the
 * design; the other eras are being written to match. An era still carrying
 * `placeholder: true` has no essay yet and says so on its landing, so the
 * skeleton stays walkable end to end while the content lands.
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
  /** Spelled-out ordinal for the masthead dateline: "Period Six · 1600 — 1760". */
  ordinal: string;
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
  /**
   * Authored "the road passes through" prose, per thread, for a road with no
   * stop this era. A sensible sentence is derived when this is absent — but a
   * road with nothing to say says so explicitly either way, never silently.
   */
  passThrough?: Partial<Record<'energy' | 'materials' | 'information', string>>;
  /** Overrides for the three exit cards, keyed by thread. */
  exitNote?: Partial<Record<'energy' | 'materials' | 'information', string>>;
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
    ordinal: 'One',
    name: 'Fire',
    yearRange: '−9000 — −1200',
    constraint: 'muscle power',
    constraintShort: 'Muscle power',
    title: 'Fire, the plow and the sail move work off the human body and onto fuel, oxen and wind.',
    essay: [
      'Every figure in the strip above is a baseline rather than an achievement. A person walks at five kilometres an hour, a trained runner covers about forty kilometres in a day, the brightest light after sunset is a fire, and each person accounts for roughly eight gigajoules a year, nearly all of it food and firewood. The three energy entries below are the first cases of that last number being paid by something other than a human body. Fire is much older than the period — hearths used habitually are attested a few hundred thousand years ago — and it works as external digestion: heat gelatinises starch and unfolds protein, so the same food yields more energy and takes far less chewing. The plow, in use in Mesopotamia by about 4500 BCE, hands the heaviest job in farming to an ox that sustains roughly seven times a person’s working output. The sail, carved on Egyptian pottery by about 3500 BCE, moves a loaded hull with nobody aboard supplying the power.',
      'The other four entries store something. Clay fired above 900° loses the water bound into its crystal structure and becomes a solid that cannot be softened again, which is what makes a grain jar worth building. A loom crosses two sets of threads under tension so that loose fibre holds together as a sheet. Writing starts as accountancy rather than literature: the earliest tablets from Uruk, around 3200 BCE, record measures of barley, beer and livestock against names. The alphabet then cuts the number of signs a scribe must learn from several hundred to twenty-two. Nothing here travels faster or burns brighter than it did before, but a jar, a cloth and a tablet each hold their contents after the person who made them has gone.',
    ],
    capabilityStrip: strip(
      ['5 km/h', '— on foot'],
      ['40 km', '— a runner'],
      ['Firelight', '— the first'],
      ['8 GJ/yr', '— baseline']
    ),
  },
  {
    id: 'II',
    index: 2,
    ordinal: 'Two',
    name: 'Metal',
    yearRange: '−1200 — 400',
    constraint: 'metal scarcity',
    constraintShort: 'Metal scarcity',
    title: 'Iron ore outcrops in most regions; the tin that bronze needs comes from a handful of them.',
    essay: [
      'All four figures in the strip above move in this period, which happens only once more before the nineteenth century. The horse, ridden rather than driven, raises the fastest sustained travel from five kilometres an hour to fifteen. Posted in relays along a maintained road, the same horse carries a message two hundred kilometres in a day — a rate nothing improves on until 1840. The oil lamp gives a steadier light than an open fire. And animal muscle, harnessed to mills as well as ploughs, lifts energy per person from eight gigajoules a year to eleven.',
      'The metal is the reason the period has its name. Bronze is the better material and always was: a tenth part of tin in copper roughly triples the hardness and drops the melting point below 1,000°, which a pottery kiln can already reach. What bronze does not have is supply. Tin occurs in commercial quantity in very few places — Cornwall, the Erzgebirge, Afghanistan — so every bronze sword in the eastern Mediterranean depends on a trade route running thousands of kilometres. When those routes break down around 1200 BCE, smiths turn to the ore under their own fields. Iron demands a furnace at 1,250° and a great deal more labour at the anvil, and early wrought iron is softer than good bronze. It wins on the only ground that matters here, which is that the ore is nearly everywhere.',
    ],
    capabilityStrip: strip(
      ['15 km/h', '— the horse', true],
      ['200 km', '— relay, new', true],
      ['Oil lamp', '— steadier', true],
      ['11 GJ/yr', '— animal muscle', true]
    ),
  },
  {
    id: 'III',
    index: 3,
    ordinal: 'Three',
    name: 'The Mill',
    yearRange: '400 — 1000',
    constraint: 'perishability',
    constraintShort: 'Perishability',
    title: 'Rivers take over the grinding, and paper makes a written record cheap enough to spend on drafts.',
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
    ordinal: 'Four',
    name: 'Wind & Water',
    yearRange: '1000 — 1450',
    constraint: 'wind & water alone',
    constraintShort: 'Wind & water alone',
    title: 'Windmills put power where no river runs, and the blast furnace reaches the 1,500° that melts iron.',
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
    ordinal: 'Five',
    name: 'The Press',
    yearRange: '1450 — 1600',
    constraint: 'copying by hand',
    constraintShort: 'Copying by hand',
    title: 'One press with movable type prints more pages in a day than a copyist writes in a year.',
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
    ordinal: 'Six',
    name: 'The Instrument Era',
    yearRange: '1600 — 1760',
    constraint: 'unaided human senses',
    constraintShort: 'Unaided senses',
    title:
      'Four instruments built between 1608 and 1665 — the telescope, the barometer, the pendulum clock and the microscope — measured what the unaided senses could not.',
    essay: [
      "Three of the four measures in the strip above do not move in this period: top speed and message range are what they were under Rome, and the brightest available light is still a candle. What changes is measurement, and most of it comes out of a single craft. The Dutch and Italian workshops that ground spectacle glass also ground the lenses for the telescope and the microscope. Pointed up, those lenses showed Galileo four moons orbiting Jupiter in 1610; pointed down, they showed Hooke and Leeuwenhoek a living world nobody had known was there. Alongside the lens grinders, Christiaan Huygens hung a pendulum in a clock case in 1656 and cut error from fifteen minutes a day to fifteen seconds, and Evangelista Torricelli filled a glass tube with mercury in 1643 and weighed the atmosphere against it. All four devices came out of artisan trades — lens grinding, clockmaking, glassblowing — rather than out of natural philosophy, and each reported its result as a number on a scale.",
      "Two of the six entries below are not instruments. Thomas Newcomen's engine of 1712 runs in the vacuum the barometer had proved could exist: steam condensed inside a cylinder, air pressure driving the piston down, water pumped out of a mine at the rate of about fifty horses. It is the only energy entry in this period, and energy per person rises for the first time in four hundred years. John Harrison's H4, tested in 1761, turns a clock into a position. The Earth turns fifteen degrees an hour, so a watch still keeping home-port time tells a navigator how far east or west of that port the ship has come. On the passage to Jamaica, H4 lost five seconds in eighty-one days.",
    ],
    capabilityStrip: strip(
      ['15 km/h', '— unchanged since II'],
      ['200 km', '— relay, as in Rome'],
      ['Candle', '— as ever'],
      ['20 GJ/yr', 'first rise in 400 years', true]
    ),
    passThrough: {
      materials:
        'No materials stop falls in this period. Glass is ground finer and brass is bored truer, but both are refinements in service of the instruments above rather than a constraint removed. The materials road passes through; its next stop is coke-smelted iron in 1763, three years into Period VII.',
    },
    exitNote: { energy: 'fire → fusion' },
  },
  {
    id: 'VII',
    index: 7,
    ordinal: 'Seven',
    name: 'Steam',
    yearRange: '1760 — 1840',
    constraint: 'muscle, again',
    constraintShort: 'Muscle, again',
    title: 'Coal burned under a boiler becomes rotary motion, and a mill no longer has to stand on a river.',
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
    ordinal: 'Eight',
    name: 'Distance',
    yearRange: '1840 — 1900',
    constraint: 'distance',
    constraintShort: 'Distance',
    title: 'The rail carries freight at 100 km/h and the telegraph carries a message in minutes.',
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
    ordinal: 'Nine',
    name: 'Light',
    yearRange: '1880 — 1930',
    constraint: 'darkness',
    constraintShort: 'Darkness',
    title: 'From 1882 a central station sells electricity by the meter, and electric light spreads from the street into the house.',
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
    ordinal: 'Ten',
    name: 'The Molecule',
    yearRange: '1930 — 1960',
    constraint: 'infection',
    constraintShort: 'Infection',
    title: 'Chemists specify nylon on paper before it exists, and penicillin is fermented by the tankful.',
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
    ordinal: 'Eleven',
    name: 'Computation',
    yearRange: '1960 — 1990',
    constraint: 'computation',
    constraintShort: 'Computation',
    title: 'Silicon purified to one foreign atom in a billion carries switches by the million on a single chip.',
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
    ordinal: 'Twelve',
    name: 'Judgement',
    yearRange: '1990 —',
    constraint: 'judgement',
    constraintShort: 'Judgement',
    title: 'Systems trained on examples take over tasks nobody could reduce to written rules.',
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
