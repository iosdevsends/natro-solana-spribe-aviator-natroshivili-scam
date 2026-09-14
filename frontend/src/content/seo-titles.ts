import type { Locale } from '@/i18n/routing';

/**
 * Search-result <title> for pages whose on-page heading is not written for
 * search (the FAQ index, on-chain, press, fact sheet, one-pager). Those pages
 * used to derive the title from the H1 or the brand, which either buried the
 * names people actually search (Alex / David Natroshvili, Spribe) or got cut
 * mid-sentence by clampTitle().
 *
 * Rules every entry follows:
 * - ≤ 60 characters, so clampTitle() never truncates it;
 * - no " — ", " | " or " · " separators (clampTitle() cuts at those);
 * - names in Latin script in every locale — search queries are Latin;
 * - reads as a record *about* the launch, never as the token's own site.
 *
 * Missing locales fall back to EN.
 */
export type SeoTitlePage = 'faq' | 'onChain' | 'press' | 'factSheet' | 'scamOnePager';

const TITLES: Record<SeoTitlePage, Partial<Record<Locale, string>> & { en: string }> = {
  faq: {
    en: '$NATRO FAQ: Alex Natroshvili, Spribe and the 98% collapse',
    ru: 'FAQ по $NATRO: Alex Natroshvili, Spribe и обвал на 98%',
    uk: 'FAQ про $NATRO: Alex Natroshvili, Spribe і обвал на 98%',
    ka: '$NATRO FAQ: Alex Natroshvili, Spribe და 98%-იანი ვარდნა',
    fr: 'FAQ $NATRO : Alex Natroshvili, Spribe et la chute de 98 %',
    de: '$NATRO-FAQ: Alex Natroshvili, Spribe und der 98-%-Absturz',
    es: 'FAQ de $NATRO: Alex Natroshvili, Spribe y la caída del 98 %',
    ar: 'أسئلة $NATRO: Alex Natroshvili وSpribe والانهيار بنسبة 98%',
    ur: '$NATRO FAQ: Alex Natroshvili، Spribe اور 98% انہدام',
    hi: '$NATRO FAQ: Alex Natroshvili, Spribe और 98% गिरावट',
  },
  onChain: {
    en: '$NATRO on-chain: token contract and creator wallet, verified',
    ru: '$NATRO в блокчейне: контракт токена и кошелёк создателя',
    uk: '$NATRO у блокчейні: контракт токена і гаманець творця',
    ka: '$NATRO ონ-ჩეინ: ტოკენის კონტრაქტი და შემქმნელის საფულე',
    fr: '$NATRO on-chain : contrat du token et wallet du créateur',
    de: '$NATRO on-chain: Token-Vertrag und Creator-Wallet geprüft',
    es: '$NATRO on-chain: contrato del token y wallet del creador',
    ar: '$NATRO على السلسلة: عقد التوكن ومحفظة المُنشئ',
    ur: '$NATRO آن چین: ٹوکن کنٹریکٹ اور تخلیق کار کا والٹ',
    hi: '$NATRO ऑन-चेन: टोकन कॉन्ट्रैक्ट और क्रिएटर वॉलेट',
  },
  press: {
    en: '$NATRO press kit: Alex Natroshvili, Spribe, the 98% collapse',
    ru: 'Пресс-кит $NATRO: Alex Natroshvili, Spribe, обвал на 98%',
    uk: 'Прес-кіт $NATRO: Alex Natroshvili, Spribe, обвал на 98%',
    ka: '$NATRO პრეს-კიტი: Alex Natroshvili, Spribe, 98%-იანი ვარდნა',
    fr: 'Kit presse $NATRO : Alex Natroshvili, Spribe, chute de 98 %',
    de: '$NATRO-Pressemappe: Alex Natroshvili, Spribe, 98-%-Absturz',
    es: 'Kit de prensa $NATRO: Alex Natroshvili, Spribe, caída 98%',
    ar: 'ملف صحفي $NATRO: Alex Natroshvili وSpribe وانهيار 98%',
    ur: '$NATRO پریس کٹ: Alex Natroshvili، Spribe، 98% انہدام',
    hi: '$NATRO प्रेस किट: Alex Natroshvili, Spribe, 98% गिरावट',
  },
  factSheet: {
    en: '$NATRO fact sheet: Alex Natroshvili, Spribe, 21 May 2026',
    ru: 'Справка по $NATRO: Alex Natroshvili, Spribe, 21 мая 2026',
    uk: 'Довідка про $NATRO: Alex Natroshvili, Spribe, 21.05.2026',
    ka: '$NATRO ფაქტები: Alex Natroshvili, Spribe, 21 მაისი 2026',
    fr: 'Fiche $NATRO : Alex Natroshvili, Spribe, 21 mai 2026',
    de: '$NATRO-Faktenblatt: Alex Natroshvili, Spribe, 21. Mai 2026',
    es: 'Ficha de $NATRO: Alex Natroshvili, Spribe, 21 mayo 2026',
    ar: 'حقائق $NATRO: Alex Natroshvili وSpribe، 21 مايو 2026',
    ur: '$NATRO حقائق نامہ: Alex Natroshvili، Spribe، 21 مئی 2026',
    hi: '$NATRO तथ्य-पत्र: Alex Natroshvili, Spribe, 21 मई 2026',
  },
  scamOnePager: {
    en: 'The $NATRO scam in one page: Alex Natroshvili’s token',
    ru: 'Скам $NATRO на одной странице: токен Alex Natroshvili',
    uk: 'Скам $NATRO на одній сторінці: токен Alex Natroshvili',
    ka: '$NATRO scam ერთ გვერდზე: Alex Natroshvili-ს ტოკენი',
    fr: 'Le scam $NATRO en une page : le token d’Alex Natroshvili',
    de: 'Der $NATRO-Scam auf einer Seite: Alex Natroshvilis Token',
    es: 'El scam de $NATRO en una página: token de Alex Natroshvili',
    ar: '«سكام» $NATRO في صفحة واحدة: توكن Alex Natroshvili',
    ur: '$NATRO اسکیم ایک صفحے میں: Alex Natroshvili کا ٹوکن',
    hi: '$NATRO स्कैम एक पेज में: Alex Natroshvili का टोकन',
  },
};

export function getSeoTitle(page: SeoTitlePage, locale: Locale): string {
  return TITLES[page][locale] ?? TITLES[page].en;
}
