import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::user-story.user-story',
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = ctx.query || {};
      const incomingFilters = (ctx.query as any).filters || {};
      (ctx.query as any).filters = {
        ...incomingFilters,
        moderationStatus: { $eq: 'approved' },
      };
      (ctx.query as any).publicationState = 'live';
      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },

    async create(ctx) {
      const user = ctx.state.user;
      if (!user) {
        return ctx.unauthorized('You must be signed in to submit a story.');
      }
      const incomingBody = (ctx.request.body as { data?: Record<string, unknown> }) || {};
      const data = { ...(incomingBody.data || {}) };
      data.author = user.id;
      data.moderationStatus = 'pending';
      data.verificationStatus = 'unverified';
      data.approvedAt = null;
      data.submittedAt = new Date().toISOString();
      (data as any).publishedAt = null;
      ctx.request.body = { data };
      return await super.create(ctx);
    },

    async update(ctx) {
      const user = ctx.state.user;
      if (!user) return ctx.unauthorized();
      const { id } = ctx.params;
      const existing = await strapi.entityService.findOne(
        'api::user-story.user-story',
        id,
        { populate: { author: true } as any },
      );
      if (!existing) return ctx.notFound();
      const authorId = (existing as any).author?.id;
      if (authorId !== user.id) return ctx.forbidden('Not your story.');
      const status = (existing as any).moderationStatus;
      if (status === 'approved' || status === 'rejected') {
        return ctx.forbidden('This story is locked.');
      }
      const incomingBody = (ctx.request.body as { data?: Record<string, unknown> }) || {};
      const data = { ...(incomingBody.data || {}) };
      delete data.author;
      delete data.moderationStatus;
      delete data.verificationStatus;
      delete data.approvedAt;
      data.moderationStatus = 'pending';
      ctx.request.body = { data };
      return await super.update(ctx);
    },
  }),
);
