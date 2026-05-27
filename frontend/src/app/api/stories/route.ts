import { NextResponse } from 'next/server';
import { strapiAuthenticatedFetch, getCurrentUser } from '@/lib/auth';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';
import { verifyTurnstile } from '@/lib/turnstile';

const StorySchema = z.object({
  title: z.string().min(8).max(220),
  summary: z.string().max(600).optional(),
  body: z.string().min(40),
  tokenSymbol: z.string().max(20).optional(),
  tokenChain: z
    .enum(['solana', 'ethereum', 'base', 'bsc', 'ton', 'tron', 'other', 'non-crypto'])
    .optional(),
  lossUsd: z.number().nonnegative().optional(),
  incidentDate: z.string().optional(),
  evidenceLinks: z
    .array(z.object({ label: z.string(), url: z.string().url() }))
    .max(20)
    .optional(),
  namedParties: z
    .array(z.object({ name: z.string(), role: z.string().optional() }))
    .max(20)
    .optional(),
  isAnonymous: z.boolean().optional(),
  contactConsent: z.boolean().optional(),
  termsAccepted: z.literal(true, {
    message: 'You must confirm the submission terms.',
  }),
  locale: z.string().min(2).max(5).optional(),
  turnstileToken: z.string().optional(),
});

const SUBMIT_DAILY_LIMIT = 5;

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = StorySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid story payload', details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const captcha = await verifyTurnstile(
    parsed.data.turnstileToken,
    req.headers.get('cf-connecting-ip') || req.headers.get('x-real-ip') || undefined,
  );
  if (!captcha.ok) {
    return NextResponse.json({ error: 'CAPTCHA verification failed' }, { status: 400 });
  }

  // Per-user daily rate limit: count this author's submissions in last 24h.
  const sinceIso = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const filterQuery = new URLSearchParams({
    'filters[author][id][$eq]': String(user.id),
    'filters[submittedAt][$gte]': sinceIso,
    'pagination[pageSize]': '1',
    'pagination[withCount]': 'true',
  });
  try {
    const countRes = await strapiAuthenticatedFetch(
      `/api/user-stories?${filterQuery.toString()}`,
      { method: 'GET' },
    );
    if (countRes.ok) {
      const countData = (await countRes.json()) as {
        meta?: { pagination?: { total?: number } };
      };
      const total = countData.meta?.pagination?.total ?? 0;
      if (total >= SUBMIT_DAILY_LIMIT) {
        return NextResponse.json(
          {
            error: `Daily submission limit reached (${SUBMIT_DAILY_LIMIT}/day). Try again tomorrow.`,
          },
          { status: 429 },
        );
      }
    }
  } catch {
    // Rate-limit check is advisory; do not block legitimate submissions on lookup failure.
  }

  const { locale, turnstileToken: _t, termsAccepted: _ta, ...rest } = parsed.data;
  const sanitized = {
    ...rest,
    termsAccepted: true,
    title: DOMPurify.sanitize(rest.title, { ALLOWED_TAGS: [] }),
    summary: rest.summary ? DOMPurify.sanitize(rest.summary, { ALLOWED_TAGS: [] }) : undefined,
    body: DOMPurify.sanitize(rest.body, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li', 'blockquote', 'h2', 'h3', 'code'],
      ALLOWED_ATTR: ['href', 'rel', 'target'],
    }),
  };

  const res = await strapiAuthenticatedFetch(
    `/api/user-stories${locale ? `?locale=${encodeURIComponent(locale)}` : ''}`,
    {
      method: 'POST',
      body: JSON.stringify({ data: sanitized }),
    },
  );
  const data = await res.json();
  if (!res.ok) {
    return NextResponse.json(
      { error: data?.error?.message || 'Submit failed' },
      { status: res.status },
    );
  }
  return NextResponse.json({ story: data.data });
}
