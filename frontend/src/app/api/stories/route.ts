import { NextResponse } from 'next/server';
import { strapiAuthenticatedFetch } from '@/lib/auth';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

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
  locale: z.string().min(2).max(5).optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = StorySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid story payload', details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { locale, ...rest } = parsed.data;
  const sanitized = {
    ...rest,
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
