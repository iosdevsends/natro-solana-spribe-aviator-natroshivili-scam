'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const STORAGE_KEY = 'natro_consent_v1';

type Choice = 'granted' | 'denied';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    clarity?: (...args: unknown[]) => void;
  }
}

function readChoice(): Choice | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

function applyChoice(choice: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    /* ignore quota / disabled localStorage */
  }
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: choice === 'granted' ? 'granted' : 'denied',
    });
  }
  // Mirror the choice to Clarity: it stays cookieless until granted consent.
  // There is no documented "revoke" call, so we only signal on grant; a
  // declining visitor simply never receives the consent signal.
  if (choice === 'granted' && typeof window !== 'undefined' && typeof window.clarity === 'function') {
    window.clarity('consent');
  }
}

export function ConsentBanner() {
  const t = useTranslations('consent');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Banner visibility is derived from localStorage, which is only readable
    // on the client — so the one-shot read necessarily happens in an effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (readChoice() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  function accept() {
    applyChoice('granted');
    setVisible(false);
  }
  function decline() {
    applyChoice('denied');
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label={t('title')}
      className="fixed inset-x-0 bottom-0 z-[200] border-t-2 border-[var(--color-ink)] bg-[var(--color-paper)] shadow-[0_-10px_30px_rgba(10,10,8,0.08)]"
      style={{ padding: 'clamp(12px, 2vw, 20px) clamp(16px, 4vw, 32px)' }}
    >
      <div className="max-w-[1000px] mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="text-sm leading-snug max-w-[640px]">
          <div className="kicker mb-1">{t('title')}</div>
          <p>
            {t('body')}{' '}
            <Link href="/privacy" className="underline">
              {t('learnMore')}
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2 flex-wrap shrink-0">
          <button
            type="button"
            onClick={decline}
            className="sans border border-[var(--color-rule)] text-[var(--color-ink)] px-4 py-2 uppercase tracking-widest text-xs hover:border-[var(--color-ink)]"
          >
            {t('decline')}
          </button>
          <button
            type="button"
            onClick={accept}
            className="sans border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-2 uppercase tracking-widest text-xs hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
