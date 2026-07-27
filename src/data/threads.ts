export type ThreadId = 'energy' | 'materials' | 'information';

export interface Thread {
  id: ThreadId;
  /** Display name used in tabs, legend, roster group headers. */
  name: string;
  /** How the road is named in prose: "the energy road". */
  roadName: string;
  /** How the road is named in addresses: "ENERGY ROAD · STOP 9 OF 31". */
  addressName: string;
  /** Total stops on the road. Addresses read "stop N of total". */
  total: number;
  /** One-line span, used on exit cards and road kickers. */
  span: string;
}

export const THREADS: Record<ThreadId, Thread> = {
  energy: {
    id: 'energy',
    name: 'Energy',
    roadName: 'Energy road',
    addressName: 'Energy road',
    total: 31,
    span: 'fire → fusion',
  },
  materials: {
    id: 'materials',
    name: 'Materials',
    roadName: 'Materials road',
    addressName: 'Materials road',
    total: 27,
    span: 'fired clay → engineered matter',
  },
  information: {
    id: 'information',
    name: 'Information',
    roadName: 'Information road',
    addressName: 'Info road',
    total: 34,
    span: 'the tally stick → deep learning',
  },
};

/** Canonical display order: energy, materials, information (legend + tabs). */
export const THREAD_ORDER: ThreadId[] = ['energy', 'materials', 'information'];

export const threadList = THREAD_ORDER.map((id) => THREADS[id]);

/** CSS scope class that sets --thread and friends. */
export const threadClass = (id: ThreadId) => `t-${id}`;
