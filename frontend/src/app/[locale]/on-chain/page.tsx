import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { locales, type Locale } from '@/i18n/routing';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { OnChainStateBlock } from '@/components/OnChainStateBlock';
import { HoldersTable } from '@/components/HoldersTable';
import { CreatorActivityLog } from '@/components/CreatorActivityLog';
import { DexScreenerEmbed } from '@/components/DexScreenerEmbed';
import { loadCaseFile } from '@/lib/case-file';
import { buildAlternates, absoluteUrl, ogLocale, ogLocaleAlternates, clampTitle, clampDescription, OG_IMAGE } from '@/lib/seo';
import { fetchTopHolders, fetchCreatorActivity, ONCHAIN_CONSTANTS } from '@/lib/onchain';

// Refresh the page in the edge cache every hour so on-chain values stay fresh.
export const revalidate = 3600;

// Third-party reference: RugCheck's automated insider-network analysis (BETA).
// Reproduced from RugCheck's public report as a documented snapshot, NOT
// re-derived here. Cluster shares OVERLAP and are not additive — the same
// tokens can move through more than one insider network, which is why the
// percentages sum to well over 100%. These are algorithmic heuristics:
// suggestive of coordinated distribution, not proof of wrongdoing on their own.
const RUGCHECK_URL =
  'https://rugcheck.xyz/tokens/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF';
const RUGCHECK_SNAPSHOT = '31 May 2026';
const INSIDER_CLUSTERS: Array<{ name: string; accounts: number; tokens: string; share: string }> = [
  { name: 'dazzling-sapphire-beaver', accounts: 170, tokens: '369M', share: '37%' },
  { name: 'dazzling-garnet-beaver', accounts: 136, tokens: '363M', share: '36%' },
  { name: 'lazy-coffee-newt', accounts: 48, tokens: '228M', share: '23%' },
  { name: 'bitter-slate-squirrel', accounts: 174, tokens: '208M', share: '21%' },
  { name: 'little-cinnamon-mouse', accounts: 37, tokens: '118M', share: '12%' },
  { name: 'elastic-teal-ram', accounts: 62, tokens: '115M', share: '12%' },
];

