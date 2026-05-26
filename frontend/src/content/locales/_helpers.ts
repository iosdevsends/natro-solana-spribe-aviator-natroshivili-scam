import type { CaseFileBundle, SiteConfigDTO } from '@/lib/types';
import { en } from './en';

/**
 * Deep-merges a partial bundle on top of EN. Anything left undefined falls
 * through to the English baseline so the site renders for every locale even
 * when translations are incomplete.
 */
export function extendEn(partial: DeepPartial<CaseFileBundle>): CaseFileBundle {
  const base = en();
  return {
    config: mergeConfig(base.config, partial.config),
    sections: mergeArrayBySlug(base.sections, partial.sections),
    timeline: mergeArrayBySlug(base.timeline, partial.timeline),
    quotes: mergeArrayBySlug(base.quotes, partial.quotes),
    people: mergeArrayBySlug(base.people, partial.people),
    promiseRealityRows: mergeArrayBySlug(base.promiseRealityRows, partial.promiseRealityRows),
    tierRows: mergeArrayBySlug(base.tierRows, partial.tierRows),
    snapshotCells: mergeArrayBySlug(base.snapshotCells, partial.snapshotCells),
    evidenceRows: mergeArrayBySlug(base.evidenceRows, partial.evidenceRows),
    exhibits: mergeArrayBySlug(base.exhibits, partial.exhibits),
  };
}

function mergeConfig(base: SiteConfigDTO, overlay?: DeepPartial<SiteConfigDTO>): SiteConfigDTO {
  if (!overlay) return base;
  return {
    ...base,
    ...overlay,
    dateline: overlay.dateline ? mergeKvList(base.dateline, overlay.dateline) : base.dateline,
    byline: overlay.byline ? mergeKvList(base.byline, overlay.byline) : base.byline,
    uiStrings: {
      ...(base.uiStrings || {}),
      ...(overlay.uiStrings || {}),
    },
  } as SiteConfigDTO;
}

function mergeKvList(
  base: Array<{ label: string; value: string }> | undefined,
  overlay: ReadonlyArray<DeepPartial<{ label: string; value: string }>>,
): Array<{ label: string; value: string }> {
  if (!base) return overlay.filter((o): o is { label: string; value: string } => !!o?.label && !!o?.value);
  return base.map((b, i) => ({
    label: (overlay[i]?.label as string) ?? b.label,
    value: (overlay[i]?.value as string) ?? b.value,
  }));
}

function mergeArrayBySlug<T extends { slug: string }>(
  base: T[],
  overlay?: ReadonlyArray<DeepPartial<T>>,
): T[] {
  if (!overlay || overlay.length === 0) return base;
  const overlayBySlug = new Map<string, DeepPartial<T>>();
  overlay.forEach((o) => {
    if (o?.slug) overlayBySlug.set(o.slug as string, o);
  });
  return base.map((b) => {
    const o = overlayBySlug.get(b.slug);
    if (!o) return b;
    return { ...b, ...(o as object) } as T;
  });
}

type DeepPartial<T> = T extends (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;
