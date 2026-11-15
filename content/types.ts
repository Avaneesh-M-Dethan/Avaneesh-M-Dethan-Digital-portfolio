/**
 * Content model for the whole site. Every word on the site lives in /content.
 *
 * Placeholders: any field you have not filled in yet is either left out or marked
 * with `todo`. Items with `todo` are hidden from the public build and listed in
 * CONTENT_NEEDED.md. Run `npm run dev` to see them highlighted on the page.
 */

export type ImageRef = {
  /** Key from content/images.manifest.json, e.g. "projects/quoin/quoin-hero-desktop". */
  key: string;
  alt: string;
  caption?: string;
};

export type LinkItem = {
  label: string;
  href: string;
  /** For files in /public (e.g. "/files/deck.pdf"): the link is only shown once the file exists. */
  requiresFile?: boolean;
};

export type Fact = { label: string; value: string };

/** A named item inside a section: SOAPS letters, devices, steps, figures. */
export type Item = { label: string; title?: string; body?: string; tag?: string };

export type Block = {
  heading: string;
  body?: string[];
  points?: string[];
  items?: Item[];
  /** How items render: a grid of cards, a numbered sequence, or big figures. */
  itemStyle?: 'grid' | 'sequence' | 'figures';
  quote?: { text: string; source?: string };
  /** Set when this block still needs Avaneesh's input. Hidden in production. */
  todo?: string;
};

export type Status = { label: string; tone: 'live' | 'ongoing' | 'done' | 'experiment' | 'pending' };

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle?: string;
  category: string;
  status: Status;
  year?: string;
  /** One line, shown on cards and rows. */
  summary: string;
  role?: string;
  authorship?: 'Individual' | 'Group project';
  /** "featured" projects get imagery and their own page; "index" projects expand in place. */
  tier: 'featured' | 'index';
  cover?: ImageRef;
  /** Typographic cover for featured work without screenshots. */
  coverType?: { display: string; caption: string };
  gallery?: ImageRef[];
  links: LinkItem[];
  tools?: string[];
  facts?: Fact[];
  sections: Block[];
  /** A short honesty note shown prominently, e.g. "All figures are simulated." */
  note?: string;
  /** Things Avaneesh needs to supply for this project. Listed in CONTENT_NEEDED.md. */
  todo?: string[];
  hidden?: boolean;
};

export type Course = {
  code: 'LLR' | 'DIR' | 'TLM';
  name: string;
  intro: string;
  projects: Project[];
};

export type TimelineEntry = {
  period?: string;
  title: string;
  place: string;
  body: string;
  todo?: string[];
};

export type LeadershipEntry = {
  id: string;
  marker: string;
  role: string;
  organisation: string;
  period?: string;
  status?: Status;
  body: string[];
  themes: string[];
  awards?: { title: string; count: number; note?: string };
  flow?: { caption: string; steps: { title: string; detail: string; branch?: { title: string; detail: string } }[] };
  photos?: ImageRef[];
  todo?: string[];
};
