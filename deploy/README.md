# Deploying alongside an existing Strapi instance on the same EC2 host

**Production domain:** `natro.meme`
**DNS / proxy:** Cloudflare (orange-cloud / proxied)
**Search Console:** verified at the `sc-domain:natro.meme` property level via Cloudflare DNS TXT record. Sitemap to submit once live: `https://natro.meme/sitemap.xml`.

Assumes: the EC2 instance is already running another Strapi project (e.g. `photovideo.ae`), Nginx is the front-side reverse proxy, and SSL is via Let's Encrypt. We add the NATRO site as a **second** vhost without touching the first.

---

## Pre-flight on the host

```sh
# 1. Pick a deploy directory that doesn't collide with the other project
sudo mkdir -p /srv/natro-platform
sudo chown $USER:$USER /srv/natro-platform

# 2. Confirm Docker has compose v2
docker compose version  # expect v2.x

# 3. Confirm the other Strapi project is NOT bound to ports we want
sudo ss -tlnp | grep -E ':(1337|3000|5432|5433)\b'
# If 1337 is taken: edit docker-compose.yml host port for `backend` (e.g. 1338:1337) and
# update the nginx upstream below to match.
```

## 1. Copy compose & env onto the host

```sh
rsync -avz docker-compose.yml docker-compose.prod.yml deploy/ \
  $USER@your-ec2:/srv/natro-platform/
```

On the host:

```sh
cd /srv/natro-platform
cp .env.example .env
# Rotate every secret — DO NOT reuse the local-dev values
openssl rand -base64 24   # → APP_KEYS (4 of these comma-separated)
openssl rand -base64 24   # → API_TOKEN_SALT, ADMIN_JWT_SECRET, etc.
```

## 2. Image pull

If using the GitHub Actions deploy workflow (recommended), the images are at
`ghcr.io/iosdevsends/natro-solana-spribe-aviator-natroshivili-scam/{frontend,backend}:latest`.

Otherwise, build on the host:
```sh
docker compose --env-file .env build
```

## 3. Start

```sh
docker compose --env-file .env -f docker-compose.yml -f docker-compose.prod.yml up -d
docker compose logs -f backend frontend
```

Wait for "Strapi started successfully" and "Ready" from Next.js.

## 4. Nginx vhost

```sh
sudo cp deploy/nginx/natro.conf /etc/nginx/sites-available/natro.conf
# (or /etc/nginx/conf.d/natro.conf on Amazon Linux)
sudo ln -s /etc/nginx/sites-available/natro.conf /etc/nginx/sites-enabled/  # Ubuntu
sudo nginx -t
sudo systemctl reload nginx
```

## 5. TLS

Cloudflare proxying is on (orange cloud). For the origin server, use a
Cloudflare Origin Certificate (15-year, free) or Let's Encrypt; either works.

Let's Encrypt path:
```sh
sudo certbot --nginx -d natro.meme --redirect --agree-tos -m moykin.e@gmail.com
```

Cloudflare dashboard → SSL/TLS → set **Full (strict)**.

## 5a. Submit sitemap to Google Search Console

The property `sc-domain:natro.meme` is already verified (Cloudflare DNS).
Once the site responds on `https://natro.meme`:

1. https://search.google.com/search-console → property `natro.meme` → **Sitemaps** → add `https://natro.meme/sitemap.xml`
2. **URL inspection** → enter `https://natro.meme/` → **Request indexing**. Repeat for `/ru`, `/ka`, `/fr`, `/de`, `/es`, `/stories`, `/privacy` to speed up first crawl.
3. First useful data appears after ~24–48h.

## 6. Create the Strapi admin account

Open `https://$YOUR_DOMAIN/admin` in a browser. First visit lets you create the editor account.

## 7. (Optional) Seed content into Strapi

```sh
docker compose exec frontend node scripts/export-seed.mjs
docker compose exec backend npm run seed
```

The Next.js frontend already renders the same content from its local fallback even without this step.

---

## Coexisting with `photovideo.ae`

Both Strapi projects can share the **same** PostgreSQL container as long as they use different database names. To do that, replace this project's `postgres` service in `docker-compose.prod.yml` with `external: true` and create the `natro` DB in the existing Postgres:

```sh
docker exec -it photovideo-postgres psql -U postgres -c "CREATE DATABASE natro;"
docker exec -it photovideo-postgres psql -U postgres -c "CREATE USER natro WITH PASSWORD 'rotate-me' SUPERUSER;"
docker exec -it photovideo-postgres psql -U postgres -c "GRANT ALL ON DATABASE natro TO natro;"
```

Then point the NATRO backend at `POSTGRES_HOST=photovideo-postgres` on the shared docker network.

For the v0 deploy, keep them isolated (this stack runs its own Postgres on port 5433) — it's the safest path. Consolidation can happen later once both projects are stable.

---

## Rollback

```sh
docker compose pull       # pull previous tag if you tagged it
docker compose up -d
# or roll back by image SHA:
docker compose pull backend=ghcr.io/.../backend:sha-abc1234
```

## Backup

Postgres backup once a day to S3 — add `deploy/cron/pg-backup.sh` and a cron entry (not in v0 scope).
