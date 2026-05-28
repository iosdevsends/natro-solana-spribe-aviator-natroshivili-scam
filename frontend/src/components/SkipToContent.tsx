import { getTranslations } from 'next-intl/server';

/**
 * Accessibility skip-to-content link.
 *
 * WCAG 2.4.1 requires that keyboard users be able to bypass blocks of
 * repeated content (header, nav, language switcher) and jump straight
 * to the main content area. This component is the first focusable
 * element on every page; it's invisible until focused, then surfaces
 * a clearly-styled button-link at top-centre of the viewport.
 *
 * Editorial choices:
 *   - top-center positioning so it never collides with the file-ID
 *     strap (top-left) or language switcher (top-right) of the
 *     ceremonial masthead
 *   - `position: fixed` so it doesn't push content; `z-[1000]` keeps
 *     it above the sticky masthead (which is z-40)
 *   - paper background + accent border + accent text — matches the
 *     case-file's editorial palette
 *   - label localised via the existing `common.skipToContent` key
 *     (translated in all 8 locales: en, ru, uk, ka, fr, de, es, ar)
 */
export async function SkipToContent() {
  const t = await getTranslations('common');
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-1/2 focus:-translate-x-1/2 focus:z-[1000] focus:bg-[var(--color-paper)] focus:border-2 focus:border-[var(--color-accent)] focus:text-[var(--color-accent)] focus:px-5 focus:py-2 focus:no-underline focus:sans focus:text-xs focus:tracking-widest focus:uppercase focus:font-medium focus:shadow-[0_8px_24px_-8px_rgba(10,10,8,0.35)] focus:whitespace-nowrap"
    >
      {t('skipToContent')} →
    </a>
  );
}
