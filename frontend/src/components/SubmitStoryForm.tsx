'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/routing';

export function SubmitStoryForm({ locale }: { locale: Locale }) {
  const t = useTranslations('stories');
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(form: HTMLFormElement) {
    setStatus('submitting');
    setErrorMessage(null);
    const fd = new FormData(form);
    const evidenceLinksRaw = (fd.get('evidenceLinks') as string) || '';
    const evidenceLinks = evidenceLinksRaw
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .map((line) => {
        const [label, url] = line.split(/\s+\|\s+|\s+→\s+|\s+-\s+/);
        if (url) return { label: label.trim(), url: url.trim() };
        return { label: line, url: line };
      });
    const payload = {
      title: (fd.get('title') as string)?.trim(),
      summary: (fd.get('summary') as string)?.trim() || undefined,
      body: (fd.get('body') as string)?.trim(),
      tokenSymbol: (fd.get('tokenSymbol') as string)?.trim() || undefined,
      tokenChain: (fd.get('tokenChain') as string) || undefined,
      lossUsd: fd.get('lossUsd') ? Number(fd.get('lossUsd')) : undefined,
      incidentDate: (fd.get('incidentDate') as string) || undefined,
      isAnonymous: fd.get('isAnonymous') === 'on',
      contactConsent: fd.get('contactConsent') === 'on',
      evidenceLinks,
      locale,
    };
    try {
      const res = await fetch('/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Submission failed');
      setStatus('success');
      setTimeout(() => router.push('/stories'), 1200);
    } catch (err) {
      setStatus('error');
      setErrorMessage((err as Error).message);
    }
  }

  return (
    <form
      className="space-y-6 sans"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e.currentTarget);
      }}
    >
      <Field name="title" label={t('fieldTitle')} required minLength={8} maxLength={220} />
      <Field name="summary" label={t('fieldSummary')} as="textarea" rows={3} maxLength={600} />
      <Field name="body" label={t('fieldBody')} as="textarea" rows={12} required minLength={40} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field name="tokenSymbol" label={t('fieldToken')} />
        <Select
          name="tokenChain"
          label={t('fieldChain')}
          options={[
            { value: '', label: '—' },
            { value: 'solana', label: 'Solana' },
            { value: 'ethereum', label: 'Ethereum' },
            { value: 'base', label: 'Base' },
            { value: 'bsc', label: 'BSC' },
            { value: 'ton', label: 'TON' },
            { value: 'tron', label: 'TRON' },
            { value: 'other', label: 'Other' },
            { value: 'non-crypto', label: 'Non-crypto' },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field name="lossUsd" label={t('fieldLoss')} type="number" inputMode="numeric" min={0} step={1} />
        <Field name="incidentDate" label={t('fieldIncidentDate')} type="date" />
      </div>

      <Field
        name="evidenceLinks"
        label={t('fieldEvidenceLinks')}
        as="textarea"
        rows={4}
        placeholder="Solscan token  |  https://solscan.io/token/..."
      />

      <div className="flex flex-col gap-2">
        <Checkbox name="isAnonymous" label={t('fieldAnonymous')} />
        <Checkbox name="contactConsent" label={t('fieldContactConsent')} />
      </div>

      <div className="flex gap-3 items-center flex-wrap">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-2 uppercase tracking-widest text-xs hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition disabled:opacity-50"
        >
          {status === 'submitting' ? '…' : t('submitButton')}
        </button>
        {status === 'success' && <span className="text-xs text-[var(--color-gold)]">✓</span>}
        {status === 'error' && <span className="text-xs text-[var(--color-damning)]">{errorMessage}</span>}
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  as = 'input',
  ...rest
}: {
  name: string;
  label: string;
  as?: 'input' | 'textarea';
} & React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const baseCls =
    'w-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 py-2 text-base focus:outline-none focus:border-[var(--color-ink)]';
  return (
    <label className="block">
      <span className="block label-strap mb-2">{label}</span>
      {as === 'textarea' ? (
        <textarea name={name} className={baseCls} {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input name={name} className={baseCls} {...(rest as React.InputHTMLAttributes<HTMLInputElement>)} />
      )}
    </label>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: Array<{ value: string; label: string }> }) {
  return (
    <label className="block">
      <span className="block label-strap mb-2">{label}</span>
      <select
        name={name}
        className="w-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 py-2 text-base focus:outline-none focus:border-[var(--color-ink)]"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}

function Checkbox({ name, label }: { name: string; label: string }) {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <input type="checkbox" name={name} className="mt-1" />
      <span className="text-sm">{label}</span>
    </label>
  );
}
