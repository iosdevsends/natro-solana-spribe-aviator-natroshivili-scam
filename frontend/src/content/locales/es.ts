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
      archiveCallout: {
        kicker: 'En sus propias palabras',
        headline: 'Vea lo que se vendió.',
        body: 'Antes de que el sitio fuera retirado, Wayback Machine capturó la versión archivada completa de **natrocoin.net** — el pitch principal, la escalera de cuatro niveles, la sección del fundador que nombraba a la familia, la página de tokenomics y todo el FAQ (incluyendo la respuesta a *«¿Qué les impide hacer un rug?»*).\n\nEsta es la fuente más sólida del expediente. El texto de marketing bajo el titular de esta página está reconstruido a partir de ella.',
        linkText: 'Abrir el archivo de natrocoin.net →',
        linkUrl: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/',
        urlLabel: 'Wayback Machine · capturado el 21 de mayo de 2026, 21:32 UTC',
      },
      contactBlock: 'Para consultas de periodistas, abogados, reguladores o holders afectados con información corroborante: incluya su identificación y la naturaleza de la consulta.\n\nPara holders afectados que deseen enviar su propio relato documentado: prepárese para verificar su posición on-chain.\n\n**Telegram (compilador):** [@btc3050](https://t.me/btc3050)',
      compilerAddendum: 'Adenda personal presentada por **@btc3050**, 27 de mayo de 2026.\n\nEl compilador tenía a David Natroshvili en alta estima públicamente y consideraba la historia de Spribe / Aviator como un logro empresarial serio construido a lo largo de los años. Esta opinión cambió cuando @davidnatro1 amplificó el lanzamiento desde su propia cuenta verificada y luego permaneció en silencio durante la negativa de reembolso a los holders.\n\nEsta adenda está deliberadamente separada del archivo principal — el archivo principal sigue siendo un registro en tercera persona compilado a partir de fuentes primarias. Este párrafo es la propia voz del compilador.',
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
