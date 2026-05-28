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
      className="my-14 border-y-2 border-[var(--color-ink)] py-8 md:py-10 bg-[var(--color-paper-warm)]/40 overflow-hidden"
      style={{ paddingInline: 'clamp(16px, 4vw, 40px)' }}
    >
      {kicker && <div className="kicker mb-3">{kicker}</div>}
      {headline && (
        <h2 className="serif text-[22px] sm:text-3xl md:text-4xl font-medium leading-tight">{headline}</h2>
      )}
      {body && <Prose text={body} className="mt-4 text-base md:text-lg max-w-[640px]" />}
      <a
        href={linkUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="group mt-8 flex flex-col gap-1 border-2 border-[var(--color-accent)] bg-[var(--color-paper)] px-4 py-4 md:px-6 hover:bg-[var(--color-accent)] transition-colors no-underline max-w-full overflow-hidden"
      >
        <span className="sans text-xs uppercase tracking-widest text-[var(--color-accent)] group-hover:text-[var(--color-paper)]">
          {linkText || 'Open archive →'}
        </span>
        {/* Build the visual hierarchy via explicit ink-soft / ink-faint
            colours instead of opacity. opacity-70 / opacity-80 multiply the
            text colour with the background and were dropping the WCAG
            contrast ratio below 4.5:1 even though the un-opaque colours
            are well above it. */}
        <span className="mono text-[10px] md:text-[11px] break-all leading-relaxed text-[var(--color-ink-soft)] group-hover:text-[var(--color-paper)]">{linkUrl}</span>
        {urlLabel && (
          <span className="sans text-[10px] uppercase tracking-widest mt-1 text-[var(--color-ink-faint)] group-hover:text-[var(--color-paper)]">{urlLabel}</span>
        )}
      </a>
    </aside>
  );
}
