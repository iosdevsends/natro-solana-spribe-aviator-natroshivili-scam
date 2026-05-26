import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { Locale } from '@/i18n/routing';

type Props = {
  locale: Locale;
  title: string;
  meta?: string;
  uiStrings?: Record<string, string>;
};

export function Masthead({ locale, title, meta, uiStrings }: Props) {
  const navItems: Array<{ key: string; href: string; label: string }> = [
    { key: 'promise', href: '#promise', label: uiStrings?.['nav.promise'] || '§ I' },
    { key: 'reality', href: '#reality', label: uiStrings?.['nav.reality'] || '§ II' },
    { key: 'scrub', href: '#coverup', label: uiStrings?.['nav.scrub'] || '§ III' },
    { key: 'voices', href: '#voices', label: uiStrings?.['nav.voices'] || '§ IV' },
    { key: 'people', href: '#people', label: uiStrings?.['nav.people'] || '§ V' },
    { key: 'evidence', href: '#evidence', label: uiStrings?.['nav.evidence'] || '§ VI' },
    { key: 'gallery', href: '#gallery', label: uiStrings?.['nav.gallery'] || '§ VII' },
  ];

  return (
    <header
      className="sticky top-0 z-40 border-b-2 border-[var(--color-ink)] bg-[var(--color-paper)]/95 backdrop-blur"
      style={{ paddingInline: 'clamp(16px, 4vw, 32px)' }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3 py-3">
        <Link href="/" className="serif text-lg font-medium tracking-tight">
          {title}
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4 sans text-[12px] uppercase tracking-widest text-[var(--color-ink-faint)]">
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="hover:text-[var(--color-accent)]">
                {item.label}
              </a>
            ))}
            <Link href="/stories" className="text-[var(--color-accent)] hover:underline">
              {uiStrings?.['nav.stories'] || 'Reader stories'}
            </Link>
          </nav>
          <LanguageSwitcher current={locale} />
        </div>
      </div>
      {meta ? (
        <div className="label-strap pb-2 text-[10px]">{meta}</div>
      ) : null}
    </header>
  );
}
