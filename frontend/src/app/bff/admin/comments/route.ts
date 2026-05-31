import { NextResponse } from 'next/server';
import { isModerator } from '@/lib/moderation';
import { strapiTokenFetch } from '@/lib/strapi';

/**
 * Moderation queue listing. Gated by the editor cookie; the privileged read
 * itself goes to Strapi with the full-access API token.
 */
export async function GET(req: Request) {
  if (!(await isModerator())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = new URL(req.url);
  const status = url.searchParams.get('status') || 'pending';
  const page = url.searchParams.get('page') || '1';
  const pageSize = url.searchParams.get('pageSize') || '50';

  const params = new URLSearchParams({ status, page, pageSize });
  try {
    const res = await strapiTokenFetch(`/case-comments/moderation/queue?${params.toString()}`);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json(
        { error: data?.error?.message || 'Queue fetch failed' },
        { status: res.status },
      );
    }
    return NextResponse.json(data);
  } catch {
    // Strapi unreachable (e.g. backend not running) — return a clean message.
    return NextResponse.json(
      { error: 'Cannot reach the CMS. Is the Strapi backend running?' },
      { status: 502 },
    );
  }
}
