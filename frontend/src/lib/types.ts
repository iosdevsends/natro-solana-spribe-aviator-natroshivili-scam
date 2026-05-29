import type { StrapiMedia } from './strapi';

export type LocalizedTag = string;

export interface ExhibitDTO {
  id: number;
  documentId?: string;
  slug: string;
  exhibitNumber?: string;
  fileNumber?: number;
  displayOrder?: number;
  title: string;
  caption?: string;
  mediaType: 'image' | 'video';
  media?: StrapiMedia | null;
  thumbnail?: StrapiMedia | null;
  source?: string;
  whyItMatters?: string;
  highlighted?: boolean;
  /** Legacy filesystem path used by the fallback seed. */
  legacySrc?: string;
  /** Intrinsic dimensions of the legacy file (helps next/image avoid CLS). */
  legacyWidth?: number;
  legacyHeight?: number;
}

export interface CaseSectionDTO {
  id: number;
  slug: string;
  anchor: string;
  order: number;
  numeral?: string;
  kicker?: string;
  heading: string;
  lead?: string;
  body?: string;
  pullquoteText?: string;
  pullquoteAttribution?: string;
  pullquoteSource?: string;
}

export interface TimelineEventDTO {
  id: number;
  slug: string;
  occurredAt: string;
  displayDate?: string;
  order: number;
  title: string;
  body?: string;
  isDamning?: boolean;
  tags?: LocalizedTag[];
  exhibits?: ExhibitDTO[];
}

export interface QuoteDTO {
  id: number;
  slug: string;
  shortLabel: string;
  order?: number;
  text: string;
  originalText?: string;
  attribution?: string;
  source?: string;
  sourceDate?: string;
  isHeadline?: boolean;
  isDamning?: boolean;
  exhibits?: ExhibitDTO[];
}

export interface PersonHandle {
  platform: string;
  handle: string;
  url?: string;
  followers?: string;
  verified?: boolean;
}

export interface PersonDTO {
  id: number;
  slug: string;
  order?: number;
  fullName: string;
  displayName?: string;
  role?: string;
  handles?: PersonHandle[];
  description?: string;
  statement?: string;
  statementLabel?: string;
  exhibits?: ExhibitDTO[];
}

export interface PromiseRealityRowDTO {
  id: number;
  slug: string;
  order: number;
  categoryLabel: string;
  promiseText: string;
  realityText: string;
  realityIsStrong?: boolean;
}

export interface TierRowDTO {
  id: number;
  slug: string;
  order: number;
  tierId?: string;
  tierName: string;
  threshold?: string;
  description?: string;
  delivered?: string;
  isCompilerRow?: boolean;
}

export interface SnapshotCellDTO {
  id: number;
  slug: string;
  order: number;
  value: string;
  label: string;
  isBad?: boolean;
}

export interface EvidenceRowDTO {
  id: number;
  slug: string;
  order: number;
  type?: string;
  title: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  isOnRequest?: boolean;
}

export interface DatelineEntry {
  label: string;
  value: string;
}

export interface SiteConfigDTO {
  siteTitle: string;
  /**
   * Optional SEO-only <title>. When set, used for the document <title> and
   * OG/Twitter titles on the homepage while siteTitle stays the displayed
   * masthead brand. Lets the title tag carry the named entities
   * (Natroshvili / Spribe / NATRO) that searchers actually type.
   */
  seoTitle?: string;
  tagline?: string;
  mastheadMeta?: string;
  seoDescription?: string;
  kicker?: string;
  headline?: string;
  deck?: string;
  /**
   * Plain-talk TL;DR shown as the bordered lede on /scam-one-pager. Localised
   * like the rest of the bundle; supports inline markdown (**bold**, *italic*)
   * via <Prose>. Falls back to the EN baseline when a locale omits it.
   */
  scamBriefTldr?: string;
  dateline?: DatelineEntry[];
  byline?: DatelineEntry[];
  executiveSummary?: string;
  archiveCallout?: {
    kicker?: string;
    headline?: string;
    body?: string;
    linkText?: string;
    linkUrl?: string;
    urlLabel?: string;
  };
  graduationBlock?: {
    kicker?: string;
    headline?: string;
    body?: string;
    linkText?: string;
    linkUrl?: string;
  };
  rightOfReply?: string;
  contactBlock?: string;
  compilerAddendum?: string;
  colophon?: string;
  uiStrings?: Record<string, string>;
}

export interface UserStoryDTO {
  id: number;
  documentId?: string;
  slug: string;
  title: string;
  summary?: string;
  body: string;
  tokenSymbol?: string;
  tokenChain?: string;
  lossUsd?: number;
  incidentDate?: string;
  namedParties?: Array<{ name: string; role?: string; handles?: string[] }>;
  evidenceLinks?: Array<{ label: string; url: string }>;
  authorDisplayName?: string;
  isAnonymous?: boolean;
  verificationStatus?: 'unverified' | 'partial' | 'verified' | 'rejected';
  moderationStatus?: 'pending' | 'needs-edits' | 'approved' | 'rejected';
  submittedAt?: string;
  approvedAt?: string;
  publishedAt?: string;
}

export interface FaqEntryDTO {
  id: number;
  slug: string;
  order: number;
  question: string;
  shortAnswer: string;
  /** Markdown / rich body shown on /faq/[slug]. Should NOT include the question itself. */
  extendedBody: string;
  /** Optional list of citation URLs that back the answer. */
  citations?: Array<{ label: string; url: string }>;
  /** ISO date of last review (used for dateModified in Article schema). */
  lastReviewedAt?: string;
}

export interface CaseFileBundle {
  config: SiteConfigDTO;
  sections: CaseSectionDTO[];
  timeline: TimelineEventDTO[];
  quotes: QuoteDTO[];
  people: PersonDTO[];
  promiseRealityRows: PromiseRealityRowDTO[];
  tierRows: TierRowDTO[];
  snapshotCells: SnapshotCellDTO[];
  evidenceRows: EvidenceRowDTO[];
  exhibits: ExhibitDTO[];
  faq: FaqEntryDTO[];
}
