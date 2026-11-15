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
  authorship?: 'Individual' | 'Group project';
  /** "featured" projects get a large image card; "index" projects are compact rows. */
  tier: 'featured' | 'index';
  cover?: ImageRef;
  /** What I did on the project, a few short points. */
  did: string[];
  /** What I learnt from it, a few short points. */
  learnt: string[];
  /** Where the work lives: Google Drive, a live site or GitHub. */
  links: LinkItem[];
  tools?: string[];
  /** A short honesty note, e.g. "All figures are simulated." */
  note?: string;
  /** Things Avaneesh needs to supply for this project. Listed in CONTENT_NEEDED.md. */
  todo?: string[];
  hidden?: boolean;
};

export type Course = {
  code: string;
  name: string;
  intro: string;
  projects: Project[];
};

export type TimelineEntry = {
  period?: string;
  /** Where this entry links: a section anchor (#tmun) or a page (/work/quoin/). */
  href: string;
  linkLabel: string;
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
  photos?: ImageRef[];
  todo?: string[];
};
