/**
 * On-chain verification fetchers.
 *
 * Every value rendered on `/on-chain` and in the OnChainStateBlock is
 * fetched server-side from public, no-auth APIs at the time shown.
 * Cached via Next ISR (1h default). Falls back gracefully if any source
 * is down so the page still renders.
 *
 * No interpretation here — just raw values + the source URL. Editorial
 * framing lives in the case file's voice; this module is the receipts.
 */

import 'server-only';

const NATRO_MINT = '9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF';
const CREATOR_WALLET = '76qavBCaqDzn6KP6q5Qzu5sXVUXSqXWQpCTTF6Tye7xx';
const PUMP_SWAP_POOL = '7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS';

const SOLANA_RPC = process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com';
const PUMP_FUN_API = 'https://frontend-api-v3.pump.fun/coins';

const REVALIDATE_S = 3600; // 1h ISR

export const ONCHAIN_CONSTANTS = {
  mint: NATRO_MINT,
  creatorWallet: CREATOR_WALLET,
  pumpSwapPool: PUMP_SWAP_POOL,
  totalSupply: 1_000_000_000,
};

// ─── Shapes ────────────────────────────────────────────────────────────────

export interface MintState {
  mint: string;
  decimals: number;
  supply: string;           // raw integer, divide by 10^decimals
  supplyHuman: number;       // formatted
  mintAuthority: string | null;
  freezeAuthority: string | null;
  initialized: boolean;
  ownerProgram: string;
  fetchedAt: string;
  solscanUrl: string;
}

export interface PumpFunState {
  mint: string;
  name: string;
  symbol: string;
  complete: boolean;
  marketCapUsd: number | null;
  virtualSolReserves: number | null;
  virtualTokenReserves: string | null;
  realSolReserves: number | null;
  realTokenReserves: string | null;
  pumpSwapPool: string | null;
  bondingCurve: string | null;
  creator: string | null;
  createdAt: string | null;
  lastTradeAt: string | null;
  isBanned: boolean;
  fetchedAt: string;
  sourceUrl: string;
}

export interface HolderInfo {
  address: string;
  balance: number;        // human
  percent: number;        // 0-100
  solscanUrl: string;
}

export interface HoldersSummary {
  top: HolderInfo[];
  topCount: number;
  topConcentrationPct: number; // sum of top.percent
  fetchedAt: string;
  sourceUrl: string;
}

export interface CreatorActivityEntry {
  signature: string;
  slot: number;
  blockTime: string | null;   // ISO
  err: unknown;
  solscanUrl: string;
}

export interface CreatorActivity {
  wallet: string;
  recent: CreatorActivityEntry[];
  totalSignaturesScanned: number;
  fetchedAt: string;
  sourceUrl: string;
}

// ─── RPC plumbing ───────────────────────────────────────────────────────────

