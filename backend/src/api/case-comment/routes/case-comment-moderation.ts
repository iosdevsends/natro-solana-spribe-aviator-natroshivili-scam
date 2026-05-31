/**
 * Moderation-only routes for case comments. These bypass the approved-only
 * `find` override so an editor can see pending/rejected comments and act on
 * them. They are NOT opened to the public role; reach them with a full-access
 * API token (the Next.js admin routes hold one, behind an editor passphrase).
 */
export default {
  routes: [
    {
      method: 'GET',
      path: '/case-comments/moderation/queue',
      handler: 'case-comment.moderationQueue',
    },
    {
      method: 'PUT',
      path: '/case-comments/:id/moderate',
      handler: 'case-comment.moderate',
    },
  ],
};
