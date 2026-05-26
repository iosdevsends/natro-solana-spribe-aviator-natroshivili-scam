/**
 * Aggregates the full case-file bundle for a locale from Strapi.
 * Falls back to the local seed (under /content) when Strapi is unreachable
 * or has no data yet — so the site renders even on first boot.
 */

import 'server-only';
import type {
  CaseFileBundle,
  CaseSectionDTO,
  EvidenceRowDTO,
  ExhibitDTO,
  PersonDTO,
  PromiseRealityRowDTO,
  QuoteDTO,
  SiteConfigDTO,
  SnapshotCellDTO,
  TierRowDTO,
  TimelineEventDTO,
} from './types';
import { strapiFetch, type StrapiResponse, type StrapiCollection } from './strapi';
import { getSeed } from '@/content/seed';
import type { Locale } from '@/i18n/routing';

const REVALIDATE_SECONDS = 60;

async function safeCollection<T>(
  path: string,
  locale: string,
  populate?: string | string[] | Record<string, unknown>,
  sort?: string,
): Promise<T[]> {
  try {
    const res = await strapiFetch<StrapiCollection<T>>(path, {
      locale,
      populate: populate ?? '*',
      sort,
      pagination: { pageSize: 100 },
      revalidate: REVALIDATE_SECONDS,
      tags: ['case-file', `case-file:${locale}`],
    });
    return res.data || [];
  } catch (err) {
    console.warn(`[strapi] fallback for ${path} (${locale}): ${(err as Error).message}`);
    return [];
  }
}

async function safeSingle<T>(
  path: string,
  locale: string,
  populate?: string | string[],
): Promise<T | null> {
  try {
    const res = await strapiFetch<StrapiResponse<T>>(path, {
      locale,
      populate: populate ?? '*',
      revalidate: REVALIDATE_SECONDS,
      tags: ['case-file', `case-file:${locale}`],
    });
    return res.data || null;
  } catch (err) {
    console.warn(`[strapi] fallback for ${path} (${locale}): ${(err as Error).message}`);
    return null;
  }
}

export async function loadCaseFile(locale: Locale): Promise<CaseFileBundle> {
  const seed = getSeed(locale);

  const [
    config,
    sections,
    timeline,
    quotes,
    people,
    promiseRealityRows,
    tierRows,
    snapshotCells,
    evidenceRows,
    exhibits,
  ] = await Promise.all([
    safeSingle<SiteConfigDTO>('/site-config', locale, ['*']),
    safeCollection<CaseSectionDTO>('/case-sections', locale, '*', 'order:asc'),
    safeCollection<TimelineEventDTO>('/timeline-events', locale, ['exhibits', 'exhibits.media', 'exhibits.thumbnail'], 'order:asc'),
    safeCollection<QuoteDTO>('/quotes', locale, ['exhibits', 'exhibits.media'], 'order:asc'),
    safeCollection<PersonDTO>('/people', locale, ['exhibits', 'exhibits.media'], 'order:asc'),
    safeCollection<PromiseRealityRowDTO>('/promise-reality-rows', locale, undefined, 'order:asc'),
    safeCollection<TierRowDTO>('/tier-rows', locale, undefined, 'order:asc'),
    safeCollection<SnapshotCellDTO>('/snapshot-cells', locale, undefined, 'order:asc'),
    safeCollection<EvidenceRowDTO>('/evidence-rows', locale, undefined, 'order:asc'),
    safeCollection<ExhibitDTO>('/exhibits', locale, ['media', 'thumbnail'], 'displayOrder:asc'),
  ]);

  return {
    config: config ?? seed.config,
    sections: sections.length ? sections : seed.sections,
    timeline: timeline.length ? timeline : seed.timeline,
    quotes: quotes.length ? quotes : seed.quotes,
    people: people.length ? people : seed.people,
    promiseRealityRows: promiseRealityRows.length ? promiseRealityRows : seed.promiseRealityRows,
    tierRows: tierRows.length ? tierRows : seed.tierRows,
    snapshotCells: snapshotCells.length ? snapshotCells : seed.snapshotCells,
    evidenceRows: evidenceRows.length ? evidenceRows : seed.evidenceRows,
    exhibits: exhibits.length ? exhibits : seed.exhibits,
  };
}