const COPY = {
  en: {
    h1: 'On-chain verification',
    lead:
      'Every claim in the case file that touches the blockchain is verifiable independently. This page renders the relevant values fetched server-side from public, no-auth APIs at the time shown. Click any address to verify on Solscan or Pump.fun directly.',
    methodology: 'Methodology',
    methodologyBody:
      'Token state and holder data are pulled from the Solana mainnet public RPC (`api.mainnet-beta.solana.com`). Market data is pulled from Pump.fun\'s public API (`frontend-api-v3.pump.fun`). Both are refreshed at most once per hour via Next.js ISR. No private keys, no paid API tier, no third-party aggregator that could shape the numbers.',
    sectionState: 'Token state',
    sectionHolders: 'Holder distribution',
    sectionInsider: 'Insider clustering',
    sectionCreator: 'Creator wallet activity',
    sectionChart: 'Live market chart',
    note: 'If any block shows "API temporarily unavailable", the public source briefly rate-limited us — refresh the page in a few minutes. The case file\'s factual claims do not depend on this live verification rendering; the underlying blockchain state is independently checkable at any time via the linked addresses.',
    insiderLead:
      'RugCheck — an independent, automated Solana token scanner — flags large token movements between connected wallets it groups into "insider networks". The figures below are reproduced verbatim from RugCheck\'s public report for the token; they are algorithmic heuristics (BETA), suggestive of coordinated distribution rather than organic holding, and are not on their own proof of wrongdoing. On-chain forensic attribution is in progress.',
    insiderColNetwork: 'Insider network',
    insiderColAccounts: 'Accounts',
    insiderColTokens: 'Moved',
    insiderColShare: 'of supply',
    insiderOverlap: 'Cluster shares overlap and are not additive — the same tokens can move through more than one network, so the percentages sum to more than 100%. RugCheck also marks the token\'s "Launch Insights" (BETA) as "Anomaly Found".',
    insiderCaveat:
      'Two points on the record. First: RugCheck\'s aggregate "risk" score for the token reads low — but that score measures only technical rug vectors (mint authority revoked, liquidity-pool locked), not the marketing conduct or refund refusal documented elsewhere in this file; those are separate questions. Second: RugCheck still shows the creator wallet holding ~30M NATRO (3.0% of supply), consistent with the "founder bag" the project publicly committed to never moving. This file does not claim that bag has moved. Whether the clustered transfers above correspond to the named founder allocation or to separate team / insider allocations requires further on-chain forensics.',
    insiderSource: 'View the live RugCheck report',
  },
  ru: {
    h1: 'On-chain верификация',
    lead:
      'Каждое утверждение в файле, касающееся блокчейна, проверяемо независимо. На этой странице рендерятся релевантные значения, забранные с публичных API без авторизации на момент, указанный в каждом блоке. Нажми на любой адрес — откроется Solscan или Pump.fun, чтобы убедиться напрямую.',
    methodology: 'Методология',
    methodologyBody:
      'Состояние токена и данные холдеров берутся с публичной RPC Solana mainnet (`api.mainnet-beta.solana.com`). Рыночные данные — с публичного API Pump.fun (`frontend-api-v3.pump.fun`). Оба обновляются не чаще раза в час через Next.js ISR. Никаких приватных ключей, никакого платного API-тира, никаких сторонних агрегаторов, которые могли бы повлиять на цифры.',
    sectionState: 'Состояние токена',
    sectionHolders: 'Распределение холдеров',
    sectionInsider: 'Кластеры инсайдеров',
    sectionCreator: 'Активность creator-кошелька',
    sectionChart: 'Живой график рынка',
    note: 'Если какой-то блок показывает «API temporarily unavailable» — публичный источник кратковременно поджался по rate-limit; обнови страницу через несколько минут. Фактические утверждения файла не зависят от рендеринга этой live-верификации; состояние блокчейна независимо проверяемо в любой момент через указанные ссылки.',
    insiderLead:
      'RugCheck — независимый автоматический сканер токенов Solana — отмечает крупные перемещения токенов между связанными кошельками, объединяя их в «сети инсайдеров». Цифры ниже воспроизведены дословно из публичного отчёта RugCheck по токену; это алгоритмические эвристики (BETA) — они указывают на скоординированное распределение, а не на органическое владение, и сами по себе не являются доказательством нарушения. On-chain атрибуция в процессе.',
    insiderColNetwork: 'Сеть инсайдеров',
    insiderColAccounts: 'Аккаунтов',
    insiderColTokens: 'Перемещено',
    insiderColShare: 'от supply',
    insiderOverlap: 'Доли кластеров пересекаются и не суммируются — одни и те же токены могут проходить через несколько сетей, поэтому проценты в сумме дают больше 100%. RugCheck также помечает «Launch Insights» (BETA) токена как «Anomaly Found».',
    insiderCaveat:
      'Два уточнения — на запись. Первое: совокупный «risk»-балл RugCheck по токену низкий, но этот балл измеряет только технические векторы раг-пула (отозвана ли mint authority, залочен ли пул ликвидности), а не маркетинговое поведение и не отказ в рефанде, задокументированные в других разделах файла; это отдельные вопросы. Второе: RugCheck по-прежнему показывает ~30M NATRO (3.0% supply) на creator-кошельке — что согласуется с «founder bag», который проект публично обязался не двигать. Файл не утверждает, что этот bag сдвинулся. Соответствуют ли кластерные переводы выше именованной аллокации основателя или отдельным командным / инсайдерским аллокациям — требует дальнейшей on-chain форензики.',
    insiderSource: 'Открыть живой отчёт RugCheck',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const copy = COPY[loc as keyof typeof COPY] || COPY.en;
  const title = clampTitle(`${copy.h1} — The NATRO File`);
  return {
    title,
    description: clampDescription(copy.lead.slice(0, 200)),
    alternates: buildAlternates(loc, '/on-chain'),
    openGraph: {
      title,
      description: copy.lead.slice(0, 200),
      images: [OG_IMAGE],
      type: 'article',
      url: absoluteUrl(loc, '/on-chain'),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
    },
    twitter: { card: 'summary_large_image', title, images: [OG_IMAGE.url] },
  };
}

export default async function OnChainPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const loc = locale as Locale;
  const copy = COPY[loc as keyof typeof COPY] || COPY.en;

  const bundle = await loadCaseFile(loc);
  const ui = bundle.config.uiStrings || {};

  // The state block fetches internally — but for the dashboard view we want
  // separate Holders + Creator widgets, so fetch those in parallel here.
  const [holders, creator] = await Promise.all([
    fetchTopHolders(),
    fetchCreatorActivity(),
  ]);

  return (
    <>
      <CeremonialMasthead
        locale={loc}
        tagline={bundle.config.tagline}
        uiStrings={ui}
        exhibitCount={bundle.exhibits.length}
        languageCount={locales.length}
        compact
      />
      <main
        className="relative z-[2] mx-auto"
        style={{ maxWidth: '900px', padding: 'clamp(20px, 4vw, 60px) clamp(16px, 5vw, 56px) 120px' }}
      >
        <div className="kicker mb-3">§ On-chain</div>
        <h1 className="serif text-[28px] sm:text-3xl md:text-5xl leading-[1.1] font-medium tracking-tight">
          {copy.h1}
        </h1>
        <p className="mt-4 serif italic text-lg text-[var(--color-ink-soft)] max-w-[720px]">{copy.lead}</p>
        <hr className="rule-divider-strong" />

        <section className="mb-10">
          <h2 className="kicker mb-3">§ {copy.sectionState}</h2>
          <OnChainStateBlock />
        </section>

        <section className="mb-10">
          <h2 className="kicker mb-3">§ {copy.sectionHolders}</h2>
          <HoldersTable data={holders} />
        </section>

        <section className="mb-10">
          <h2 className="kicker mb-3">§ {copy.sectionInsider}</h2>
          <p className="sans text-sm leading-relaxed text-[var(--color-ink-soft)] max-w-[720px] mb-4">
            {copy.insiderLead}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mono text-[13px]">
              <thead>
                <tr className="border-b border-[var(--color-ink)] text-[var(--color-ink-faint)] uppercase tracking-wider text-[10px]">
                  <th className="text-left py-2 pr-3 font-normal">{copy.insiderColNetwork}</th>
                  <th className="text-right py-2 px-3 font-normal">{copy.insiderColAccounts}</th>
                  <th className="text-right py-2 px-3 font-normal">{copy.insiderColTokens}</th>
                  <th className="text-right py-2 pl-3 font-normal">{copy.insiderColShare}</th>
                </tr>
              </thead>
              <tbody>
                {INSIDER_CLUSTERS.map((c) => (
                  <tr key={c.name} className="border-b border-[var(--color-rule-soft)]">
                    <td className="text-left py-2 pr-3 break-all">{c.name}</td>
                    <td className="text-right py-2 px-3">{c.accounts}</td>
                    <td className="text-right py-2 px-3">{c.tokens}</td>
                    <td className="text-right py-2 pl-3 text-[var(--color-accent)]">{c.share}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="sans text-xs leading-relaxed text-[var(--color-ink-faint)] mt-3 italic">
            {copy.insiderOverlap}
          </p>
          <p className="sans text-sm leading-relaxed text-[var(--color-ink-soft)] mt-4 border-l-2 border-[var(--color-rule)] pl-4">
            {copy.insiderCaveat}
          </p>
          <p className="mt-4">
            <a
              href={RUGCHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-xs uppercase tracking-wider text-[var(--color-accent)] hover:text-[var(--color-accent-soft)]"
            >
              {copy.insiderSource} ↗
            </a>
            <span className="mono text-[10px] text-[var(--color-ink-faint)] ml-2">
              · {RUGCHECK_SNAPSHOT}
            </span>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="kicker mb-3">§ {copy.sectionCreator}</h2>
          <CreatorActivityLog data={creator} />
        </section>

        <section className="mb-10">
          <h2 className="kicker mb-3">§ {copy.sectionChart}</h2>
          <DexScreenerEmbed pairAddress={ONCHAIN_CONSTANTS.pumpSwapPool} />
        </section>

        <section className="mt-12 border-t border-[var(--color-rule)] pt-6">
          <h2 className="kicker mb-3">{copy.methodology}</h2>
          <p className="sans text-sm leading-relaxed text-[var(--color-ink-soft)]">{copy.methodologyBody}</p>
          <p className="sans text-xs leading-relaxed text-[var(--color-ink-faint)] mt-3 italic">{copy.note}</p>
        </section>
      </main>
    </>
  );
}
