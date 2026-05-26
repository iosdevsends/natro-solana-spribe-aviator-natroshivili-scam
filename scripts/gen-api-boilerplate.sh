#!/usr/bin/env bash
# Generate default controller/route/service files for each Strapi content type.
# Strapi 5 will fall back to defaults when these stubs exist; we use them so
# the developer (or seed scripts) can extend them later.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
APIS=(exhibit case-section timeline-event quote person promise-reality-row tier-row snapshot-cell evidence-row site-config user-story)

for api in "${APIS[@]}"; do
  base="$ROOT/backend/src/api/$api"
  mkdir -p "$base/controllers" "$base/routes" "$base/services"

  cat > "$base/controllers/$api.ts" <<EOF
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::$api.$api');
EOF

  cat > "$base/services/$api.ts" <<EOF
import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::$api.$api');
EOF

  cat > "$base/routes/$api.ts" <<EOF
import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::$api.$api');
EOF
done

echo "Generated boilerplate for ${#APIS[@]} APIs."
