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
    essay: [
      'The one figure the strip marks as moving is energy per person, from eleven gigajoules a year to thirteen, and the reason is that rivers begin doing work that animals and people had been doing. A vertical waterwheel of the Roman pattern delivers two to three horsepower without pause, without fodder and without a driver, and by the time the Domesday commissioners count them in 1086 there are 5,624 mills in England alone. The other energy entry is a piece of harness. A strap across a horse’s windpipe chokes the animal under load, which is why the ancient world ploughed with oxen; a padded collar bearing on the shoulders raises what a horse can pull three- to fourfold, and a horse works faster and for longer hours than an ox does.',
      'The constraint this era removes is perishability, and the other two entries are both about a record that lasts. Paper, made at the Han court by 105 CE and reaching Baghdad by the end of the eighth century, is pulped rag and bark drained on a screen and pressed flat. It is not better than parchment — it tears, and it rots in damp — but a parchment Bible costs the skins of a couple of hundred sheep, and paper costs rags. Arabic numerals arrive on the same trade routes. Al-Khwarizmi’s treatise of about 825 sets out the Indian decimal system with its zero, and its advantage over counters on a board is that the working survives: a calculation in positional notation leaves every step on the page, where somebody else can check it.',
    ],
    capabilityStrip: strip(
      ['15 km/h', '— unchanged since II'],
      ['200 km', '— relay, as in Rome'],
      ['Candle', '— new'],
      ['13 GJ/yr', '— the waterwheel', true]
    ),
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
    essay: [
      'One figure moves in this period: energy per person, from thirteen gigajoules a year to fifteen, and the addition is wind. The first documented European windmill stands at Weedley in Yorkshire in 1185. A post mill carries its whole body — sails, gearing, millstones and all — on a single upright post, so the miller can swing the entire machine round to face whatever direction the wind is in. It delivers a few horsepower, which is no better than a good watermill, and it delivers them in flat country where no stream falls far enough to be worth damming. That is most of East Anglia, the Low Countries and the Baltic plain, and from the fifteenth century the same machine is turned to draining land rather than grinding grain.',
      'The other entry raises a temperature by a hundred and fifty degrees and changes what iron is. Bellows driven by a waterwheel hold a tall shaft furnace above 1,500°, but the decisive effect is chemical rather than thermal: iron sitting in contact with burning charcoal takes up carbon, and iron carrying three or four percent carbon melts at around 1,150° instead of 1,538°. The metal runs liquid out of the bottom of the furnace for the first time in two and a half thousand years of iron-making, and it can be poured into a mould like bronze. What comes out is cast iron, hard and brittle, good for cannon and cooking pots and useless for anything that has to bend; converting it to wrought iron takes a second hearth that burns the carbon back out. No information stop falls in this period. Copying is still done by hand, at the speed of a hand.',
    ],
    passThrough: {
      information:
        'No information stop falls in this period. Paper has been available in Europe for two centuries and every copy of every book is still written out by hand. The information road passes through; its next stop is movable type, in 1450.',
    },
    capabilityStrip: strip(
      ['15 km/h', '— unchanged since II'],
      ['200 km', '— relay, as in Rome'],
      ['Candle', '— as ever'],
      ['15 GJ/yr', '— wind added', true]
    ),
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
    essay: [
      'No figure in the strip above moves. A message still travels two hundred kilometres a day by relay, the fastest thing on a road is still a horse, and the best light in a room after dark is still a candle. What changes in this period is how many copies of a document exist. A scribe writing steadily produces two or three pages a day; a press worked by two men produces something like 250 sheets an hour. Gutenberg issued his 42-line Bible around 1455 in roughly 180 copies, more than a scriptorium would turn out in a working lifetime, and by 1500 — fifty years after the first printed sheet — perhaps twenty million books are in circulation in Europe.',
      'The press itself is adapted from the screw press already used for wine and oil, and the ink is a lampblack-and-varnish mixture borrowed from painters. The hard part is the letters, which is why both entries below sit in the same year. Type has to be cast by the hundred thousand, identical enough that a page prints evenly, hard enough to survive thousands of impressions, and cheap enough to melt down and recast. That is a metallurgy problem, and the answer is an alloy of lead, tin and antimony: it melts low enough to cast in a hand mould in seconds, and antimony expands very slightly as it freezes, which cancels the shrinkage of the lead so the letter fills the corners of the mould. Nothing happens on the energy road this period. The press is worked by arms, on paper made by water mills that have been turning since Period III.',
    ],
    passThrough: {
      energy:
        'No energy stop falls in this period. The press is worked by hand and the paper mills run on water that has been driving wheels since Period III; nothing new is burned. The energy road passes through; its next stop is the Newcomen engine, in 1712.',
    },
    capabilityStrip: strip(
      ['15 km/h', '— unchanged since II'],
      ['200 km', '— relay, as in Rome'],
      ['Candle', '— as ever'],
      ['17 GJ/yr', '— creeping']
    ),
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
    essay: [
      'Energy per person rises from seventeen gigajoules a year to twenty-six, the largest single jump in the record to this point, and effectively all of it is coal. Two entries account for it. James Watt patents the separate condenser in 1769: by condensing the steam in a second vessel he keeps the working cylinder hot instead of chilling and reheating it every stroke, which cuts the coal burned for a given amount of work by about three-quarters. Richard Trevithick then does the thing Watt spent thirty years insisting was too dangerous, and runs steam at fifty pounds to the square inch rather than five. High-pressure steam does the same work in a far smaller cylinder and needs no condenser at all, which is what makes an engine light enough to carry its own weight along a rail.',
      'Three more entries are about metal, and they belong together. Coke-smelted iron takes the furnace off the forest and puts it on the coalfield. Crucible steel, melted in a sealed clay pot at 1,600°, comes out with the same carbon content throughout the ingot instead of the graded skin the old cementation process gave. And John Wilkinson’s boring machine cuts a cylinder fifty inches across round to within the thickness of an old shilling — the tolerance without which Watt’s engine leaks past its piston and does not work. The information entry stands apart from all of it. Claude Chappe’s semaphore, a chain of towers with pivoted arms read through a telescope, carries a signal the 230 kilometres from Paris to Lille in minutes, and stops working in fog.',
    ],
    capabilityStrip: strip(
      ['15 km/h', '— unchanged since II'],
      ['200 km', '— relay, as in Rome'],
      ['Argand lamp', '— ten candles', true],
      ['26 GJ/yr', '— coal, at last', true]
    ),
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
    essay: [
      'All four figures in the strip above move, which last happened in Period II. Top speed goes from fifteen kilometres an hour to a hundred, and it does so behind a locomotive hauling freight rather than in a sprint. Gas mains light streets that had been dark since streets existed. Energy per person rises from twenty-six gigajoules a year to thirty-eight. The message figure does not rise so much as cease to be a distance: Samuel Morse’s line between Washington and Baltimore opens on 24 May 1844, and from that day a message takes the same time to cross a continent as to cross a street. Two hundred kilometres a day had stood as the rate since the Persian royal road, through Rome, through printing, through the Napoleonic wars. It ends inside one working lifetime.',
      'The materials entries are what the distance is built out of. Henry Bessemer’s converter blows cold air up through molten pig iron, and the carbon burning out of the metal supplies the heat, so twenty tonnes are refined in twenty minutes with no fuel under the vessel at all; the price of steel falls from roughly fifty pounds a ton to seven, and rails, bridges and ship plate become steel rather than iron. Portland cement, burned at 1,450° and ground to a powder, sets by reacting with water and will do it under water. Vulcanised rubber holds its elasticity across a hundred-degree range instead of melting in summer and cracking in winter. The two energy entries point past this period rather than defining it: the well Edwin Drake drills at Titusville in 1859 finds a fuel that can be pumped and piped, and the self-exciting dynamo of 1867 turns motion into current at a scale permanent magnets could never reach.',
    ],
    capabilityStrip: strip(
      ['100 km/h', '— the rail', true],
      ['Instant', '— the telegraph', true],
      ['Gaslight', '— the lit street', true],
      ['38 GJ/yr', '— steam everywhere', true]
    ),
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
    essay: [
      'Four of the seven entries below are electrical, and together they change what the current is for. Edison’s lamp of 1879 works because the filament has high resistance, which sounds like a detail and is the whole system: high-resistance lamps can be wired in parallel on thin copper, and thin copper is what makes distribution affordable. Pearl Street station opens in Manhattan on 4 September 1882 and sells direct current to about four hundred lamps within a square mile, metered. Once current is available by the meter it turns out to be an industrial reagent as well as a light: Hall and Héroult, working independently and both twenty-two years old, pass a current through alumina dissolved in molten cryolite in 1886 and drop the price of aluminum by a factor of two hundred, and Héroult’s arc furnace of 1900 reaches 3,500° — two thousand degrees above what any flame delivers, with none of the combustion products a flame brings with it.',
      'The other three entries look past this period. Karl Benz patents a vehicle in January 1886 whose engine burns its fuel inside the cylinder, which removes the boiler, the firebox and the condenser and leaves three-quarters of a horsepower in something one person can lift; that ratio is what takes engines off rails and eventually into the air. Tungsten carbide, cemented in cobalt at Krupp in 1927, is harder than the hardened steel every cutting tool had been made of, and cuts it several times faster. And on 12 December 1901 Marconi receives three dots at Signal Hill in Newfoundland, sent 3,500 kilometres from Cornwall — the first message to cross an ocean with nothing physical between the ends.',
    ],
    capabilityStrip: strip(
      ['160 km/h', '— express rail', true],
      ['Instant', '— telegraph, then radio'],
      ['Filament lamp', '— on a grid', true],
      ['54 GJ/yr', '— the grid', true]
    ),
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
    essay: [
      'The constraint this era removes is infection, and the entry that removes it is a manufacturing achievement rather than a discovery. Fleming noticed in 1928 that a mould killed staphylococci on a contaminated plate; twelve years later Florey and Chain had purified enough of the compound to treat a single policeman, who improved and then died when the supply ran out. What closes the gap is deep-tank fermentation, worked out in Peoria and the American pharmaceutical plants in 1943: grow the mould in stirred, aerated vats of corn-steep liquor instead of in flasks. Output goes from a few hundred doses to twenty-one billion units in 1943 and 6.8 trillion in 1945, and the price of a course falls from twenty dollars to about fifty cents. Nylon comes from the same decade and the same habit of mind. Wallace Carothers wrote down the molecule he wanted before anyone made it, and DuPont sold sixty-four million pairs of stockings in the first year.',
      'On the energy road the two entries are both about density. A gas turbine burns continuously instead of in strokes, which is what lifts the power-to-weight ratio far enough to fly; the He 178 takes off on 27 August 1939, and top speed in the strip above goes from 160 kilometres an hour to 900 within twenty years of it. Fission is denser again by a factor nothing chemical approaches: each uranium nucleus that splits releases about 200 million electron-volts, some two hundred million times what burning a carbon atom gives, so a gram of uranium-235 stands in for roughly three tonnes of coal. Chicago Pile-1 goes critical on 2 December 1942 at about half a watt. The information entry is quieter and outlasts both — a germanium crystal with two wire contacts, demonstrated at Bell Labs on 23 December 1947, that amplifies a signal with no filament, no vacuum and no warm-up.',
    ],
    capabilityStrip: strip(
      ['900 km/h', '— the jet', true],
      ['Instant', '— telephone, worldwide'],
      ['Fluorescent', '— cheaper light', true],
      ['78 GJ/yr', '— oil', true]
    ),
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
    essay: [
      'The constraint named at the top of this page is computation, and the entry that removes it is not a computer. A transistor is a deliberate impurity in a crystal, which only works if the crystal is otherwise clean — a stray iron atom is indistinguishable from an intended dopant, and a wafer with a few parts per million of anything unplanned in it produces devices that do not match each other. William Pfann’s zone refining, published in 1952, sweeps a narrow molten band along an ingot and lets the impurities ride along in the liquid, because most of them dissolve more readily in molten silicon than in solid. Repeat the pass and they collect at one end, which is cut off. What is left runs to nine nines of purity: one foreign atom in a billion. Integrated circuits follow, and the count of transistors on a chip then doubles roughly every two years for the rest of the century.',
      'The same demand produces the era’s other material. Glass carries light badly not because of the glass but because of the iron and copper in it, and Charles Kao argued in 1966 that removing them would leave a fibre good enough to signal through; Corning reached seventeen decibels a kilometre in 1970, and the best fibre today loses less than a fifth of a decibel over the same distance. The network built on top of it works on a principle the telephone system never used. ARPANET’s first message, on 29 October 1969, was meant to be LOGIN and got two letters out before the far end crashed; what was new was not the link but the packet — a message cut into addressed fragments that each find their own route. The two energy entries look minor at the time and are not. A silicon photovoltaic cell converts six percent of the sunlight falling on it with no moving part, and the lithium cell prototyped in 1985 holds several times the energy per kilogram of anything rechargeable before it.',
    ],
    capabilityStrip: strip(
      ['900 km/h', '— unchanged since X'],
      ['Instant', '— packet-switched'],
      ['Halogen', '— incremental', true],
      ['104 GJ/yr', '— nuclear added', true]
    ),
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