async function rpc<T>(method: string, params: unknown[]): Promise<T | null> {
  try {
    const res = await fetch(SOLANA_RPC, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
      next: { revalidate: REVALIDATE_S, tags: ['onchain'] },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { result?: T; error?: unknown };
    if (json.error) {
      console.warn(`[onchain] RPC ${method} error`, json.error);
      return null;
    }
    return json.result ?? null;
  } catch (err) {
    console.warn(`[onchain] RPC ${method} fetch failed`, (err as Error).message);
    return null;
  }
}

// ─── Fetchers ───────────────────────────────────────────────────────────────

export async function fetchMintState(): Promise<MintState | null> {
  type Parsed = {
    value: {
      owner: string;
      data: {
        parsed: {
          info: {
            decimals: number;
            supply: string;
            mintAuthority: string | null;
            freezeAuthority: string | null;
            isInitialized: boolean;
          };
        };
      };
    } | null;
  };
  const result = await rpc<Parsed>('getAccountInfo', [
    NATRO_MINT,
    { encoding: 'jsonParsed' },
  ]);
  if (!result?.value) return null;
  const info = result.value.data.parsed.info;
  const supplyHuman = Number(info.supply) / 10 ** info.decimals;
  return {
    mint: NATRO_MINT,
    decimals: info.decimals,
    supply: info.supply,
    supplyHuman,
    mintAuthority: info.mintAuthority,
    freezeAuthority: info.freezeAuthority,
    initialized: info.isInitialized,
    ownerProgram: result.value.owner,
    fetchedAt: new Date().toISOString(),
    solscanUrl: `https://solscan.io/token/${NATRO_MINT}`,
  };
}

export async function fetchPumpFunState(): Promise<PumpFunState | null> {
  try {
    const res = await fetch(`${PUMP_FUN_API}/${NATRO_MINT}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (natro.meme on-chain verification)' },
      next: { revalidate: REVALIDATE_S, tags: ['onchain'] },
    });
    if (!res.ok) return null;
    const d = (await res.json()) as {
      mint: string;
      name?: string;
      symbol?: string;
      complete?: boolean;
      market_cap?: number;
      virtual_sol_reserves?: number;
      virtual_token_reserves?: number | string;
      real_sol_reserves?: number;
      real_token_reserves?: number | string;
      pump_swap_pool?: string;
      bonding_curve?: string;
      creator?: string;
      created_timestamp?: number;
      last_trade_timestamp?: number;
      is_banned?: boolean;
    };
    return {
      mint: d.mint,
      name: d.name || 'NatroCoin',
      symbol: d.symbol || 'NATRO',
      complete: !!d.complete,
      marketCapUsd: typeof d.market_cap === 'number' ? d.market_cap : null,
      virtualSolReserves: d.virtual_sol_reserves ?? null,
      virtualTokenReserves:
        d.virtual_token_reserves !== undefined ? String(d.virtual_token_reserves) : null,
      realSolReserves: d.real_sol_reserves ?? null,
      realTokenReserves:
        d.real_token_reserves !== undefined ? String(d.real_token_reserves) : null,
      pumpSwapPool: d.pump_swap_pool ?? null,
      bondingCurve: d.bonding_curve ?? null,
      creator: d.creator ?? null,
      createdAt: d.created_timestamp ? new Date(d.created_timestamp).toISOString() : null,
      lastTradeAt: d.last_trade_timestamp ? new Date(d.last_trade_timestamp).toISOString() : null,
      isBanned: !!d.is_banned,
      fetchedAt: new Date().toISOString(),
      sourceUrl: `https://pump.fun/coin/${NATRO_MINT}`,
    };
  } catch (err) {
    console.warn('[onchain] pump.fun fetch failed', (err as Error).message);
    return null;
  }
}

export async function fetchTopHolders(): Promise<HoldersSummary | null> {
  type Parsed = {
    value: Array<{ address: string; amount: string; decimals: number; uiAmount: number }>;
  };
  const result = await rpc<Parsed>('getTokenLargestAccounts', [NATRO_MINT]);
  if (!result?.value) return null;
  const supply = ONCHAIN_CONSTANTS.totalSupply;
  const top = result.value
    .slice(0, 10)
    .map((a) => ({
      address: a.address,
      balance: a.uiAmount,
      percent: (a.uiAmount / supply) * 100,
      solscanUrl: `https://solscan.io/account/${a.address}`,
    }));
  const topConcentrationPct = top.reduce((acc, h) => acc + h.percent, 0);
  return {
    top,
    topCount: top.length,
    topConcentrationPct,
    fetchedAt: new Date().toISOString(),
    sourceUrl: `https://solscan.io/token/${NATRO_MINT}#holders`,
  };
}

export async function fetchCreatorActivity(limit = 15): Promise<CreatorActivity | null> {
  type SigEntry = {
    signature: string;
    slot: number;
    blockTime: number | null;
    err: unknown;
  };
  const result = await rpc<SigEntry[]>('getSignaturesForAddress', [
    CREATOR_WALLET,
    { limit },
  ]);
  if (!result) return null;
  const recent = result.map((e) => ({
    signature: e.signature,
    slot: e.slot,
    blockTime: e.blockTime ? new Date(e.blockTime * 1000).toISOString() : null,
    err: e.err,
    solscanUrl: `https://solscan.io/tx/${e.signature}`,
  }));
  return {
    wallet: CREATOR_WALLET,
    recent,
    totalSignaturesScanned: result.length,
    fetchedAt: new Date().toISOString(),
    sourceUrl: `https://solscan.io/account/${CREATOR_WALLET}`,
  };
}

export async function fetchAll() {
  const [mint, pumpFun, holders, creator] = await Promise.all([
    fetchMintState(),
    fetchPumpFunState(),
    fetchTopHolders(),
    fetchCreatorActivity(),
  ]);
  return { mint, pumpFun, holders, creator, fetchedAt: new Date().toISOString() };
}

export type OnChainBundle = Awaited<ReturnType<typeof fetchAll>>;
