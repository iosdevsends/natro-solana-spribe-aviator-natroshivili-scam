import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      register: {
        allowedFields: ['displayName', 'preferredLocale'],
      },
    },
  },
  upload: {
    config: {
      sizeLimit: 50 * 1024 * 1024, // 50MB for evidence videos
    },
  },
});

export default config;
