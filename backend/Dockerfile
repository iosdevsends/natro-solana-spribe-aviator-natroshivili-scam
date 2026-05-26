ARG NODE_VERSION=22

# ─── Base ───────────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat vips-dev build-base python3 git curl
ENV NODE_ENV=development

# ─── Dev (used by docker-compose for hot reload) ────────────────────────────
FROM base AS dev
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 1337
CMD ["npm", "run", "develop"]

# ─── Builder ────────────────────────────────────────────────────────────────
FROM base AS builder
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps
COPY . .
ENV NODE_ENV=production
# Strapi 5's admin panel build is heavy; t3.small (2 GB RAM + 2 GB swap)
# needs an explicit heap bump or v8 will OOM near 1.7 GB default.
ENV NODE_OPTIONS=--max-old-space-size=2560
RUN npm run build

# ─── Production runner ──────────────────────────────────────────────────────
FROM node:${NODE_VERSION}-alpine AS prod
WORKDIR /app
RUN apk add --no-cache libc6-compat vips-dev tini
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/config ./config
COPY --from=builder /app/database ./database
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/favicon.png ./favicon.png

EXPOSE 1337
ENTRYPOINT ["tini", "--"]
CMD ["node", "node_modules/@strapi/strapi/bin/strapi.js", "start"]
