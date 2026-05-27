#!/usr/bin/env python3
"""
NATRO on-chain hourly snapshot.

Runs from cron on the host (not inside a container). Fetches the same
public APIs the frontend uses, computes a diff against the previous
snapshot, and either:
  - logs to /home/ubuntu/onchain-state/snapshots.log, AND
  - if STRAPI_TOKEN is set in /etc/natro-snapshot.env, POSTs a row to
    Strapi's /api/on-chain-snapshots so the editor can see the timeline
    + diff in the admin UI.

Designed to be defensive: any HTTP failure falls through to logging
only — never crashes the cron, never blocks the next run.

Dependencies: stdlib only. No pip required.
"""

from __future__ import annotations

import json
import os
import socket
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

# ─── Config ───────────────────────────────────────────────────────────────
NATRO_MINT = "9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF"
CREATOR_WALLET = "76qavBCaqDzn6KP6q5Qzu5sXVUXSqXWQpCTTF6Tye7xx"
SOLANA_RPC = "https://api.mainnet-beta.solana.com"
PUMP_FUN_API = f"https://frontend-api-v3.pump.fun/coins/{NATRO_MINT}"

STATE_DIR = Path("/home/ubuntu/onchain-state")
SNAPSHOTS_DIR = STATE_DIR / "snapshots"
LOG_FILE = STATE_DIR / "snapshots.log"
LAST_FILE = STATE_DIR / "last.json"

# Read Strapi credentials if available
STRAPI_ENV_FILE = Path("/etc/natro-snapshot.env")
STRAPI_BASE = "http://127.0.0.1:1338"

DIFF_THRESHOLDS = {
    "marketCapUsdPct": 0.20,   # 20% market-cap swing
    "topConcentrationPctAbs": 1.0,  # 1pp shift in top-10 concentration
    "creatorRecentTxCountDelta": 1, # any new tx
}

HTTP_TIMEOUT = 30


