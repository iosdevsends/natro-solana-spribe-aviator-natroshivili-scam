import type { CreatorActivity } from '@/lib/onchain';

type Labels = {
  title?: string;
  subtitle?: string;
  wallet?: string;
  recentTx?: string;
  time?: string;
  signature?: string;
  status?: string;
  ok?: string;
  failed?: string;
  apiUnavailable?: string;
  verify?: string;
};

function fmtAgoUtc(iso: string | null) {
  if (!iso) return '—';
  return new Date(iso).toISOString().replace('T', ' ').slice(0, 16) + ' UTC';
}

function short(s: string, h = 8, t = 8) {
  return s.length > h + t + 3 ? `${s.slice(0, h)}…${s.slice(-t)}` : s;
}

export function CreatorActivityLog({
  data,
  labels = {},
}: {
  data: CreatorActivity | null;
  labels?: Labels;
}) {
  const L = {
    title: labels.title || 'Creator wallet activity',
    subtitle:
      labels.subtitle ||
      'The wallet that minted $NATRO. Per the case file, relation to the publicly-stated "Alex\'s 3% bag" allocation requires further forensics — these are raw signatures, not interpretation.',
    wallet: labels.wallet || 'Wallet',
    recentTx: labels.recentTx || 'Recent transactions',
    time: labels.time || 'Time (UTC)',
    signature: labels.signature || 'Signature',
    status: labels.status || 'Status',
    ok: labels.ok || 'success',
    failed: labels.failed || 'failed',
    apiUnavailable: labels.apiUnavailable || 'Wallet activity API temporarily unavailable',
    verify: labels.verify || 'verify',
  };

  return (
    <section className="border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/30 p-5 md:p-6 overflow-hidden">
      <header className="flex items-baseline justify-between gap-3 flex-wrap mb-2">
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
      <p className="sans text-xs text-[var(--color-ink-faint)] mb-3 leading-snug">{L.subtitle}</p>

      {!data && <p className="sans text-sm text-[var(--color-damning)]">{L.apiUnavailable}</p>}

      {data && (
        <>
          <p className="sans text-xs mb-3">
            <strong className="text-[var(--color-ink-faint)]">{L.wallet}:</strong>{' '}
            <a
              href={data.sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mono text-xs break-all"
            >
              {data.wallet} ↗
            </a>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-y border-[var(--color-rule)] text-left">
                  <th className="label-strap py-2 pr-3 whitespace-nowrap">{L.time}</th>
                  <th className="label-strap py-2 pr-3">{L.signature}</th>
                  <th className="label-strap py-2 text-right">{L.status}</th>
                </tr>
              </thead>
              <tbody>
                {data.recent.map((e) => (
                  <tr key={e.signature} className="border-b border-[var(--color-rule-soft)] align-top">
                    <td className="py-2 pr-3 mono text-xs whitespace-nowrap">{fmtAgoUtc(e.blockTime)}</td>
                    <td className="py-2 pr-3">
                      <a
                        href={e.solscanUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mono text-xs break-all"
                      >
                        {short(e.signature)} ↗
                      </a>
                    </td>
                    <td className="py-2 text-right mono text-xs">
                      {e.err === null ? (
                        <span className="text-[var(--color-gold)]">{L.ok}</span>
                      ) : (
                        <span className="text-[var(--color-damning)]">{L.failed}</span>
                      )}
                    </td>
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
