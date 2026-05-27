import type { Core } from '@strapi/strapi';

const SUPPORTED_LOCALES: Array<{ code: string; name: string; isDefault?: boolean }> = [
  { code: 'en', name: 'English (en)', isDefault: true },
  { code: 'ru', name: 'Русский (ru)' },
  { code: 'uk', name: 'Українська (uk)' },
  { code: 'ka', name: 'ქართული (ka)' },
  { code: 'fr', name: 'Français (fr)' },
  { code: 'de', name: 'Deutsch (de)' },
  { code: 'es', name: 'Español (es)' },
];

async function syncUsersPermissionsAdvanced(strapi: Core.Strapi) {
  const wantConfirmation =
    String(process.env.EMAIL_CONFIRMATION_REQUIRED || '').toLowerCase() === 'true' &&
    !!process.env.SMTP_PASSWORD;

  try {
    const pluginStore = strapi.store({
      type: 'plugin',
      name: 'users-permissions',
    });
    const current = ((await pluginStore.get({ key: 'advanced' })) as Record<string, unknown>) || {};
    const next = {
      ...current,
      email_confirmation: wantConfirmation,
      email_confirmation_redirection:
        process.env.PUBLIC_FRONTEND_URL || 'https://natro.meme',
      allow_register: true,
      unique_email: true,
    };
    await pluginStore.set({ key: 'advanced', value: next });
    strapi.log.info(
      `[bootstrap] users-permissions advanced: email_confirmation=${wantConfirmation}`,
    );
  } catch (err) {
    strapi.log.warn('[bootstrap] could not sync users-permissions advanced: ' + (err as Error).message);
  }
}

// Public-readable collection types. The user-story controller already filters by approved.
const PUBLIC_READ_CONTENT_TYPES = [
  'api::exhibit.exhibit',
  'api::case-section.case-section',
  'api::timeline-event.timeline-event',
  'api::quote.quote',
  'api::person.person',
  'api::promise-reality-row.promise-reality-row',
  'api::tier-row.tier-row',
  'api::snapshot-cell.snapshot-cell',
  'api::evidence-row.evidence-row',
  'api::site-config.site-config',
  'api::user-story.user-story',
];

const PUBLIC_FIND_ACTIONS = ['find', 'findOne'];

const AUTHENTICATED_USER_STORY_ACTIONS = ['find', 'findOne', 'create', 'update'];

async function ensureLocales(strapi: Core.Strapi) {
  const localeService = strapi.plugin('i18n')?.service('locales');
  if (!localeService) return;

  const existing: Array<{ code: string }> = await localeService.find();
  const existingCodes = new Set(existing.map((l) => l.code));

  for (const locale of SUPPORTED_LOCALES) {
    if (!existingCodes.has(locale.code)) {
      await localeService.create({
        code: locale.code,
        name: locale.name,
        isDefault: !!locale.isDefault,
      });
      strapi.log.info(`[bootstrap] Created locale ${locale.code}`);
    }
  }
}

async function setRolePermissions(strapi: Core.Strapi, roleType: 'public' | 'authenticated') {
  const roleService = strapi.plugin('users-permissions').service('role');
  const roles: Array<{ id: number; type: string }> = await roleService.getRoles();
  const role = roles.find((r) => r.type === roleType);
  if (!role) return;

  const fullRole = await roleService.findOne(role.id);
  const permissions = fullRole.permissions || {};

  const ensureAction = (uid: string, action: string, enabled: boolean) => {
    const apiNs = uid.split('::')[1].split('.')[0];
    const controllerName = uid.split('.')[1];
    permissions[`api::${apiNs}`] = permissions[`api::${apiNs}`] || { controllers: {} };
    const controllers = permissions[`api::${apiNs}`].controllers;
    controllers[controllerName] = controllers[controllerName] || {};
    controllers[controllerName][action] = controllers[controllerName][action] || {};
    controllers[controllerName][action].enabled = enabled;
    controllers[controllerName][action].policy = '';
  };

  if (roleType === 'public') {
    for (const ct of PUBLIC_READ_CONTENT_TYPES) {
      for (const action of PUBLIC_FIND_ACTIONS) {
        ensureAction(ct, action, true);
      }
    }
  } else if (roleType === 'authenticated') {
    for (const ct of PUBLIC_READ_CONTENT_TYPES) {
      for (const action of PUBLIC_FIND_ACTIONS) {
        ensureAction(ct, action, true);
      }
    }
    for (const action of AUTHENTICATED_USER_STORY_ACTIONS) {
      ensureAction('api::user-story.user-story', action, true);
    }
  }

  await roleService.updateRole(role.id, { ...fullRole, permissions });
  strapi.log.info(`[bootstrap] Permissions synced for role: ${roleType}`);
}

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      await ensureLocales(strapi);
      await setRolePermissions(strapi, 'public');
      await setRolePermissions(strapi, 'authenticated');
      await syncUsersPermissionsAdvanced(strapi);
    } catch (err) {
      strapi.log.error('[bootstrap] failed: ' + (err as Error).message);
    }
  },
};
