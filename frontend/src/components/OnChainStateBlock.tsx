import { fetchMintState, fetchPumpFunState, ONCHAIN_CONSTANTS, type MintState, type PumpFunState } from '@/lib/onchain';

type Labels = {
  title?: string;
  subtitle?: string;
  tokenMint?: string;
  mintAuthority?: string;
  freezeAuthority?: string;
  totalSupply?: string;
  pumpStatus?: string;
  pumpSwapPool?: string;
  marketCap?: string;
  lastTrade?: string;
  fetched?: string;
  renounced?: string;
  graduated?: string;
  notGraduated?: string;
  apiUnavailable?: string;
  verify?: string;
};

const defaultLabels: Required<Labels> = {
  title: 'On-chain state',
  subtitle: 'Auto-refreshed every 60 min from public, no-auth APIs. Click any address to verify on Solscan or Pump.fun directly.',
  tokenMint: 'Token mint',
  mintAuthority: 'Mint authority',
  freezeAuthority: 'Freeze authority',
  totalSupply: 'Total supply',
  pumpStatus: 'Pump.fun status',
  pumpSwapPool: 'pump_swap pool',
  marketCap: 'Market cap (USD)',
  lastTrade: 'Last trade',
  fetched: 'Last verified',
  renounced: 'None (renounced)',
  graduated: 'complete (graduated)',
  notGraduated: 'on bonding curve',
  apiUnavailable: 'API temporarily unavailable — values cached',
  verify: 'verify',
};

function short(addr: string | null | undefined, head = 4, tail = 4): string {
  if (!addr) return '—';
  if (addr.length <= head + tail + 3) return addr;
  return `${addr.slice(0, head)}…${addr.slice(-tail)}`;
}

function fmtNumber(n: number | null): string {
  if (n === null || n === undefined) return '—';
  if (n === 0) return '$0';
  if (n < 0.01) return `$${n.toFixed(4)}`;
  if (n < 1000) return `$${n.toFixed(2)}`;
  if (n < 1_000_000) return `$${(n / 1000).toFixed(2)}K`;
  return `$${(n / 1_000_000).toFixed(2)}M`;
}

function fmtSupply(n: number): string {
  if (n >= 1e9) return `${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(2)}M`;
  return n.toLocaleString();
}

function fmtAgoUtc(iso: string | null): string {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toISOString().replace('T', ' ').slice(0, 16) + ' UTC';
}

export async function OnChainStateBlock({
  labels = {},
  compact = false,
}: {
  labels?: Labels;
  compact?: boolean;
}) {
  const [mint, pump] = await Promise.all([fetchMintState(), fetchPumpFunState()]);
  const L = { ...defaultLabels, ...labels };

  const mintOk = !!mint;
  const pumpOk = !!pump;
  const fetchedAt = mint?.fetchedAt || pump?.fetchedAt || new Date().toISOString();

  return (
    <aside
      className={`border-2 border-[var(--color-ink)] bg-[var(--color-paper-warm)]/40 ${
        compact ? 'p-4' : 'p-5 md:p-6'
      } overflow-hidden`}
    >
      <header className="flex items-baseline justify-between gap-2 flex-wrap mb-3">
        <div className="kicker">{L.title}</div>
        <div className="sans text-[10px] tracking-widest uppercase text-[var(--color-ink-faint)]">
          {L.fetched}: <span className="mono normal-case tracking-normal">{fmtAgoUtc(fetchedAt)}</span>
        </div>
      </header>

      {!mintOk && !pumpOk && (
        <p className="sans text-sm text-[var(--color-damning)] mb-2">{L.apiUnavailable}</p>
      )}

      {!compact && <p className="sans text-xs text-[var(--color-ink-faint)] mb-4 leading-snug">{L.subtitle}</p>}

      <dl className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-x-4 gap-y-2 text-sm">
        <Row label={L.tokenMint}>
          <Addr href={mint?.solscanUrl || `https://solscan.io/token/${ONCHAIN_CONSTANTS.mint}`} value={ONCHAIN_CONSTANTS.mint} />
        </Row>
        <Row label={L.mintAuthority}>
          <Verified value={mint?.mintAuthority} renouncedLabel={L.renounced} />
        </Row>
        <Row label={L.freezeAuthority}>
          <Verified value={mint?.freezeAuthority} renouncedLabel={L.renounced} />
        </Row>
        <Row label={L.totalSupply}>
          {mint ? <span className="font-medium">{fmtSupply(mint.supplyHuman)}</span> : <span>—</span>}
        </Row>
        <Row label={L.pumpStatus}>
          {pump ? (
            <PumpStatusBadge complete={pump.complete} labels={L} sourceUrl={pump.sourceUrl} />
          ) : (
            <span className="text-[var(--color-ink-faint)]">—</span>
          )}
        </Row>
        <Row label={L.pumpSwapPool}>
          {pump?.pumpSwapPool ? (
            <Addr href={`https://solscan.io/account/${pump.pumpSwapPool}`} value={pump.pumpSwapPool} />
          ) : (
            <Addr href={`https://solscan.io/account/${ONCHAIN_CONSTANTS.pumpSwapPool}`} value={ONCHAIN_CONSTANTS.pumpSwapPool} />
          )}
        </Row>
        <Row label={L.marketCap}>
          {pump ? (
            <span className="font-medium">
              {fmtNumber(pump.marketCapUsd)}{' '}
              <a href={pump.sourceUrl} target="_blank" rel="noreferrer noopener" className="ml-1 sans text-[10px] uppercase tracking-widest">
                {L.verify} ↗
              </a>
            </span>
          ) : (
            <span>—</span>
          )}
        </Row>
        <Row label={L.lastTrade}>
          {pump?.lastTradeAt ? (
            <span className="mono text-xs">{fmtAgoUtc(pump.lastTradeAt)}</span>
          ) : (
            <span>—</span>
          )}
        </Row>
      </dl>
    </aside>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <dt className="label-strap mb-0 self-baseline">{label}</dt>
      <dd className="m-0 break-words">{children}</dd>
    </>
  );
}

function Addr({ href, value }: { href: string; value: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="mono text-xs break-all"
    >
      {value} ↗
    </a>
  );
}

function Verified({
  value,
  renouncedLabel,
}: {
  value: string | null | undefined;
  renouncedLabel: string;
}) {
  // undefined = data not available (API failed). null = explicitly renounced on chain.
  if (value === undefined) {
    return <span className="text-[var(--color-ink-faint)]">—</span>;
  }
  if (value === null) {
    return (
      <span className="text-[var(--color-gold)] font-medium">
        {renouncedLabel} ✓
      </span>
    );
  }
  return <span className="mono text-xs">{value}</span>;
}

function PumpStatusBadge({
  complete,
  labels,
  sourceUrl,
}: {
  complete: boolean;
  labels: Required<Labels>;
  sourceUrl: string;
}) {
  if (complete) {
    return (
      <span className="font-medium">
        <span className="text-[var(--color-gold)]">{labels.graduated} ✓</span>{' '}
        <a href={sourceUrl} target="_blank" rel="noreferrer noopener" className="ml-1 sans text-[10px] uppercase tracking-widest">
          {labels.verify} ↗
        </a>
      </span>
    );
  }
  return (
    <span className="font-medium">
      <span className="text-[var(--color-ink-soft)]">{labels.notGraduated}</span>{' '}
      <a href={sourceUrl} target="_blank" rel="noreferrer noopener" className="ml-1 sans text-[10px] uppercase tracking-widest">
        {labels.verify} ↗
      </a>
    </span>
  );
}
