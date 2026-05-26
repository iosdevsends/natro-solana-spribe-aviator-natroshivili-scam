import { extendEn } from './_helpers';

/**
 * Spanish overlay — machine-draft, pending native review.
 */
export const es = () =>
  extendEn({
    config: {
      siteTitle: 'El Expediente NATRO — Un estudio de caso sobre el precio de la reputación',
      tagline: 'Un caso documentado de fijación de precios sobre la reputación',
      mastheadMeta: 'Estudio de caso · Compilado a partir de fuentes primarias',
      kicker: 'Un caso documentado de fijación de precios sobre la reputación',
      headline: 'Un token vendido sobre un apellido. Una caída del 98 %. Un borrado.',
      deck: 'El 21 de mayo de 2026, un memecoin de Solana llamado $NATRO fue lanzado en Pump.fun por Alex Natroshvili — hijo de David Natroshvili, fundador y CEO de Spribe, el estudio detrás del producto global de apuestas Aviator. La propuesta era el apellido. Setenta y dos horas después de negar los reembolsos, el sitio web, el vídeo promocional y los enlaces en biografías habían sido borrados. El rastro en blockchain, el sitio archivado y los registros de chat — no.',
      dateline: [
        { label: 'FECHA', value: '26 de mayo de 2026' },
        { label: 'ASUNTO', value: '$NATRO · Lanzamiento de token en Solana' },
        { label: 'ESTADO', value: 'Registro público' },
        { label: 'JURISDICCIÓN', value: 'Transfronteriza (Mónaco / Georgia / Ucrania)' },
      ],
      byline: [
        { label: 'COMPILADO POR', value: 'Un holder temprano afectado' },
        { label: 'POSICIÓN', value: '220 000 000 NATRO (aprox. 22 % del suministro minorista)' },
        { label: 'MÉTODO', value: 'Solo fuentes primarias · todo enlazado y archivado' },
      ],
      uiStrings: {
        'nav.promise': '§ I · Promesa',
        'nav.reality': '§ II · Realidad',
        'nav.scrub': '§ III · Borrado',
        'nav.voices': '§ IV · Voces',
        'nav.people': '§ V · Personas',
        'nav.evidence': '§ VI · Fuentes',
        'nav.gallery': '§ VII · Galería',
        'nav.stories': 'Historias de lectores',
        'ui.what_promised': 'Lo que se prometió',
        'ui.what_delivered': 'Lo que se entregó',
        'ui.right_of_reply': 'Derecho de réplica',
        'ui.contact': 'Contacto',
        'ui.translation_pending': 'Traducción pendiente de revisión por hablante nativo',
      },
    },
  });
