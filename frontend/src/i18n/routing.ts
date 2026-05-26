import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'ru', 'uk', 'ka', 'fr', 'de', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  uk: 'UK',
  ka: 'KA',
  fr: 'FR',
  de: 'DE',
  es: 'ES',
};

export const localeFullNames: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  uk: 'Українська',
  ka: 'ქართული',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
});
