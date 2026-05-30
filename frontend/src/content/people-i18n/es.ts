/**
 * Spanish (es) translation overlay for the /people profile pages.
 *
 * Index-aligned with the canonical English data in ../people.ts:
 *   profiles[slug].sections[i]      ↔ English profile.sections[i]
 *   profiles[slug].handleNotes[i]   ↔ English profile.handles[i].note
 *   profiles[slug].sourceLabels[i]  ↔ English profile.sources[i].label
 *
 * Verbatim source quotes (the presale Stories, "stfu", "Nothing to say",
 * stated loss figures) are kept in their original English inside the
 * translated prose — quotes are sacred. Markdown markers (**bold**, *italic*,
 * [label](url)) and all URLs are preserved exactly.
 */
import type { PeopleLocaleBundle } from '../people';

export const es: PeopleLocaleBundle = {
  profiles: {
    'alex-natroshvili': {
      role: 'Parte nombrada · Fundador',
      tagline:
        'Fundador de la memecoin de Solana $NATRO (lanzada el 21 de mayo de 2026); hijo del CEO de Spribe, David Natroshvili. Autoidentificado por el marketing del lanzamiento.',
      metaTitle:
        'Alex Natroshvili — fundador del token de Solana $NATRO | The NATRO File',
      metaDescription:
        '¿Quién es Alex Natroshvili? Fundador de la memecoin de Solana $NATRO (21 de mayo de 2026), hijo del CEO de Spribe, David Natroshvili. Instagram verificado @natroalex, Telegram @natroalex1. Un expediente documentado.',
      handleNotes: ['verificado · 54,1K seguidores', 'verificado'],
      sections: [
        {
          heading: 'Quién es',
          body: `Alex Natroshvili fue identificado públicamente como el fundador por el propio sitio web del proyecto $NATRO — no era anónimo. La sección sobre el fundador abría con la línea: *«Most coin founders are anonymous. Alex isn't. His name is on the project, his face is on TikTok and Instagram, and his family is well-known globally.»* Su perfil personal se describía allí como *«Boxer / Car Collector / Watch Collector.»*

Es hijo de **David Natroshvili**, fundador y CEO de Spribe — el estudio de iGaming detrás del producto global de apuestas de género crash Aviator. Sus cuentas públicas verificables en el momento del lanzamiento eran Instagram [@natroalex](https://instagram.com/natroalex) (verificado, 54,1K seguidores) y Telegram [@natroalex1](https://t.me/natroalex1) (verificado).`,
        },
        {
          heading: 'Papel en el lanzamiento de $NATRO',
          body: `$NATRO se promocionó como una «moneda de networking» con acceso por niveles, y la propuesta se apoyaba explícitamente en el apellido Natroshvili y en la asociación con Spribe / Aviator como señal central de confianza. El propio FAQ del sitio web abordaba directamente la cuestión del rug-pull, afirmando: *«The reputation hit lasts forever; the cash from a rug doesn't.»*

Se prometió una escalera de acceso de cuatro niveles — Foyer (1M), Floor (5M), Lounge (10M) y Salon · Inner Circle (20M), cuyo nivel superior se describía como «names you'd recognize, real money behind them, people who can actually open doors». Tras la apertura de los chats, las salas existían a una fracción de la escala prometida: Foyer con 13 miembros, Floor con 10, Lounge con 2 holders más 3 administradores; el Salon nunca llegó a crearse.`,
        },
        {
          heading: 'Tras el colapso',
          body: `En aproximadamente 48 horas el precio cayó cerca del 98 %. Cuando los primeros holders afectados solicitaron reembolsos, el equipo se negó; la respuesta del administrador del equipo fue *«Nothing to say.»* El 25 de mayo de 2026 a las 10:11 UTC, en respuesta a una propuesta estructurada de «reembolso o publicación» enviada a su cuenta de Telegram verificada, Alex Natroshvili respondió con dos letras: *«stfu.»* Ese mensaje se conserva en el conjunto de pruebas del expediente.

En esa misma ventana, el sitio web natrocoin.net se desconectó, el enlace de NATRO se eliminó de su biografía de Instagram verificada y el vídeo promocional pagado del KOL @jrcryptex (114K seguidores) fue borrado. El registro de la blockchain, el archivo del sitio web y los logs de los chats, no.`,
        },
        {
          heading: 'Contacto directo, y luego un bloqueo',
          body: `Cuarenta y dos minutos después de que el 25 de mayo de 2026 se entregara una carta formal a las direcciones legales y corporativas de Spribe, Alex Natroshvili inició contacto directo con un holder afectado a través de un DM de Instagram. A lo largo de aproximadamente las dos horas siguientes el tono cambió repetidamente — de la invitación, al encuadre de co-víctima, a la instrucción, al desdén — antes de que el holder fuera bloqueado.

Textualmente de esa conversación: *«Delete this comments your just making a fool out of yourself.»* y *«Spribe legal is not responding to you 😅 / Who do u think u are.»* La secuencia, y el bloqueo que la cerró, se conservan en el conjunto de pruebas del expediente.`,
        },
        {
          heading: 'En palabras de los holders',
          body: `Dentro de la propia sala de Telegram del proyecto, «NATRO Foyer» — creada con 13 miembros, frente a los «few thousand» prometidos — los holders afectados documentaron sus pérdidas en tiempo real y llegaron a su propio veredicto. Reproducido textualmente de los logs del chat, capturados antes de que los mensajes fueran eliminados: *«I lost 2K», «I lost 6K», «It's over»* y, sin rodeos, *«Natro scam»* y *«Fucking scam.»*

Estas son las palabras de los holders afectados, no de este expediente. Se registran aquí porque la sala en la que se escribieron era precisamente el nivel de acceso con el que se vendió el token.`,
        },
        {
          heading: 'Sobre las pérdidas que él declaró',
          body: `En mensajes directos, Alex Natroshvili afirmó que él mismo había perdido dinero en el lanzamiento — *«I lost 38k»* y, por separado, *«I swear to god i lost 30k plus.»* Estas cifras se registran aquí como sus afirmaciones, no como hechos establecidos: la suma declarada varía dentro de la misma cadena de mensajes, y la propia tokenómica del proyecto describía la asignación del fundador de 30M como públicamente comprometida a no moverse nunca. Una pérdida «de papel» no realizada sobre una asignación que no se mueve no equivale a una pérdida de dinero realizada por los holders minoristas.

Una auditoría on-chain independiente está en curso. La cartera del creador muestra actividad continua de swaps y liquidez posterior al lanzamiento; si eso corresponde a la mencionada cartera del fundador de 30M o a una asignación separada del equipo requiere más análisis forense on-chain y no se afirma aquí.`,
        },
        {
          heading: 'Derecho de réplica',
          body: `Se invita a Alex Natroshvili a responder. Las correcciones fácticas documentadas se publicarán junto con el registro. Los datos de contacto están en la [página de prensa](/press).`,
        },
      ],
      sourceLabels: [
        'Archivo Wayback de natrocoin.net (antes de la retirada, sección sobre el fundador)',
        'DMs de Telegram (@natroalex1, verificado) y logs de NATRO Foyer — Prueba 20 («stfu») y el conjunto «Voces», en la galería del expediente',
        'Solscan — contrato del token $NATRO',
        'Kutztown University Foundation — contexto sobre la familia Natroshvili',
      ],
    },
    'david-natroshvili': {
      role: 'Parte nombrada · CEO de Spribe',
      tagline:
        'Fundador y CEO de Spribe; padre del fundador de $NATRO, Alex Natroshvili. Desde su Instagram verificado co-promocionó personalmente el preventa de $NATRO y solicitó inversión antes del lanzamiento.',
      metaTitle: 'David Natroshvili — fundador y CEO de Spribe | The NATRO File',
      metaDescription:
        '¿Quién es David Natroshvili? Fundador y CEO de Spribe y padre del fundador de $NATRO, Alex Natroshvili. Desde su Instagram verificado promocionó personalmente el preventa de $NATRO («with me & @natroalex», mínimo 1.5k) antes del lanzamiento del 21 de mayo de 2026. Un expediente documentado.',
      handleNotes: [undefined, 'verificado', undefined],
      sections: [
        {
          heading: 'Quién es',
          body: `David Natroshvili es el fundador y CEO de **Spribe**, el estudio de iGaming detrás del producto global de apuestas de género crash Aviator. Tiene un MBA de la Kutztown University of Pennsylvania (promoción de 2001); la oficina principal del Pennsylvania Small Business Development Center en Kutztown [lleva su nombre](https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/) tras una donación filantrópica en la primavera de 2025. Es el padre de [Alex Natroshvili](/people/alex-natroshvili), fundador de la memecoin de Solana $NATRO.`,
        },
        {
          heading: 'Él promocionó personalmente el preventa',
          body: `David Natroshvili no fue invocado únicamente como telón de fondo reputacional. Desde su propia cuenta de Instagram **verificada** (@davidnatro1), en las horas previas al lanzamiento, promocionó personalmente el preventa de $NATRO en primera persona y solicitó inversión. Las Stories se conservan en el conjunto de pruebas del expediente:

*«If you want to get involved in the crypto project presale **with me & @natroalex** — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k.»* (Prueba 22)

*«We're opening private access to **our** crypto project presale **with me & @natroalex** — Telegram by DM · 1.5k min entry · Limited access available.»* (Prueba 24)

*«I have many celebs on the line to post about natro this will be crazy🔥»* (Prueba 21)

También repostó en sus Stories el vídeo promocional pagado del KOL @jrcryptex (114K seguidores) — *«It's called NATRO»* — (Prueba 2). La solicitud del preventa dirigía a los posibles compradores a un mínimo de $1 500 y al Telegram de Alex Natroshvili (@natroalex1).`,
        },
        {
          heading: 'Documentado frente a pendiente',
          body: `**Documentado:** que David Natroshvili promocionó personal y públicamente el preventa de $NATRO y solicitó inversión desde su cuenta verificada, en primera persona («with me», «our crypto project»), queda establecido por sus propias Stories, capturadas antes de que expiraran.

**Pendiente de análisis forense:** adónde fueron a parar los fondos del preventa, y si David Natroshvili controló alguna cartera del proyecto o recibió fondos de ella, no se afirma aquí. Establecerlo requiere un trabajo on-chain que está en curso. El expediente separa lo que el registro público ya muestra de lo que todavía requiere prueba.`,
        },
        {
          heading: 'Nota sobre el alcance',
          body: `Este expediente se refiere al lanzamiento del token $NATRO de mayo de 2026. No formula afirmaciones sobre los productos de apuestas con licencia de Spribe ni sobre su negocio más amplio, que tienen su propio estatus legal en múltiples jurisdicciones y quedan fuera del alcance de este registro.`,
        },
        {
          heading: 'Derecho de réplica',
          body: `Se invita a David Natroshvili y a Spribe a responder. El 25 de mayo de 2026 se envió un aviso formal a las direcciones legales y corporativas publicadas de Spribe. Las correcciones fácticas documentadas se publicarán junto con el registro. Los datos de contacto están en la [página de prensa](/press).`,
        },
      ],
      sourceLabels: [
        'Instagram Stories previas al lanzamiento, @davidnatro1 (verificado) — Pruebas 21, 22, 24 (solicitud del preventa) y Prueba 2 (repost del promo), en la galería del expediente',
        'Archivo Wayback de natrocoin.net (antes de la retirada, sección sobre el fundador)',
        'Kutztown University Foundation — oficina del SBDC con su nombre',
        'Spribe — página de la empresa',
      ],
    },
  },
  chrome: {
    namedParties: 'Partes nombradas',
    indexKicker: '§ Partes nombradas',
    indexH1: 'Personas nombradas en este expediente',
    indexStandfirst:
      'Cada una fue autoidentificada por el marketing del lanzamiento de $NATRO — no revelada por este expediente. Cada perfil es fáctico, está documentado con fuentes y conlleva un derecho de réplica permanente.',
    indexMetaTitle:
      'Partes nombradas — Alex y David Natroshvili | The NATRO File',
    indexMetaDescription:
      'Las personas nombradas en el expediente de $NATRO, cada una autoidentificada por el marketing del lanzamiento: Alex Natroshvili (fundador) y David Natroshvili (CEO de Spribe). Perfiles individuales con enlaces a las fuentes.',
    readFullProfile: 'Leer el perfil completo →',
    storiesHeading: 'Capturas · fuentes primarias',
    storiesNote:
      'Capturadas antes de cada eliminación, retirada, expiración o bloqueo. Toca cualquier captura para abrir la prueba a resolución completa.',
    sources: 'Fuentes',
    whereToNext: 'Adónde ir después',
    davidAwardTitle: 'N.º 1 más influyente en iGaming →',
    davidAwardSub: 'Premio «Game Changers 2026» — frente al registro de $NATRO',
    fullFile: 'Expediente completo →',
    fullFileSub: 'Promesa · Realidad · Limpieza · Voces · Personas · Fuentes',
    onchain: 'Verificación on-chain →',
    onchainSub: 'Estado actual del token, actividad de la cartera del creador',
    press: 'Kit de prensa y derecho de réplica →',
    pressSub: 'Lista de verificación de hechos, contactos, aviso formal',
  },
};