# ─── HTTP helpers ─────────────────────────────────────────────────────────
def http_get_json(url: str, headers: dict | None = None) -> dict | list | None:
    req = urllib.request.Request(url, headers=headers or {"User-Agent": "natro-onchain-snapshot/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=HTTP_TIMEOUT) as r:
            return json.loads(r.read().decode("utf-8"))
    except (urllib.error.URLError, urllib.error.HTTPError, socket.timeout, json.JSONDecodeError) as e:
        log(f"[http GET] {url} → {type(e).__name__}: {e}")
        return None


def http_post_json(url: str, payload: dict, headers: dict | None = None) -> tuple[int, dict | None]:
    body = json.dumps(payload).encode("utf-8")
    h = {"Content-Type": "application/json", "User-Agent": "natro-onchain-snapshot/1.0"}
    if headers:
        h.update(headers)
    req = urllib.request.Request(url, data=body, headers=h, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=HTTP_TIMEOUT) as r:
            return r.status, json.loads(r.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        try:
            err_body = json.loads(e.read().decode("utf-8"))
        except Exception:
            err_body = None
        log(f"[http POST] {url} → HTTP {e.code}: {err_body}")
        return e.code, err_body
    except (urllib.error.URLError, socket.timeout) as e:
        log(f"[http POST] {url} → {type(e).__name__}: {e}")
        return 0, None


def rpc(method: str, params: list) -> dict | None:
    res = http_post_json(SOLANA_RPC, {"jsonrpc": "2.0", "id": 1, "method": method, "params": params})
    if not res:
        return None
    _status, body = res
    if body and "result" in body:
        return body["result"]
    return None


# ─── Fetchers ─────────────────────────────────────────────────────────────
def fetch_mint_state() -> dict | None:
    result = rpc("getAccountInfo", [NATRO_MINT, {"encoding": "jsonParsed"}])
    if not result or not result.get("value"):
        return None
    info = result["value"]["data"]["parsed"]["info"]
    return {
        "mint": NATRO_MINT,
        "decimals": info.get("decimals"),
        "supply": info.get("supply"),
        "mintAuthority": info.get("mintAuthority"),
        "freezeAuthority": info.get("freezeAuthority"),
        "initialized": info.get("isInitialized"),
        "owner": result["value"].get("owner"),
    }


def fetch_pumpfun() -> dict | None:
    d = http_get_json(PUMP_FUN_API)
    if not isinstance(d, dict):
        return None
    return {
        "name": d.get("name"),
        "symbol": d.get("symbol"),
        "complete": bool(d.get("complete")),
        "marketCapUsd": d.get("market_cap"),
        "realSolReserves": d.get("real_sol_reserves"),
        "realTokenReserves": d.get("real_token_reserves"),
        "pumpSwapPool": d.get("pump_swap_pool"),
        "bondingCurve": d.get("bonding_curve"),
        "creator": d.get("creator"),
        "createdTs": d.get("created_timestamp"),
        "lastTradeTs": d.get("last_trade_timestamp"),
        "isBanned": bool(d.get("is_banned")),
    }


def fetch_top_holders() -> dict | None:
    result = rpc("getTokenLargestAccounts", [NATRO_MINT])
    if not result or not result.get("value"):
        return None
    total_supply = 1_000_000_000  # known constant for $NATRO
    top = []
    for h in result["value"][:10]:
        top.append({
            "address": h.get("address"),
            "balance": h.get("uiAmount"),
            "percent": (h.get("uiAmount") or 0) / total_supply * 100,
        })
    concentration = sum(h["percent"] for h in top)
    return {"top": top, "topConcentrationPct": round(concentration, 4)}


def fetch_creator_activity() -> dict | None:
    result = rpc("getSignaturesForAddress", [CREATOR_WALLET, {"limit": 20}])
    if not isinstance(result, list):
        return None
    recent = []
    for e in result:
        recent.append({
            "signature": e.get("signature"),
            "slot": e.get("slot"),
            "blockTime": e.get("blockTime"),
            "err": e.get("err"),
        })
    latest_block_time = recent[0]["blockTime"] if recent else None
    return {
        "wallet": CREATOR_WALLET,
        "recent": recent,
        "count": len(recent),
        "latestBlockTime": latest_block_time,
    }


# ─── Snapshot builder ─────────────────────────────────────────────────────
def build_snapshot() -> dict:
    captured_at = datetime.now(timezone.utc).isoformat()
    mint = fetch_mint_state()
    pumpfun = fetch_pumpfun()
    holders = fetch_top_holders()
    creator = fetch_creator_activity()

    return {
        "capturedAt": captured_at,
        "marketCapUsd": pumpfun.get("marketCapUsd") if pumpfun else None,
        "lastTradeAt": (
            datetime.fromtimestamp(pumpfun["lastTradeTs"] / 1000, tz=timezone.utc).isoformat()
            if pumpfun and pumpfun.get("lastTradeTs") else None
        ),
        "bondingCurveComplete": pumpfun.get("complete") if pumpfun else None,
        "mintAuthorityRenounced": mint.get("mintAuthority") is None if mint else None,
        "freezeAuthorityRenounced": mint.get("freezeAuthority") is None if mint else None,
        "topHolderCount": len(holders["top"]) if holders else None,
        "topConcentrationPct": holders.get("topConcentrationPct") if holders else None,
        "creatorRecentTxCount": creator.get("count") if creator else None,
        "creatorLatestTxAt": (
            datetime.fromtimestamp(creator["latestBlockTime"], tz=timezone.utc).isoformat()
            if creator and creator.get("latestBlockTime") else None
        ),
        "raw": {"mint": mint, "pumpfun": pumpfun, "holders": holders, "creator": creator},
    }


# ─── Diffing ──────────────────────────────────────────────────────────────
def compute_diff(prev: dict | None, curr: dict) -> dict:
    """Return a structured diff vs the previous snapshot.

    Only reports CHANGES that exceed the threshold. Static fields that didn't
    change emit no entry. The editor reviews this diff in Strapi admin.
    """
    if not prev:
        return {"firstRun": True, "changes": []}

    changes = []

    def cmp(field: str, fmt=None):
        a, b = prev.get(field), curr.get(field)
        if a != b:
            changes.append({
                "field": field,
                "from": a,
                "to": b,
            })

    cmp("bondingCurveComplete")
    cmp("mintAuthorityRenounced")
    cmp("freezeAuthorityRenounced")
    cmp("lastTradeAt")
    cmp("creatorLatestTxAt")

    # Market cap: percent change vs prev
    a_mc, b_mc = prev.get("marketCapUsd"), curr.get("marketCapUsd")
    if a_mc and b_mc:
        pct = abs(b_mc - a_mc) / a_mc
        if pct >= DIFF_THRESHOLDS["marketCapUsdPct"]:
            changes.append({
                "field": "marketCapUsd",
                "from": a_mc,
                "to": b_mc,
                "deltaPct": round(pct * 100, 2),
                "highSignal": True,
            })

    # Top concentration: absolute pp shift
    a_c, b_c = prev.get("topConcentrationPct"), curr.get("topConcentrationPct")
    if a_c is not None and b_c is not None:
        if abs(b_c - a_c) >= DIFF_THRESHOLDS["topConcentrationPctAbs"]:
            changes.append({
                "field": "topConcentrationPct",
                "from": a_c,
                "to": b_c,
                "delta": round(b_c - a_c, 4),
                "highSignal": True,
            })

    # Creator tx count: any new ones
    a_n, b_n = prev.get("creatorRecentTxCount"), curr.get("creatorRecentTxCount")
    if a_n is not None and b_n is not None and b_n != a_n:
        changes.append({
            "field": "creatorRecentTxCount",
            "from": a_n,
            "to": b_n,
            "delta": b_n - a_n,
            "highSignal": True,
        })

    return {
        "firstRun": False,
        "previousCapturedAt": prev.get("capturedAt"),
        "changes": changes,
        "highSignalCount": sum(1 for c in changes if c.get("highSignal")),
    }


# ─── Strapi sink ──────────────────────────────────────────────────────────
def load_strapi_token() -> str | None:
    if not STRAPI_ENV_FILE.exists():
        return None
    for line in STRAPI_ENV_FILE.read_text().splitlines():
        line = line.strip()
        if line.startswith("STRAPI_TOKEN="):
            return line.split("=", 1)[1].strip().strip('"').strip("'")
    return None


def post_to_strapi(payload: dict, diff: dict) -> bool:
    token = load_strapi_token()
    if not token:
        return False

    body = {
        "data": {
            "capturedAt": payload["capturedAt"],
            "marketCapUsd": payload.get("marketCapUsd"),
            "lastTradeAt": payload.get("lastTradeAt"),
            "bondingCurveComplete": payload.get("bondingCurveComplete"),
            "mintAuthorityRenounced": payload.get("mintAuthorityRenounced"),
            "freezeAuthorityRenounced": payload.get("freezeAuthorityRenounced"),
            "topHolderCount": payload.get("topHolderCount"),
            "topConcentrationPct": payload.get("topConcentrationPct"),
            "creatorRecentTxCount": payload.get("creatorRecentTxCount"),
            "creatorLatestTxAt": payload.get("creatorLatestTxAt"),
            "diffFromPrevious": diff,
            "raw": payload.get("raw"),
            "editorReviewStatus": "flagged" if diff.get("highSignalCount", 0) > 0 else "new",
        }
    }
    status, _resp = http_post_json(
        f"{STRAPI_BASE}/api/on-chain-snapshots",
        body,
        headers={"Authorization": f"Bearer {token}"},
    )
    if status == 200 or status == 201:
        log(f"strapi POST ok ({status})")
        return True
    log(f"strapi POST returned {status}")
    return False


# ─── I/O ──────────────────────────────────────────────────────────────────
def log(msg: str):
    ts = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{ts}Z] {msg}"
    print(line)
    try:
        LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
        with LOG_FILE.open("a") as f:
            f.write(line + "\n")
    except OSError:
        pass


def write_snapshot_files(snapshot: dict):
    SNAPSHOTS_DIR.mkdir(parents=True, exist_ok=True)
    ts_filename = snapshot["capturedAt"].replace(":", "-")
    out = SNAPSHOTS_DIR / f"{ts_filename}.json"
    out.write_text(json.dumps(snapshot, indent=2))
    LAST_FILE.parent.mkdir(parents=True, exist_ok=True)
    LAST_FILE.write_text(json.dumps(snapshot, indent=2))
    log(f"wrote {out.name}")


def load_prev_snapshot() -> dict | None:
    if not LAST_FILE.exists():
        return None
    try:
        return json.loads(LAST_FILE.read_text())
    except json.JSONDecodeError:
        return None


# ─── Entry ────────────────────────────────────────────────────────────────
def main() -> int:
    log("snapshot run starting")
    prev = load_prev_snapshot()
    snapshot = build_snapshot()
    diff = compute_diff(prev, snapshot)
    snapshot["diffFromPrevious"] = diff
    write_snapshot_files(snapshot)
    log(
        f"snapshot ok: mc=${snapshot.get('marketCapUsd')} "
        f"complete={snapshot.get('bondingCurveComplete')} "
        f"creatorTx={snapshot.get('creatorRecentTxCount')} "
        f"changes={len(diff.get('changes', []))} "
        f"highSignal={diff.get('highSignalCount', 0)}"
    )
    if diff.get("changes"):
        log(f"  changes: {json.dumps(diff['changes'])}")
    post_to_strapi(snapshot, diff)
    return 0


if __name__ == "__main__":
    sys.exit(main())
