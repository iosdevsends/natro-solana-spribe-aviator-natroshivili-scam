/**
 * French (fr) translation overlay for the /people profile pages.
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

export const fr: PeopleLocaleBundle = {
  profiles: {
    'alex-natroshvili': {
      role: 'Partie nommée · Fondateur',
      tagline:
        'Fondateur du mémecoin Solana $NATRO (lancé le 21 mai 2026) ; fils du CEO de Spribe, David Natroshvili. Identifié par le marketing du lancement lui-même.',
      metaTitle:
        'Alex Natroshvili — fondateur du token Solana $NATRO | The NATRO File',
      metaDescription:
        'Qui est Alex Natroshvili ? Fondateur du mémecoin Solana $NATRO (21 mai 2026), fils du CEO de Spribe, David Natroshvili. Instagram vérifié @natroalex, Telegram @natroalex1. Un dossier documenté.',
      handleNotes: ['vérifié · 54,1K abonnés', 'vérifié'],
      sections: [
        {
          heading: 'Qui il est',
          body: `Alex Natroshvili a été publiquement identifié comme le fondateur par le site même du projet $NATRO — il n'était pas anonyme. La section consacrée au fondateur s'ouvrait sur cette phrase : *« Most coin founders are anonymous. Alex isn't. His name is on the project, his face is on TikTok and Instagram, and his family is well-known globally. »* Son profil personnel y était décrit comme *« Boxer / Car Collector / Watch Collector. »*

Il est le fils de **David Natroshvili**, fondateur et CEO de Spribe — le studio d'iGaming derrière le produit de jeu d'argent de type crash mondial Aviator. Ses comptes publics vérifiables au moment du lancement étaient Instagram [@natroalex](https://instagram.com/natroalex) (vérifié, 54,1K abonnés) et Telegram [@natroalex1](https://t.me/natroalex1) (vérifié).`,
        },
        {
          heading: 'Rôle dans le lancement de $NATRO',
          body: `$NATRO était commercialisé comme une « monnaie de networking » à accès par paliers, et l'argumentaire s'appuyait explicitement sur le nom de famille Natroshvili et sur l'association Spribe / Aviator comme signal de confiance central. La FAQ du site répondait directement à la question du rug-pull, en déclarant : *« The reputation hit lasts forever; the cash from a rug doesn't. »*

Une échelle d'accès à quatre paliers était promise — Foyer (1M), Floor (5M), Lounge (10M) et Salon · Inner Circle (20M), le palier supérieur étant décrit comme « names you'd recognize, real money behind them, people who can actually open doors ». Après l'ouverture des chats, les salons existaient à une fraction de l'ampleur promise : Foyer avec 13 membres, Floor avec 10, Lounge avec 2 détenteurs plus 3 administrateurs ; le Salon n'a jamais été créé.`,
        },
        {
          heading: "Après l'effondrement",
          body: `En l'espace d'environ 48 heures, le prix a chuté d'environ 98 %. Lorsque les premiers détenteurs lésés ont demandé un remboursement, l'équipe a refusé ; la réponse de l'administrateur de l'équipe a été *« Nothing to say. »* Le 25 mai 2026 à 10:11 UTC, en réponse à une proposition structurée de « remboursement ou publication » envoyée à son compte Telegram vérifié, Alex Natroshvili a répondu par deux lettres : *« stfu. »* Ce message est conservé dans l'ensemble des pièces du dossier.

Dans la même fenêtre, le site natrocoin.net a été mis hors ligne, le lien NATRO a été retiré de sa biographie Instagram vérifiée, et la vidéo promotionnelle payante du KOL @jrcryptex (114K abonnés) a été supprimée. L'enregistrement blockchain, le site archivé et les journaux de chat, eux, ne l'ont pas été.`,
        },
        {
          heading: 'À propos des pertes qu\'il a déclarées',
          body: `Dans des messages privés, Alex Natroshvili a affirmé avoir lui-même perdu de l'argent sur le lancement — *« I lost 38k »* et, séparément, *« I swear to god i lost 30k plus. »* Ces chiffres sont consignés ici comme ses affirmations, non comme des faits établis : le montant déclaré change au sein d'une même conversation, et la tokenomique du projet elle-même décrivait l'allocation du fondateur de 30M comme publiquement engagée à ne jamais bouger. Une perte « sur papier » non réalisée sur une allocation qui ne bouge pas n'est pas équivalente à une perte en argent réalisée par les détenteurs particuliers.

Un audit on-chain distinct est en cours. Le portefeuille du créateur montre une activité de swap et de liquidité continue après le lancement ; savoir si cela correspond au « founder bag » nommé de 30M ou à une allocation d'équipe distincte nécessite une analyse on-chain plus poussée et n'est pas affirmé ici.`,
        },
        {
          heading: 'Droit de réponse',
          body: `Alex Natroshvili est invité à répondre. Les corrections factuelles documentées seront publiées aux côtés du dossier. Les coordonnées figurent sur la [page presse](/press).`,
        },
      ],
      sourceLabels: [
        'Archive Wayback de natrocoin.net (avant le retrait, section consacrée au fondateur)',
        'Solscan — contrat du token $NATRO',
        'Kutztown University Foundation — contexte sur la famille Natroshvili',
      ],
    },
    'david-natroshvili': {
      role: 'Partie nommée · CEO de Spribe',
      tagline:
        'Fondateur et CEO de Spribe ; père du fondateur de $NATRO, Alex Natroshvili. Depuis son propre Instagram vérifié, il a personnellement co-promu le présale de $NATRO et sollicité des investissements avant le lancement.',
      metaTitle: 'David Natroshvili — fondateur et CEO de Spribe | The NATRO File',
      metaDescription:
        'Qui est David Natroshvili ? Fondateur et CEO de Spribe et père du fondateur de $NATRO, Alex Natroshvili. Depuis son Instagram vérifié, il a personnellement promu le présale de $NATRO (« with me & @natroalex », minimum 1.5k) avant le lancement du 21 mai 2026. Un dossier documenté.',
      handleNotes: [undefined, 'vérifié', undefined],
      sections: [
        {
          heading: 'Qui il est',
          body: `David Natroshvili est le fondateur et CEO de **Spribe**, le studio d'iGaming derrière le produit de jeu d'argent de type crash mondial Aviator. Il est titulaire d'un MBA de la Kutztown University of Pennsylvania (promotion 2001) ; le bureau principal du Pennsylvania Small Business Development Center à Kutztown [porte son nom](https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/) à la suite d'un don philanthropique au printemps 2025. Il est le père d'[Alex Natroshvili](/people/alex-natroshvili), fondateur du mémecoin Solana $NATRO.`,
        },
        {
          heading: 'Il a personnellement promu le présale',
          body: `David Natroshvili n'a pas seulement été invoqué comme toile de fond réputationnelle. Depuis son propre compte Instagram **vérifié** (@davidnatro1), dans les heures précédant le lancement, il a personnellement promu le présale de $NATRO à la première personne et sollicité des investissements. Les Stories sont conservées dans l'ensemble des pièces du dossier :

*« If you want to get involved in the crypto project presale **with me & @natroalex** — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k. »* (Pièce 22)

*« We're opening private access to **our** crypto project presale **with me & @natroalex** — Telegram by DM · 1.5k min entry · Limited access available. »* (Pièce 24)

*« I have many celebs on the line to post about natro this will be crazy🔥 »* (Pièce 21)

Il a également repartagé dans ses Stories la vidéo promotionnelle payante du KOL @jrcryptex (114K abonnés) — *« It's called NATRO »* — (Pièce 2). La sollicitation du présale orientait les acheteurs potentiels vers un minimum de $1 500 et vers le Telegram d'Alex Natroshvili (@natroalex1).`,
        },
        {
          heading: 'Documenté contre en attente de vérification',
          body: `**Documenté :** le fait que David Natroshvili a personnellement et publiquement promu le présale de $NATRO et sollicité des investissements depuis son compte vérifié, à la première personne (« with me », « our crypto project »), est établi par ses propres Stories, captées avant leur expiration.

**En attente d'analyse forensique :** où sont allés les fonds du présale, et si David Natroshvili a contrôlé un quelconque portefeuille du projet ou en a reçu des fonds, n'est pas affirmé ici. L'établir nécessite un travail on-chain qui est en cours. Le dossier distingue ce que l'enregistrement public montre déjà de ce qui requiert encore des preuves.`,
        },
        {
          heading: 'Remarque sur le périmètre',
          body: `Ce dossier concerne le lancement du token $NATRO de mai 2026. Il ne formule aucune affirmation au sujet des produits de jeu d'argent licenciés de Spribe ni de son activité plus large, qui ont leur propre statut juridique dans plusieurs juridictions et se situent en dehors du périmètre de ce dossier.`,
        },
        {
          heading: 'Droit de réponse',
          body: `David Natroshvili et Spribe sont invités à répondre. Une notification officielle a été envoyée aux adresses juridiques et corporatives publiées de Spribe le 25 mai 2026. Les corrections factuelles documentées seront publiées aux côtés du dossier. Les coordonnées figurent sur la [page presse](/press).`,
        },
      ],
      sourceLabels: [
        'Stories Instagram d\'avant-lancement, @davidnatro1 (vérifié) — Pièces 21, 22, 24 (sollicitation du présale) et Pièce 2 (repartage du promo), dans la galerie du dossier',
        'Archive Wayback de natrocoin.net (avant le retrait, section consacrée au fondateur)',
        'Kutztown University Foundation — bureau du SBDC portant son nom',
        'Spribe — page de la société',
      ],
    },
  },
  chrome: {
    namedParties: 'Parties nommées',
    indexKicker: '§ Parties nommées',
    indexH1: 'Personnes nommées dans ce dossier',
    indexStandfirst:
      'Chacune a été identifiée par le marketing du lancement de $NATRO lui-même — et non révélée par ce dossier. Chaque profil est factuel, sourcé et assorti d\'un droit de réponse permanent.',
    indexMetaTitle:
      'Parties nommées — Alex et David Natroshvili | The NATRO File',
    indexMetaDescription:
      'Les personnes nommées dans le dossier $NATRO, chacune identifiée par le marketing du lancement lui-même : Alex Natroshvili (fondateur) et David Natroshvili (CEO de Spribe). Profils distincts avec sources.',
    readFullProfile: 'Lire le profil complet →',
    storiesHeading: 'Stories · sources primaires',
    storiesNote:
      'Captées depuis son Instagram vérifié avant l\'expiration des Stories. Cliquez sur n\'importe quelle capture pour ouvrir la pièce en pleine résolution.',
    sources: 'Sources',
    whereToNext: 'Où aller ensuite',
    davidAwardTitle: 'N°1 des plus influents de l\'iGaming →',
    davidAwardSub: 'Prix « Game Changers 2026 » — sur fond de dossier $NATRO',
    fullFile: 'Dossier complet →',
    fullFileSub: 'Promesse · Réalité · Effacement · Voix · Personnes · Sources',
    onchain: 'Vérification on-chain →',
    onchainSub: 'État actuel du token, activité du portefeuille du créateur',
    press: 'Kit presse et droit de réponse →',
    pressSub: 'Liste de fact-checking, contacts, notification officielle',
  },
};
