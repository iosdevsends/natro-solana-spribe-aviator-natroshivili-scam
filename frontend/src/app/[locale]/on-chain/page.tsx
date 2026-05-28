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
import { buildAlternates, absoluteUrl, ogLocale, ogLocaleAlternates } from '@/lib/seo';
import { fetchTopHolders, fetchCreatorActivity, ONCHAIN_CONSTANTS } from '@/lib/onchain';

// Refresh the page in the edge cache every hour so on-chain values stay fresh.
export const revalidate = 3600;

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
    sectionCreator: 'Creator wallet activity',
    sectionChart: 'Live market chart',
    note: 'If any block shows "API temporarily unavailable", the public source briefly rate-limited us — refresh the page in a few minutes. The case file\'s factual claims do not depend on this live verification rendering; the underlying blockchain state is independently checkable at any time via the linked addresses.',
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
    sectionCreator: 'Активность creator-кошелька',
    sectionChart: 'Живой график рынка',
    note: 'Если какой-то блок показывает «API temporarily unavailable» — публичный источник кратковременно поджался по rate-limit; обнови страницу через несколько минут. Фактические утверждения файла не зависят от рендеринга этой live-верификации; состояние блокчейна независимо проверяемо в любой момент через указанные ссылки.',
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
  const title = `${copy.h1} — The NATRO File`;
  return {
    title,
    description: copy.lead.slice(0, 200),
    alternates: buildAlternates(loc, '/on-chain'),
    openGraph: {
      title,
      description: copy.lead.slice(0, 200),
      type: 'article',
      url: absoluteUrl(loc, '/on-chain'),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
    },
    twitter: { card: 'summary_large_image', title },
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
