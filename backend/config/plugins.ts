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
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.resend.com'),
        port: env.int('SMTP_PORT', 465),
        secure: env.bool('SMTP_SECURE', true),
        auth: {
          user: env('SMTP_USER', 'resend'),
          pass: env('SMTP_PASSWORD', ''),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'noreply@natro.meme'),
        defaultReplyTo: env('EMAIL_REPLY_TO') || env('EMAIL_FROM', 'noreply@natro.meme'),
      },
    },
  },
});

export default config;
