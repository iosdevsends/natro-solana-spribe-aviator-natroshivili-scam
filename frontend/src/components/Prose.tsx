import { Fragment } from 'react';

/**
 * Lightweight inline-markdown renderer for case-file body text.
 * Supports: **bold**, *italic*, `code`, and \n\n paragraph breaks.
 * The full content is editor-controlled in Strapi, so we don't need a
 * full markdown engine — we just need predictable rendering of the
 * conventions used in the seed.
 */

const INLINE_PATTERN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

function renderInline(text: string) {
  const parts = text.split(INLINE_PATTERN).filter(Boolean);
  return parts.map((part, i) => {
    const linkMatch = part.match(LINK_PATTERN);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      return (
        <a
          key={i}
          href={url}
          target={url.startsWith('http') ? '_blank' : undefined}
          rel={url.startsWith('http') ? 'noreferrer noopener' : undefined}
        >
          {label}
        </a>
      );
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-[var(--color-damning)]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i}>{part.slice(1, -1)}</em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="mono text-[0.85em] bg-[var(--color-paper-warm)] px-1.5 py-0.5 border border-[var(--color-rule-soft)] break-all"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function Prose({ text, className = '' }: { text?: string; className?: string }) {
  if (!text) return null;
  const paragraphs = text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i} className="leading-relaxed">
          {renderInline(p)}
        </p>
      ))}
    </div>
  );
}
