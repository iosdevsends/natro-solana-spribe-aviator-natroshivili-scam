'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { locales, localeLabels, type Locale } from '@/i18n/routing';

export function LanguageSwitcher({ current }: { current: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-1 sans text-[11px] tracking-widest" aria-label="Language">
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          disabled={isPending}
          onClick={() => {
            if (loc === current) return;
            startTransition(() => {
              router.replace(pathname, { locale: loc });
            });
          }}
          className={`px-1.5 py-0.5 transition ${
            loc === current
              ? 'text-[var(--color-accent)] underline underline-offset-4'
              : 'text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]'
          }`}
          aria-current={loc === current ? 'true' : 'false'}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
