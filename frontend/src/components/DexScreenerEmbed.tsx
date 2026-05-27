/**
 * DexScreener official embed.
 * https://docs.dexscreener.com/api/widgets — public, no API key needed.
 * Renders a live price chart in an iframe. Falls back to a button-link if
 * embedding is blocked by browser / CSP.
 */

export function DexScreenerEmbed({
  pairAddress,
  chain = 'solana',
  title = 'DexScreener — live chart',
  fallbackUrl,
}: {
  pairAddress: string;
  chain?: string;
  title?: string;
  fallbackUrl?: string;
}) {
  const src = `https://dexscreener.com/${chain}/${pairAddress}?embed=1&theme=light&info=0&trades=0`;
  const verifyUrl = fallbackUrl || `https://dexscreener.com/${chain}/${pairAddress}`;
  return (
    <section className="border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/20 overflow-hidden">
      <header className="flex items-baseline justify-between gap-3 flex-wrap px-5 py-3 border-b border-[var(--color-rule)]">
        <div className="kicker">{title}</div>
        <a
          href={verifyUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="sans text-[10px] uppercase tracking-widest"
        >
          open on dexscreener.com ↗
        </a>
      </header>
      <div className="relative" style={{ aspectRatio: '16 / 10', minHeight: 360 }}>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="clipboard-write"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    </section>
  );
}
