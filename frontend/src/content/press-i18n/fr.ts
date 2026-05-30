/**
 * French (fr) translation of the press-release content for the /press page.
 *
 * Index-aligned with the canonical English data in ../press-release.ts
 * (`pressContent.en`). The coverage item reuses the shared, language-neutral
 * constants (source, url, image, dimensions) inline and translates only the
 * editorial fields (meta, title, body, urlLabel, imageAlt).
 *
 * Verbatim English source quotes are kept in their original English inside
 * French guillemets — quotes are sacred and are never translated:
 *   « Nothing to say. », « stfu. », « with me & @natroalex »,
 *   « most coin founders are anonymous, Alex isn't ».
 *
 * Markdown markers (**bold**, *italic*, [label](url)), URLs, the contract
 * address and emails in `code`, @handles, $NATRO, numbers and dates are
 * preserved exactly. The register is investigative-journalism, third-person,
 * factual and restrained: no scam / fraud conclusion is added beyond where the
 * source already carries it (the file's own note that it draws no such
 * conclusion; the outlet's reported headline).
 */
import type { PressContent } from '../press-release';

export const fr: PressContent = {
  forImmediateRelease: 'Pour diffusion immédiate',
  dateline: '28 mai 2026 · Kyiv / Monaco',
  headline:
    'Un mémecoin Solana, un nom de famille, un effondrement de 98 % : un dossier documenté sur $NATRO',
  dek: 'Le fondateur et CEO de Spribe, David Natroshvili, a personnellement sollicité des investissements en prévente dans le mémecoin Solana $NATRO, lancé le 21 mai 2026 par son fils Alex Natroshvili, âgé de 15 ans. Le token s\'est effondré de 98 % en 48 heures ; les remboursements ont été refusés ; un schéma de suppression de preuves par l\'équipe est documenté dans des sources primaires.',
  lede: 'Un dossier documenté publié aujourd\'hui sur [natro.meme](https://natro.meme) présente des preuves de source primaire sur le lancement et l\'effondrement de 98 % de $NATRO, un mémecoin Solana commercialisé sur la base du nom de famille Natroshvili et de l\'association avec le produit de jeu d\'argent Spribe / Aviator.',
  keyFactsHeading: 'Faits clés (tous vérifiés par sources primaires)',
  keyFacts: [
    'Le 21 mai 2026, à 20:11 UTC, le token Solana $NATRO a été lancé sur Pump.fun. Adresse du contrat : `9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF`.',
    'Dans les 24 heures précédant le lancement, David Natroshvili — fondateur et CEO de Spribe (le studio iGaming derrière le produit de jeu d\'argent crash-style mondial Aviator) — a publié une série d\'Instagram Stories depuis son compte vérifié (@davidnatro1), sollicitant personnellement un investissement payant en prévente, se désignant comme co-participant (*« with me & @natroalex »*), fixant un seuil d\'entrée minimum de 1 500 $ et orientant la prise de contact vers le Telegram personnel de son fils mineur (@natroalex1). Cinq Stories conservées avant expiration.',
    'Le prix du token s\'est effondré d\'environ 98 % en 48 heures. La capitalisation boursière est passée d\'un montant annoncé de plus de 200K $ au lancement à environ 36 $ (selon l\'API Pump.fun au moment du dépôt).',
    'Les demandes de remboursement des premiers détenteurs affectés ont été refusées. La réponse de l\'administrateur de l\'équipe à une proposition structurée : *« Nothing to say. »* La réponse personnelle du fondateur sur Telegram lorsqu\'il a été contacté directement : *« stfu. »*',
    'Dans les 72 heures suivant le refus de remboursement : natrocoin.net a été mis hors ligne (la Wayback Machine a conservé l\'instantané complet d\'avant le retrait), le lien NATRO a été retiré de la bio Instagram du fondateur, et la vidéo promotionnelle payante du KOL @jrcryptex (114K abonnés) a été supprimée d\'Instagram.',
    'Une lettre formelle a été adressée aux canaux juridiques de Spribe (`info@spribe.co`, `legal@spribe.co`, ainsi que deux adresses nominatives de dirigeants) le 25 mai 2026 à 12:24 UTC. À la date de la diffusion : aucune réponse publique.',
  ],
  caseFileHeading: 'Dossier',
  caseFileBody:
    'Le dossier complet — 25 pièces documentées (journaux de chats Telegram, traçabilité on-chain, captures d\'écran avant/après, relevés de suppression par le KOL, le site web complet conservé par Wayback), section §V Parties nommées, index §VI Sources primaires, §VIII FAQ — est disponible sur [natro.meme](https://natro.meme). Disponible en 8 langues : EN · RU · UK · KA · FR · DE · ES · AR.\n\nLe dossier est structuré comme un document d\'enquête, et non comme une plainte personnelle. Le cadre éditorial suit un compte rendu factuel à la troisième personne ; aucune conclusion de scam / fraude n\'est tirée dans la voix du dossier — les lecteurs se voient présenter des sources primaires et tirent leurs propres conclusions.',
  ageNoteHeading: 'Note sur l\'âge du fondateur',
  ageNoteBody:
    'Alex Natroshvili avait 15 ans au moment du lancement (né le 14 sept. 2010 ; corroboré par le [profil de boxe amateur Tapology](https://tapology.com/fightcenter/fighters/540307-alex-natroshvili)). David Natroshvili a orienté la prise de contact pour la prévente vers le Telegram personnel de son fils mineur, depuis son propre compte vérifié de CEO de Spribe.',
  rorHeading: 'Droit de réponse',
  rorBody:
    'Le dossier maintient un droit de réponse ouvert. Toute partie nommée dans le document peut soumettre une réponse mot pour mot, qui sera annexée au dossier. Aucune n\'a été reçue à la date de la diffusion.',
  contactHeading: 'Contact',
  contactBody:
    '**Compilateur :** [@btc3050](https://t.me/btc3050) (Telegram)\n\n**Dossier :** [natro.meme](https://natro.meme)\n\n**Archive Wayback (source unique la plus solide) :** [web.archive.org/web/20260521213245/https://natrocoin.net/](https://web.archive.org/web/20260521213245/https://natrocoin.net/)',
  coverageHeading: 'Dans la presse',
  coverageIntro:
    'Couverture externe à mesure que l\'affaire circule dans le secteur. Reproduite avec attribution — les formulations sont celles des médias, non du dossier. Cette section s\'enrichira.',
  coverage: [
    {
      source: 'iGaming Insides',
      url: 'https://t.me/igaming_inside',
      image: '/exhibits/ex-coverage-igaming-insides-linkedin.png',
      imageWidth: 1156,
      imageHeight: 3108,
      meta: 'Publication spécialisée iGaming · LinkedIn · 30 mai 2026',
      title: '« Le fondateur de Spribe, David Natroshvili, accusé de scam crypto »',
      body:
        'Un rédacteur du média spécialisé iGaming **iGaming Insides** a publié sur LinkedIn un résumé de l\'affaire en russe. Il retrace l\'argumentaire fondé sur le nom de famille (*« most coin founders are anonymous, Alex isn\'t »*), les Stories de prévente de David Natroshvili tournées devant une Bentley et une Ferrari avec un minimum de 1 500 $ et une ligne directe vers son fils, les salons par paliers quasi vides (Foyer 13, Floor 10, Lounge 2 détenteurs + 3 admins, Inner Circle jamais créé), l\'effondrement d\'environ 98 %, les refus *« Nothing to say »* et *« stfu »*, et le nettoyage des preuves en 72 heures — en notant que la Wayback Machine a conservé le site. Le post se conclut ainsi : *« Very strange business, of course. »*',
      urlLabel: 'iGaming Insides — chaîne Telegram',
      imageAlt: 'Post LinkedIn d\'iGaming Insides sur l\'affaire $NATRO',
    },
  ],
  downloadsHeading: 'Téléchargements et liens rapides',
  downloadsLabels: {
    txt: 'Communiqué de presse (texte brut)',
    factSheet: 'Fiche d\'information d\'une page',
    factSheetSub: 'Chiffres lisibles d\'un coup d\'œil + chronologie (prêt à imprimer)',
    waybackArchive: 'Archive Wayback — natrocoin.net (avant retrait)',
    fullFile: 'Dossier complet (interactif)',
    exhibitArchive: 'Archive des pièces — index de 25 documents de source primaire',
  },
};
