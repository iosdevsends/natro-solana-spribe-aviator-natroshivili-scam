/**
 * Canonical local seed for the case file.
 *
 * Each locale exports its own translation overlay; missing keys fall through
 * to the English baseline. This file is the source of truth used both by
 * the Strapi seed script (backend/scripts/seed.ts) and by the Next.js
 * fallback when Strapi has no published content yet.
 */

import type { Locale } from '@/i18n/routing';
import type { CaseFileBundle } from '@/lib/types';
import { exhibits } from './exhibits';

import { en } from './locales/en';
import { ru } from './locales/ru';
import { ka } from './locales/ka';
import { fr } from './locales/fr';
import { de } from './locales/de';
import { es } from './locales/es';

const overlays: Record<Locale, () => CaseFileBundle> = {
  en,
  ru,
  ka,
  fr,
  de,
  es,
};

export function getSeed(locale: Locale): CaseFileBundle {
  const bundle = overlays[locale]?.() ?? overlays.en();
  // Exhibits are language-agnostic media references with localized titles
  // already baked into each overlay; this just ensures every locale ships
  // the canonical list, even if its overlay forgot to define exhibits.
  return {
    ...bundle,
    exhibits: bundle.exhibits.length ? bundle.exhibits : exhibits,
  };
}

export { exhibits };
