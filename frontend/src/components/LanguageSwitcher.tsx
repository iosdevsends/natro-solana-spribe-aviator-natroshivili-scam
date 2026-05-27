'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
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

  function switchTo(loc: Locale) {
    if (loc === current) return;
    startTransition(() => {
      router.replace(pathname, { locale: loc });
    });
  }

  return (
    <>
      <MobileDropdown
        current={current}
        isPending={isPending}
        onSwitch={switchTo}
      />
      <DesktopRow
        current={current}
        isPending={isPending}
        onSwitch={switchTo}
      />
    </>
  );
}

function MobileDropdown({
  current,
  isPending,
  onSwitch,
}: {
  current: Locale;
  isPending: boolean;
  onSwitch: (loc: Locale) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocPointer(e: MouseEvent | TouchEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocPointer);
    document.addEventListener('touchstart', onDocPointer);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocPointer);
      document.removeEventListener('touchstart', onDocPointer);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative md:hidden" aria-label="Language">
      <button
        type="button"
        disabled={isPending}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-2 py-1 rounded sans text-[12px] tracking-wide text-[var(--color-ink)] hover:bg-[var(--color-paper-warm)]/60 transition"
      >
        <span aria-hidden="true" className="text-[15px] leading-none">
          {localeFlags[current]}
        </span>
        <span>{localeFullNames[current]}</span>
        <span aria-hidden="true" className="text-[10px] opacity-60">▾</span>
      </button>
      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-1 min-w-[170px] border border-[var(--color-ink)] bg-[var(--color-paper)] shadow-lg z-50 py-1"
        >
          {locales.map((loc) => {
            const isCurrent = loc === current;
            return (
              <button
                key={loc}
                type="button"
                role="option"
                disabled={isPending}
                aria-selected={isCurrent}
                onClick={() => {
                  setOpen(false);
                  onSwitch(loc);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 sans text-[13px] text-left transition ${
                  isCurrent
                    ? 'bg-[var(--color-paper-warm)] text-[var(--color-accent)] font-medium'
                    : 'text-[var(--color-ink)] hover:bg-[var(--color-paper-warm)]/70'
                }`}
              >
                <span aria-hidden="true" className="text-[16px] leading-none">
                  {localeFlags[loc]}
                </span>
                <span>{localeFullNames[loc]}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function DesktopRow({
  current,
  isPending,
  onSwitch,
}: {
  current: Locale;
  isPending: boolean;
  onSwitch: (loc: Locale) => void;
}) {
  return (
    <div
      className="hidden md:flex items-center gap-0.5 sm:gap-1 sans text-[11px] md:text-[12px] tracking-wider"
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
            onClick={() => onSwitch(loc)}
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
