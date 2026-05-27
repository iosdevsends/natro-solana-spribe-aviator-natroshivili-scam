import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { Locale } from '@/i18n/routing';

type Props = {
  locale: Locale;
  title: string;
  meta?: string;
  uiStrings?: Record<string, string>;
};

/**
 * Strip the leading "§ I · " / "§ II · " etc. from a localized nav label so
 * the masthead can render just the short section name. Falls back to the
 * raw label if no separator is present.
 */
function shortLabel(raw: string | undefined, fallback: string): string {
  if (!raw) return fallback;
  const sepIdx = raw.indexOf('·');
  if (sepIdx === -1) return raw.trim();
  return raw.slice(sepIdx + 1).trim() || raw;
}

export function Masthead({ locale, title, meta, uiStrings }: Props) {
  const sectionNav: Array<{ key: string; href: string; label: string }> = [
    { key: 'promise', href: '#promise', label: shortLabel(uiStrings?.['nav.promise'], 'Promise') },
    { key: 'reality', href: '#reality', label: shortLabel(uiStrings?.['nav.reality'], 'Reality') },
    { key: 'scrub', href: '#coverup', label: shortLabel(uiStrings?.['nav.scrub'], 'Scrub') },
    { key: 'voices', href: '#voices', label: shortLabel(uiStrings?.['nav.voices'], 'Voices') },
    { key: 'people', href: '#people', label: shortLabel(uiStrings?.['nav.people'], 'People') },
    { key: 'evidence', href: '#evidence', label: shortLabel(uiStrings?.['nav.evidence'], 'Sources') },
    { key: 'gallery', href: '#gallery', label: shortLabel(uiStrings?.['nav.gallery'], 'Gallery') },
    { key: 'faq', href: '#faq', label: shortLabel(uiStrings?.['nav.faq'], 'FAQ') },
  ];

  return (
    <header
      className="sticky top-0 z-40 border-b-2 border-[var(--color-ink)] bg-[var(--color-paper)]/95 backdrop-blur"
      style={{ paddingInline: 'clamp(16px, 4vw, 32px)' }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 md:gap-3 py-2 md:py-3">
        <Link
          href="/"
          className="serif text-sm md:text-lg font-medium tracking-tight leading-tight max-w-[60%] sm:max-w-[70%] md:max-w-[40%] lg:max-w-[32%] truncate"
          title={title}
        >
          {title}
        </Link>
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <nav
            className="hidden lg:flex items-center gap-x-4 xl:gap-x-5 sans text-[12px] xl:text-[13px] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]"
            aria-label="Sections"
          >
            {sectionNav.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="hover:text-[var(--color-accent)] transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <span className="w-px h-4 bg-[var(--color-rule)]" aria-hidden="true" />
            <Link
              href="/on-chain"
              className="hover:text-[var(--color-accent)] transition-colors whitespace-nowrap"
            >
              {uiStrings?.['nav.onchain'] || 'On-chain'}
            </Link>
            <Link
              href="/stories"
              className="text-[var(--color-accent)] hover:underline whitespace-nowrap"
            >
              {uiStrings?.['nav.stories'] || 'Reader stories'}
            </Link>
          </nav>
          <LanguageSwitcher current={locale} />
        </div>
      </div>
      {meta ? <div className="label-strap pb-2 text-[10px]">{meta}</div> : null}
    </header>
  );
}
