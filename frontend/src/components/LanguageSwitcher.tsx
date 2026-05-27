'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import {
  locales,
  localeLabels,
  localeFullNames,
  localeFlags,
  type Locale,
} from '@/i18n/routing';

export function LanguageSwitcher({ current }: { current: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className="flex items-center gap-0.5 sm:gap-1 sans text-[11px] md:text-[12px] tracking-wider"
      aria-label="Language"
    >
      {locales.map((loc) => {
        const isCurrent = loc === current;
        return (
          <button
            key={loc}
            type="button"
            disabled={isPending}
            title={localeFullNames[loc]}
            onClick={() => {
              if (isCurrent) return;
              startTransition(() => {
                router.replace(pathname, { locale: loc });
              });
            }}
            className={`px-1.5 py-1 rounded transition flex items-center gap-1 leading-none ${
              isCurrent
                ? 'bg-[var(--color-paper-warm)] text-[var(--color-accent)] font-medium'
                : 'text-[var(--color-ink-faint)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-warm)]/60'
            }`}
            aria-current={isCurrent ? 'true' : 'false'}
            aria-label={`${localeFullNames[loc]} (${localeLabels[loc]})`}
          >
            <span aria-hidden="true" className="text-[14px] md:text-[15px] leading-none">
              {localeFlags[loc]}
            </span>
            <span className="hidden sm:inline">{localeLabels[loc]}</span>
          </button>
        );
      })}
    </div>
  );
}
