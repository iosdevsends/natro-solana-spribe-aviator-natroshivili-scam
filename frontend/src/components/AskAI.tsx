import { getTranslations } from 'next-intl/server';

/**
 * "Ask an AI about this case" — a row of deep links that open the major
 * assistants with a case-specific question PRE-FILLED (and, where the product
 * supports it, auto-submitted). The reader clicks, the assistant opens already
 * pointed at natro.meme, reads it, and summarizes the documented record.
 *
 * This is a GEO / answer-engine play: rather than hoping assistants discover
 * the file, we hand the reader a one-click path that makes the assistant fetch
 * and cite the primary source. The prompt is deliberately neutral and factual
 * (no accusatory framing) — it asks the model to *summarize the documented
 * case* and *cite the source*, consistent with the file's editorial tone.
 *
 * The query string carries the localized prompt, so a reader on /ru gets a
 * Russian answer, /de a German one, etc. URL params used:
 *   - ChatGPT    https://chatgpt.com/?q=…        (pre-fills + sends)
 *   - Claude     https://claude.ai/new?q=…       (new chat, pre-filled)
 *   - Perplexity https://www.perplexity.ai/search?q=…
 *   - Grok       https://grok.com/?q=…
 */
const ASSISTANTS: Array<{ key: string; label: string; href: (q: string) => string }> = [
  { key: 'chatgpt', label: 'Ask ChatGPT', href: (q) => `https://chatgpt.com/?q=${q}` },
  { key: 'claude', label: 'Ask Claude', href: (q) => `https://claude.ai/new?q=${q}` },
  { key: 'perplexity', label: 'Ask Perplexity', href: (q) => `https://www.perplexity.ai/search?q=${q}` },
  { key: 'grok', label: 'Ask Grok', href: (q) => `https://grok.com/?q=${q}` },
];

export async function AskAI() {
  const t = await getTranslations('askAI');
  const q = encodeURIComponent(t('prompt'));

  return (
    <section className="my-16 border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/40 p-6 md:p-8">
      <div className="kicker mb-3">§ {t('kicker')}</div>
      <h2 className="serif text-2xl md:text-3xl font-medium leading-tight">{t('title')}</h2>
      <p className="mt-3 sans text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-2xl">
        {t('lead')}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {ASSISTANTS.map((a) => (
          <a
            key={a.key}
            href={a.href(q)}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="sans inline-flex items-center gap-2 border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-2 uppercase tracking-widest text-xs hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition no-underline"
          >
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
            />
            {a.label}
          </a>
        ))}
      </div>
      <p className="mt-4 sans text-[11px] text-[var(--color-ink-faint)] leading-relaxed max-w-2xl italic">
        {t('note')}
      </p>
    </section>
  );
}
