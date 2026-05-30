import type { PressContent } from '../press-release';

/**
 * Coverage source/screenshot constants are language-neutral; re-declared inline
 * here to keep the locale file self-contained (mirrors the EN coverage entry).
 */
const COVERAGE_IGAMING_INSIDES = {
  source: 'iGaming Insides',
  url: 'https://t.me/igaming_inside',
  image: '/exhibits/ex-coverage-igaming-insides-linkedin.png',
  imageWidth: 1156,
  imageHeight: 3108,
};

export const es: PressContent = {
  forImmediateRelease: 'Para publicación inmediata',
  dateline: '28 de mayo de 2026 · Kyiv / Mónaco',
  headline:
    'Una memecoin de Solana, un apellido, un desplome del 98%: un expediente documentado sobre $NATRO',
  dek: 'El fundador y CEO de Spribe, David Natroshvili, solicitó personalmente inversiones de preventa en la memecoin de Solana $NATRO, lanzada el 21 de mayo de 2026 por su hijo de 15 años, Alex Natroshvili. El token se desplomó un 98% en 48 horas; se rechazaron los reembolsos; el patrón de eliminación de pruebas por parte del equipo está documentado en fuentes primarias.',
  lede: 'Un expediente documentado, publicado hoy en [natro.meme](https://natro.meme), presenta pruebas de fuente primaria sobre el lanzamiento y el desplome del 98% de $NATRO, una memecoin de Solana comercializada sobre la base del apellido de la familia Natroshvili y su asociación con el producto de apuestas Spribe / Aviator.',
  keyFactsHeading: 'Hechos clave (todos verificados con fuentes primarias)',
  keyFacts: [
    'El 21 de mayo de 2026, a las 20:11 UTC, el token de Solana $NATRO se lanzó en Pump.fun. Dirección del contrato: `9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF`.',
    'En las 24 horas previas al lanzamiento, David Natroshvili — fundador y CEO de Spribe (el estudio de iGaming detrás del producto de apuestas de estilo crash global Aviator) — publicó una secuencia de Instagram Stories desde su cuenta verificada (@davidnatro1) solicitando personalmente inversión de preventa de pago, presentándose a sí mismo como coparticipante (*«with me & @natroalex»*), fijando un umbral mínimo de entrada de $1.500 y dirigiendo el contacto al Telegram personal de su hijo menor de edad (@natroalex1). Cinco Stories conservadas antes de su expiración.',
    'El precio del token se desplomó aproximadamente un 98% en 48 horas. La capitalización de mercado cayó desde los más de $200K declarados en el lanzamiento hasta aproximadamente $36 (según la API de Pump.fun en el momento de la presentación).',
    'Las solicitudes de reembolso de los primeros tenedores afectados fueron rechazadas. La respuesta del administrador del equipo a una propuesta estructurada: *«Nothing to say.»* La respuesta personal del fundador en Telegram al ser contactado directamente: *«stfu.»*',
    'En las 72 horas posteriores al rechazo de los reembolsos: natrocoin.net fue puesto fuera de línea (Wayback Machine conservó la captura completa previa al cierre), el enlace de NATRO fue eliminado de la biografía de Instagram del fundador, y el video promocional de pago del KOL @jrcryptex (114K seguidores) fue borrado de Instagram.',
    'Una carta formal fue entregada a los canales legales de Spribe (`info@spribe.co`, `legal@spribe.co`, y dos direcciones nominales de ejecutivos) el 25 de mayo de 2026 a las 12:24 UTC. Hasta el momento de la publicación: sin respuesta pública.',
  ],
  caseFileHeading: 'Expediente del caso',
  caseFileBody:
    'El expediente completo — 25 pruebas documentadas (registros de chats de Telegram, rastro on-chain, capturas de antes/después, registros de eliminación de KOL, el sitio web completo conservado por Wayback), la sección §V Partes nombradas, el índice §VI Fuentes primarias, las §VIII Preguntas frecuentes — está en [natro.meme](https://natro.meme). Disponible en 8 idiomas: EN · RU · UK · KA · FR · DE · ES · AR.\n\nEl expediente está estructurado como un documento de investigación, no como un agravio personal. El marco editorial sigue el reportaje factual en tercera persona; no se extraen conclusiones de estafa / fraude con la voz del expediente — al lector se le presentan fuentes primarias y extrae las suyas propias.',
  ageNoteHeading: 'Nota sobre la edad del fundador',
  ageNoteBody:
    'Alex Natroshvili tenía 15 años en el momento del lanzamiento (fecha de nacimiento: 14 de septiembre de 2010; corroborado mediante el [perfil de boxeo amateur de Tapology](https://tapology.com/fightcenter/fighters/540307-alex-natroshvili)). David Natroshvili dirigió el contacto de la preventa al Telegram personal de su hijo menor de edad desde su propia cuenta verificada de CEO de Spribe.',
  rorHeading: 'Derecho de réplica',
  rorBody:
    'El expediente del caso mantiene un derecho de réplica abierto. Cualquier parte nombrada en el documento puede presentar una respuesta textual para ser anexada al registro. Ninguna se ha recibido hasta el momento de la publicación.',
  contactHeading: 'Contacto',
  contactBody:
    '**Compilador:** [@btc3050](https://t.me/btc3050) (Telegram)\n\n**Expediente:** [natro.meme](https://natro.meme)\n\n**Archivo de Wayback (la fuente única más sólida):** [web.archive.org/web/20260521213245/https://natrocoin.net/](https://web.archive.org/web/20260521213245/https://natrocoin.net/)',
  coverageHeading: 'En la prensa',
  coverageIntro:
    'Cobertura externa a medida que el caso circula en la industria. Reproducida con atribución — las caracterizaciones son de los medios, no del expediente. Esta sección irá creciendo.',
  coverage: [
    {
      ...COVERAGE_IGAMING_INSIDES,
      meta: 'Publicación especializada en iGaming · LinkedIn · 30 de mayo de 2026',
      title: '«El fundador de Spribe, David Natroshvili, acusado de estafa cripto»',
      body:
        'Un editor del medio especializado en iGaming **iGaming Insides** publicó en LinkedIn un resumen del caso en ruso. Relata el argumento basado en el apellido (*«most coin founders are anonymous, Alex isn’t»*), las Stories de preventa previas al lanzamiento de David Natroshvili grabadas sobre un Bentley y un Ferrari con un mínimo de $1.500 y una línea directa con su hijo, las salas de niveles casi vacías (Foyer 13, Floor 10, Lounge 2 tenedores + 3 administradores, Inner Circle nunca creada), el desplome de ~98%, los rechazos *«Nothing to say»* y *«stfu»*, y la eliminación de pruebas en 72 horas — señalando que la Wayback Machine conservó el sitio. La publicación cierra: *«Un negocio muy extraño, por supuesto.»*',
      urlLabel: 'iGaming Insides — canal de Telegram',
      imageAlt: 'Publicación de iGaming Insides en LinkedIn sobre el caso $NATRO',
    },
  ],
  downloadsHeading: 'Descargas y enlaces rápidos',
  downloadsLabels: {
    txt: 'Comunicado de prensa (texto plano)',
    factSheet: 'Ficha informativa de una página',
    factSheetSub: 'Cifras escaneables + cronología (lista para imprimir)',
    waybackArchive: 'Archivo de Wayback — natrocoin.net (previo al cierre)',
    fullFile: 'Expediente completo del caso (interactivo)',
    exhibitArchive: 'Archivo de pruebas — índice de 25 documentos de fuente primaria',
  },
};
