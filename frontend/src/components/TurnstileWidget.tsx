'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        opts: {
          sitekey: string;
          theme?: 'light' | 'dark' | 'auto';
          callback?: (token: string) => void;
          'error-callback'?: () => void;
          'expired-callback'?: () => void;
        },
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId?: string) => void;
    };
  }
}

const SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(
      `script[src="${SCRIPT_SRC}"]`,
    ) as HTMLScriptElement | null;
    if (existing) {
      if (window.turnstile) resolve();
      else existing.addEventListener('load', () => resolve());
      return;
    }
    const s = document.createElement('script');
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('turnstile-script-failed'));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

type Props = {
  /** Fired with the verified token; the parent stores it and submits with the form */
  onToken: (token: string) => void;
  onExpired?: () => void;
  onError?: () => void;
};

export function TurnstileWidget({ onToken, onExpired, onError }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY;

  // Keep the latest callbacks in refs so the render effect can depend on
  // `sitekey` alone. Parents pass inline callbacks (e.g. `() => setToken(null)`)
  // whose identity changes every render; if those were effect dependencies the
  // widget would be torn down and re-created on each parent re-render — and
  // since solving the CAPTCHA calls back into the parent (state update →
  // re-render), that produced an endless "Verifying…" flicker loop.
  const onTokenRef = useRef(onToken);
  const onExpiredRef = useRef(onExpired);
  const onErrorRef = useRef(onError);
  // Sync the latest callbacks into refs after each render (not during render).
  useEffect(() => {
    onTokenRef.current = onToken;
    onExpiredRef.current = onExpired;
    onErrorRef.current = onError;
  });

  useEffect(() => {
    if (!sitekey || !containerRef.current) return;
    let cancelled = false;
    loadScript().then(() => {
      if (cancelled || !containerRef.current || !window.turnstile) return;
      // Render exactly once — guards against React StrictMode double-invoke.
      if (widgetIdRef.current) return;
      try {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey,
          theme: 'light',
          callback: (token: string) => onTokenRef.current(token),
          'error-callback': () => onErrorRef.current?.(),
          'expired-callback': () => onExpiredRef.current?.(),
        });
      } catch {
        onErrorRef.current?.();
      }
    });
    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          /* ignore */
        }
        widgetIdRef.current = null;
      }
    };
  }, [sitekey]);

  if (!sitekey) return null;
  return <div ref={containerRef} className="mt-2" />;
}
