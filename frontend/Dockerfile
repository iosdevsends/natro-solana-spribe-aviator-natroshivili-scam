ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm install --no-audit --no-fund --loglevel=error

FROM base AS dev
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM base AS builder
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# NEXT_PUBLIC_* vars must be present at build time — Next.js inlines them
# into the client JS bundle. Pass via --build-arg from docker compose.
ARG NEXT_PUBLIC_STRAPI_URL
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_DEFAULT_LOCALE
ARG NEXT_PUBLIC_LOCALES
ARG NEXT_PUBLIC_GA_ID
ARG NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
ARG NEXT_PUBLIC_TURNSTILE_SITEKEY
ENV NEXT_PUBLIC_STRAPI_URL=$NEXT_PUBLIC_STRAPI_URL \
    NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_DEFAULT_LOCALE=$NEXT_PUBLIC_DEFAULT_LOCALE \
    NEXT_PUBLIC_LOCALES=$NEXT_PUBLIC_LOCALES \
    NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID \
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=$NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION \
    NEXT_PUBLIC_TURNSTILE_SITEKEY=$NEXT_PUBLIC_TURNSTILE_SITEKEY
RUN npm run build

FROM base AS prod
ENV NODE_ENV=production
RUN apk add --no-cache tini
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
ENTRYPOINT ["tini", "--"]
CMD ["node", "server.js"]
