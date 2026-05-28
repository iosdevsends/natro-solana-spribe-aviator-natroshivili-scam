#!/usr/bin/env bash
# Submit every URL in the public sitemap to the IndexNow API (Bing, Yandex,
# Yep and others that share the protocol). Bing's Webmaster Tools propagates
# the submission to Yandex automatically, but we hit api.indexnow.org directly
# so the request is logged on both surfaces.
#
# Triggered from the Deploy workflow after the smoke-test passes. Safe to
# re-run — re-submission is idempotent; IndexNow rate-limits abusive callers
# but a few-dozen URLs per deploy is well below threshold.
#
# Required env:
#   PUBLIC_URL       e.g. https://natro.meme  (no trailing slash)
#   INDEXNOW_KEY     32-char hex — must match the filename of the key file
#                    in public/ ({KEY}.txt with {KEY} as the file content).
set -euo pipefail

: "${PUBLIC_URL:?PUBLIC_URL required, e.g. https://natro.meme}"
: "${INDEXNOW_KEY:?INDEXNOW_KEY required}"

HOST="${PUBLIC_URL#https://}"
HOST="${HOST#http://}"
HOST="${HOST%%/*}"
KEY_LOCATION="${PUBLIC_URL}/${INDEXNOW_KEY}.txt"

# Collect <loc> URLs from the live sitemap. Tolerant to multi-line layout.
URLS=$(curl -fsSL "${PUBLIC_URL}/sitemap.xml" \
  | grep -oE '<loc>[^<]+</loc>' \
  | sed 's/<loc>//; s/<\/loc>//' \
  | head -200)

if [ -z "${URLS}" ]; then
  echo "⚠️  No URLs found in sitemap; skipping IndexNow ping."
  exit 0
fi

URL_LIST=$(printf '%s\n' "${URLS}" \
  | awk 'BEGIN{first=1} {printf "%s\"%s\"", (first?"":","), $0; first=0}')

PAYLOAD=$(printf '{"host":"%s","key":"%s","keyLocation":"%s","urlList":[%s]}' \
  "${HOST}" "${INDEXNOW_KEY}" "${KEY_LOCATION}" "${URL_LIST}")

echo "Submitting $(printf '%s\n' "${URLS}" | wc -l | tr -d ' ') URL(s) to IndexNow…"

code=$(curl -fsSL -o /tmp/indexnow.out -w '%{http_code}' \
  -X POST 'https://api.indexnow.org/IndexNow' \
  -H 'Content-Type: application/json; charset=utf-8' \
  --data "${PAYLOAD}" || echo 'fail')

echo "IndexNow response: HTTP ${code}"
[ -s /tmp/indexnow.out ] && cat /tmp/indexnow.out
echo ""

# 200 = accepted, 202 = accepted async, anything else = failure but
# non-blocking — the deploy already succeeded; IndexNow is a hint, not gate.
case "${code}" in
  2*) echo "✅ IndexNow accepted." ;;
  *)  echo "⚠️  IndexNow returned ${code}; continuing anyway." ;;
esac
