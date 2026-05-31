'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/routing';
import { TurnstileWidget } from './TurnstileWidget';

export function PostCommentForm({ locale }: { locale: Locale }) {
  const t = useTranslations('wall');
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [anonymous, setAnonymous] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const captchaEnabled = !!process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY;

  async function onSubmit(form: HTMLFormElement) {
    setStatus('submitting');
    setErrorMessage(null);
    const fd = new FormData(form);

    const termsAccepted = fd.get('termsAccepted') === 'on';
    if (!termsAccepted) {
      setStatus('error');
      setErrorMessage(t('errorTermsRequired'));
      return;
    }
    if (captchaEnabled && !turnstileToken) {
      setStatus('error');
      setErrorMessage(t('errorCaptchaRequired'));
      return;
    }

    const payload = {
      body: (fd.get('body') as string)?.trim(),
      authorDisplayName: anonymous ? undefined : (fd.get('authorDisplayName') as string)?.trim() || undefined,
      isAnonymous: anonymous,
      country: (fd.get('country') as string)?.trim() || undefined,
      locale,
      turnstileToken,
    };

    try {
      const res = await fetch('/bff/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Submission failed');
      setStatus('success');
      form.reset();
      setAnonymous(false);
      // Comment is pending moderation, so no new entry to show yet — refresh
      // to clear the form state and re-fetch the (unchanged) approved feed.
      setTimeout(() => router.refresh(), 1500);
    } catch (err) {
      setStatus('error');
      setErrorMessage((err as Error).message);
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-[var(--color-rule)] bg-[var(--color-paper-warm)] p-6">
        <p className="serif text-lg">{t('successTitle')}</p>
        <p className="mt-2 sans text-sm text-[var(--color-ink-soft)]">{t('successBody')}</p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5 sans"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e.currentTarget);
      }}
    >
      <label className="block">
        <span className="block label-strap mb-2">{t('fieldBody')}</span>
        <textarea
          name="body"
          required
          minLength={2}
          maxLength={1500}
          rows={6}
          placeholder={t('fieldBodyPlaceholder')}
          className="w-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 py-2 text-base focus:outline-none focus:border-[var(--color-ink)]"
        />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block label-strap mb-2">{t('fieldName')}</span>
          <input
            name="authorDisplayName"
            maxLength={80}
            disabled={anonymous}
            placeholder={t('fieldNamePlaceholder')}
            className="w-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 py-2 text-base focus:outline-none focus:border-[var(--color-ink)] disabled:opacity-40"
          />
        </label>
        <label className="block">
          <span className="block label-strap mb-2">{t('fieldCountry')}</span>
          <input
            name="country"
            maxLength={64}
            placeholder={t('fieldCountryPlaceholder')}
            className="w-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 py-2 text-base focus:outline-none focus:border-[var(--color-ink)]"
          />
        </label>
      </div>

      <label className="flex items-start gap-2 cursor-pointer">
        <input
          type="checkbox"
          name="isAnonymous"
          className="mt-1"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
        />
        <span className="text-sm">{t('fieldAnonymous')}</span>
      </label>

      <div className="border-l-4 border-[var(--color-accent)] bg-[var(--color-paper-warm)]/40 p-4 space-y-3">
        <p className="text-sm leading-relaxed">{t('termsDisclaimer')}</p>
        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" name="termsAccepted" className="mt-1" />
          <span className="text-sm">{t('fieldTermsAccepted')}</span>
        </label>
      </div>

      {captchaEnabled && (
        <TurnstileWidget onToken={setTurnstileToken} onExpired={() => setTurnstileToken(null)} />
      )}

      <div className="flex gap-3 items-center flex-wrap">
        <button
          type="submit"
          disabled={status === 'submitting' || (captchaEnabled && !turnstileToken)}
          className="border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-2 uppercase tracking-widest text-xs hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition disabled:opacity-50"
        >
          {status === 'submitting' ? '…' : t('submitButton')}
        </button>
        {status === 'error' && <span className="text-xs text-[var(--color-damning)]">{errorMessage}</span>}
      </div>
    </form>
  );
}
