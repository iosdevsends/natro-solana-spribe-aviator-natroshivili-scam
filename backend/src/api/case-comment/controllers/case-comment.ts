import { factories } from '@strapi/strapi';

const UID = 'api::case-comment.case-comment';

export default factories.createCoreController(UID, ({ strapi }) => ({
  /**
   * Public read. Hard-forces the approved-only filter regardless of any
   * incoming query, so the comment wall can never surface a pending or
   * rejected comment even if the caller holds a full-access token.
   */
  async find(ctx) {
    ctx.query = ctx.query || {};
    const incomingFilters = (ctx.query as any).filters || {};
    (ctx.query as any).filters = {
      ...incomingFilters,
      moderationStatus: { $eq: 'approved' },
    };
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  /**
   * Public create. Everything that controls visibility or trust is set
   * server-side here — the client can never self-approve. The Next.js
   * `/api/comments` route does the CAPTCHA, sanitising and rate-limiting
   * before this is ever reached.
   */
  async create(ctx) {
    const incomingBody = (ctx.request.body as { data?: Record<string, unknown> }) || {};
    const data = { ...(incomingBody.data || {}) };
    data.moderationStatus = 'pending';
    data.approvedAt = null;
    data.submittedAt = new Date().toISOString();
    ctx.request.body = { data };
    return await super.create(ctx);
  },

  /**
   * Moderation queue — lists every comment in any status (default: pending),
   * bypassing the approved-only `find` override. Reached via the custom
   * `/case-comments/moderation/queue` route, which is gated by a valid
   * full-access API token (and, at the Next.js layer, by the editor
   * passphrase).
   */
  async moderationQueue(ctx) {
    const q = (ctx.query || {}) as Record<string, string>;
    const status = q.status && q.status !== 'all' ? q.status : undefined;
    const page = Math.max(1, parseInt(q.page || '1', 10) || 1);
    const pageSize = Math.min(100, Math.max(1, parseInt(q.pageSize || '50', 10) || 50));

    // Optional ipHash + since filters — used by the public endpoint for
    // per-IP rate limiting (private fields can't be filtered via the public
    // content API, but entityService can here).
    const filters: Record<string, unknown> = {};
    if (status) filters.moderationStatus = { $eq: status };
    if (q.ipHash) filters.ipHash = { $eq: q.ipHash };
    if (q.since) filters.submittedAt = { $gte: q.since };

    const [entries, total] = await Promise.all([
      strapi.entityService.findMany(UID, {
        filters: filters as any,
        sort: { submittedAt: 'desc' } as any,
        start: (page - 1) * pageSize,
        limit: pageSize,
      }),
      strapi.entityService.count(UID, { filters: filters as any }),
    ]);

    // Counts per status for the queue badges.
    const statuses = ['pending', 'approved', 'rejected'] as const;
    const countsArr = await Promise.all(
      statuses.map((s) =>
        strapi.entityService.count(UID, { filters: { moderationStatus: { $eq: s } } as any }),
      ),
    );
    const counts = Object.fromEntries(statuses.map((s, i) => [s, countsArr[i]]));

    return {
      data: entries,
      meta: { pagination: { page, pageSize, total }, counts },
    };
  },

  /**
   * Apply a moderation decision to a single comment. Reached via the custom
   * `PUT /case-comments/:id/moderate` route.
   */
  async moderate(ctx) {
    const { id } = ctx.params;
    const body = (ctx.request.body as { data?: Record<string, unknown> })?.data || {};
    const status = body.moderationStatus as string;
    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return ctx.badRequest('moderationStatus must be one of pending, approved, rejected.');
    }

    const existing = await strapi.entityService.findOne(UID, id);
    if (!existing) return ctx.notFound();

    const update: Record<string, unknown> = { moderationStatus: status };
    if (typeof body.moderationNotes === 'string') update.moderationNotes = body.moderationNotes;
    update.approvedAt = status === 'approved' ? new Date().toISOString() : null;

    const entry = await strapi.entityService.update(UID, id, { data: update as any });
    return { data: entry };
  },
}));
