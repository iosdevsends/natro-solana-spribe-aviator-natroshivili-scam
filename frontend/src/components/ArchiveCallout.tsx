import { Prose } from './Prose';

type Props = {
  kicker?: string;
  headline?: string;
  body?: string;
  linkText?: string;
  linkUrl?: string;
  urlLabel?: string;
};

export function ArchiveCallout({ kicker, headline, body, linkText, linkUrl, urlLabel }: Props) {
  if (!linkUrl) return null;
  return (
    <aside
      aria-label={kicker || 'Archive'}
      className="my-14 border-y-2 border-[var(--color-ink)] py-10 bg-[var(--color-paper-warm)]/40 -mx-[max(0px,calc((100%-720px)/-2))]"
      style={{ paddingInline: 'clamp(20px, 4vw, 40px)' }}
    >
      {kicker && <div className="kicker mb-3">{kicker}</div>}
      {headline && (
        <h2 className="serif text-3xl md:text-4xl font-medium leading-tight">{headline}</h2>
      )}
      {body && <Prose text={body} className="mt-4 text-lg max-w-[640px]" />}
      <a
        href={linkUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="group mt-8 inline-flex flex-col gap-1 border-2 border-[var(--color-accent)] bg-[var(--color-paper)] px-6 py-4 hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition-colors no-underline"
      >
        <span className="sans text-xs uppercase tracking-widest text-[var(--color-accent)] group-hover:text-[var(--color-paper)]">
          {linkText || 'Open archive →'}
        </span>
        <span className="mono text-[11px] break-all opacity-80">{linkUrl}</span>
        {urlLabel && (
          <span className="sans text-[10px] uppercase tracking-widest opacity-70 mt-1">{urlLabel}</span>
        )}
      </a>
    </aside>
  );
}
