import type { HoldersSummary } from '@/lib/onchain';

type Labels = {
  title?: string;
  concentration?: string;
  rank?: string;
  wallet?: string;
  balance?: string;
  share?: string;
  apiUnavailable?: string;
  fetched?: string;
  verify?: string;
};

function short(addr: string, h = 6, t = 6) {
  return addr.length > h + t + 3 ? `${addr.slice(0, h)}…${addr.slice(-t)}` : addr;
}
function fmtBalance(n: number): string {
  if (n >= 1e9) return `${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(2)}K`;
  return n.toFixed(2);
}
function fmtAgoUtc(iso: string) {
  return new Date(iso).toISOString().replace('T', ' ').slice(0, 16) + ' UTC';
}

export function HoldersTable({
  data,
  labels = {},
}: {
  data: HoldersSummary | null;
  labels?: Labels;
}) {
  const L = {
    title: labels.title || 'Top 10 holders by balance',
    concentration: labels.concentration || 'Top-10 concentration',
    rank: labels.rank || '#',
    wallet: labels.wallet || 'Wallet',
    balance: labels.balance || 'Balance',
    share: labels.share || '% of supply',
    apiUnavailable: labels.apiUnavailable || 'Holder data temporarily unavailable',
    fetched: labels.fetched || 'Last verified',
    verify: labels.verify || 'verify',
  };

  return (
    <section className="border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/30 p-5 md:p-6 overflow-hidden">
      <header className="flex items-baseline justify-between gap-3 flex-wrap mb-3">
        <div className="kicker">{L.title}</div>
        {data && (
          <a
            href={data.sourceUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="sans text-[10px] uppercase tracking-widest"
          >
            {L.verify} ↗
          </a>
        )}
      </header>

      {!data && <p className="sans text-sm text-[var(--color-damning)]">{L.apiUnavailable}</p>}

      {data && (
        <>
          <p className="sans text-xs text-[var(--color-ink-faint)] mb-3">
            <strong className="text-[var(--color-ink)]">{L.concentration}:</strong>{' '}
            <span className="mono">{data.topConcentrationPct.toFixed(2)}%</span> · {L.fetched}{' '}
            <span className="mono">{fmtAgoUtc(data.fetchedAt)}</span>
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-y border-[var(--color-rule)] text-left">
                  <th className="label-strap py-2 pr-3 w-10">{L.rank}</th>
                  <th className="label-strap py-2 pr-3">{L.wallet}</th>
                  <th className="label-strap py-2 pr-3">{L.balance}</th>
                  <th className="label-strap py-2 text-right">{L.share}</th>
                </tr>
              </thead>
              <tbody>
                {data.top.map((h, i) => (
                  <tr key={h.address} className="border-b border-[var(--color-rule-soft)] align-top">
                    <td className="py-2 pr-3 mono text-xs text-[var(--color-ink-faint)]">{i + 1}</td>
                    <td className="py-2 pr-3">
                      <a
                        href={h.solscanUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mono text-xs break-all"
                      >
                        {short(h.address)} ↗
                      </a>
                    </td>
                    <td className="py-2 pr-3 mono text-xs">{fmtBalance(h.balance)}</td>
                    <td className="py-2 text-right mono text-xs font-medium">{h.percent.toFixed(3)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}
