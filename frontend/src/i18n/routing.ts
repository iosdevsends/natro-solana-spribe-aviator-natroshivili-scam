import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'ru', 'uk', 'ka', 'fr', 'de', 'es', 'ar', 'ur', 'hi'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/**
 * Locales whose script is right-to-left. The `[locale]/layout` sets
 * `<html dir>` from this; `globals.css` has a small block of RTL-aware
 * overrides for the few directional Tailwind classes used in the layout.
 */
export const rtlLocales: ReadonlyArray<Locale> = ['ar', 'ur'];

export function isRtlLocale(locale: string): boolean {
  return rtlLocales.includes(locale as Locale);
}

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  uk: 'UK',
  ka: 'KA',
  fr: 'FR',
  de: 'DE',
  es: 'ES',
  ar: 'AR',
  ur: 'UR',
  hi: 'HI',
};

export const localeFullNames: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  uk: 'Українська',
  ka: 'ქართული',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  ar: 'العربية',
  ur: 'اردو',
  hi: 'हिन्दी',
};

/**
 * Country/region emoji flag per locale. UK flag stands in for "English";
 * Georgia for `ka`; etc. Renders inline before the locale code in the
 * language switcher so readers immediately see "this is a translation,
 * not just an abbreviation."
 *
 * Arabic is a cross-border language with no single "Arabic flag"; the
 * Arab League emblem (🇦🇪 stands in here as a widely-recognised regional
 * proxy) is used purely as a visual marker in the switcher.
 */
export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  ru: '🇷🇺',
  uk: '🇺🇦',
  ka: '🇬🇪',
  fr: '🇫🇷',
  de: '🇩🇪',
  es: '🇪🇸',
  ar: '🇸🇦',
  ur: '🇵🇰',
  hi: '🇮🇳',
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
});
