import type { Metadata } from 'next';
import { locales, defaultLocale, type Locale } from '@/i18n/routing';

/**
 * Resolves the canonical base URL. Falls back to localhost for dev so the
 * site still renders, but in prod NEXT_PUBLIC_SITE_URL must be set.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
).replace(/\/$/, '');

/**
 * Build the public path for a locale + relative path.
 * The site uses `localePrefix: 'as-needed'` — `en` has no prefix.
 */
export function localePath(locale: Locale, path: string = ''): string {
  const clean = path.startsWith('/') ? path : path ? `/${path}` : '';
  if (locale === defaultLocale) return clean || '/';
  return `/${locale}${clean}`;
}

export function absoluteUrl(locale: Locale, path: string = ''): string {
  return `${siteUrl}${localePath(locale, path)}`;
}

/**
 * Build the `alternates` object for Next.js Metadata — canonical URL plus
 * `hreflang` entries for every locale, with `x-default` pointing at the
 * default locale. This is the single most-impactful multilingual SEO fix.
 */
export function buildAlternates(
  currentLocale: Locale,
  path: string = '',
): NonNullable<Metadata['alternates']> {
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = absoluteUrl(loc, path);
  }
  languages['x-default'] = absoluteUrl(defaultLocale, path);
  return {
    canonical: absoluteUrl(currentLocale, path),
    languages,
  };
}

/**
 * Map our locale codes to OpenGraph locale codes (BCP-47).
 */
const OG_LOCALES: Record<Locale, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  uk: 'uk_UA',
  ka: 'ka_GE',
  fr: 'fr_FR',
  de: 'de_DE',
  es: 'es_ES',
};

export function ogLocale(locale: Locale): string {
  return OG_LOCALES[locale] || 'en_US';
}

export function ogLocaleAlternates(currentLocale: Locale): string[] {
  return locales
    .filter((l) => l !== currentLocale)
    .map((l) => OG_LOCALES[l]);
}
