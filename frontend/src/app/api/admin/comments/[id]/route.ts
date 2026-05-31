import { NextResponse } from 'next/server';
import { z } from 'zod';
import { isModerator } from '@/lib/moderation';
import { strapiTokenFetch } from '@/lib/strapi';

const ModerateSchema = z.object({
  moderationStatus: z.enum(['pending', 'approved', 'rejected']),
  moderationNotes: z.string().max(2000).optional(),
});

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isModerator())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const parsed = ModerateSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid decision' }, { status: 400 });
  }

  let res: Response;
  let data: { error?: { message?: string }; data?: unknown };
  try {
    res = await strapiTokenFetch(`/case-comments/${encodeURIComponent(id)}/moderate`, {
      method: 'PUT',
      body: JSON.stringify({ data: parsed.data }),
    });
    data = await res.json().catch(() => ({}));
  } catch {
    return NextResponse.json(
      { error: 'Cannot reach the CMS. Is the Strapi backend running?' },
      { status: 502 },
    );
  }
  if (!res.ok) {
    return NextResponse.json(
      { error: data?.error?.message || 'Moderation failed' },
      { status: res.status },
    );
  }

  // The public /reputation feed is fetched with `revalidate: 60`, so an
  // approved comment surfaces within a minute of this decision — no explicit
  // tag invalidation needed (matches the rest of the codebase's time-based ISR).
  return NextResponse.json({ ok: true, data: data?.data });
}
