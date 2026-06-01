/**
 * One-page fact-sheet content. Scannable: big numbers, compact timeline,
 * primary sources block. Optimised for "Save as PDF" via browser print.
 */

export interface FactSheetContent {
  kicker: string;
  headline: string;
  filed: string;
  filedValue: string;
  numbersHeading: string;
  numbers: Array<{ value: string; label: string }>;
  timelineHeading: string;
  timeline: Array<{ date: string; event: string }>;
  partiesHeading: string;
  parties: Array<{ name: string; role: string; handles: string }>;
  sourcesHeading: string;
  sources: string[];
  contactLine: string;
  fileLine: string;
}

const enFact: FactSheetContent = {
  kicker: 'Case fact sheet · v1.0 · 28 May 2026',
  headline: '$NATRO — Solana memecoin · 21 May 2026 launch · 98% collapse',
  filed: 'Compiled by',
  filedValue: '@btc3050 (Telegram) · affected early holder',
  numbersHeading: 'In numbers',
  numbers: [
    { value: '~98%', label: 'Price collapse in 48h' },
    { value: '$36', label: 'Market cap (per Pump.fun API, at filing)' },
    { value: '$200K+', label: '"Committed at launch" (project\'s own claim)' },
    { value: '352', label: 'Wallets remaining' },
    { value: '$1,500', label: 'Min. presale entry (set by D. Natroshvili)' },
    { value: '15', label: 'Age of nominal founder Alex Natroshvili' },
    { value: '72 h', label: 'From refund refusal to website takedown' },
    { value: '25', label: 'Documented exhibits in case file' },
  ],
  timelineHeading: 'Timeline',
  timeline: [
    { date: '20–21 May', event: 'David Natroshvili publishes 5 Instagram Stories soliciting presale ($1.5k min entry, "with me & @natroalex", DM @natroalex1)' },
    { date: '21 May · 20:11 UTC', event: 'Token launches on Pump.fun (contract 9TmTw3B…tdiF)' },
    { date: '22–23 May', event: 'Price collapses; holders document losses in project Telegram' },
    { date: '23 May · 13:50', event: 'Team admin OC voluntarily leaves tier chats' },
    { date: '23 May', event: 'Structured refund proposal presented; team admin: "Nothing to say"' },
    { date: '24 May', event: 'NATRO link removed from founder\'s verified IG bio' },
    { date: '24 May', event: 'natrocoin.net taken offline; Wayback archive preserved' },
    { date: '24 May', event: 'KOL @jrcryptex (114K followers) deletes paid promo' },
    { date: '24 May', event: 'Official Telegram channel keeps recruiting new buyers' },
    { date: '25 May · 10:11', event: 'Founder\'s personal Telegram reply: "stfu."' },
    { date: '25 May · 12:24', event: 'Formal letter to Spribe legal (info@, legal@spribe.co + 2 named execs)' },
    { date: '25 May · 13:06', event: 'Founder initiates Instagram DM 42 min after Spribe email' },
    { date: '28 May · 12:24', event: 'Spribe legal-response window expires without reply; case file released publicly' },
  ],
  partiesHeading: 'Named parties',
  parties: [
    {
      name: 'Alex Natroshvili',
      role: 'Nominal founder; 15 yrs (DOB 14 Sep 2010)',
      handles: 'IG @natroalex (54.1K ✓) · TG @natroalex1 (✓) · Tapology fighter profile',
    },
    {
      name: 'David Natroshvili',
      role: 'Father; pre-launch presale solicitor; Founder & CEO, Spribe',
      handles: 'IG @davidnatro1 (✓) · IG @davi.natroshvili · Spribe LinkedIn · HandWiki biography',
    },
    {
      name: 'JR Cryptex',
      role: 'Paid KOL; deleted promo 24 May 2026',
      handles: 'IG @jrcryptex (114K)',
    },
    {
      name: '"A A" (Arif Azii)',
      role: 'Team admin; "Nothing to say" verbatim',
      handles: 'TG @arifazii',
    },
    {
      name: 'Eric Connola',
      role: 'Public defender of the launch (social media)',
      handles: 'IG @ericconnola (✓)',
    },
  ],
  sourcesHeading: 'Primary sources',
  sources: [
    'Wayback archive of natrocoin.net (21 May 2026 21:32 UTC capture) — the file\'s single strongest source',
    'Solscan: token mint 9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF',
    'Solscan: creator wallet 76qavBCaqDzn6KP6q5Qzu5sXVUXSqXWQpCTTF6Tye7xx',
    'Solscan: compiler wallet GsCKRFsTYbU4CuTDYP9NLDDMvsVVWSnpdVDst3nKb6JJ (≈220M NATRO, verifiable position)',
    'Pump.fun mint state (complete: true) and pump_swap_pool 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS',
    'NATRO Foyer, Floor, Lounge Telegram channel screenshots (full archive available on request)',
    'Founder\'s personal Telegram DM (@natroalex1): "stfu" reply, 25 May 10:11',
    'Spribe legal email paper-trail, 25 May 12:24 UTC',
    'Kutztown University Foundation public announcement (David Natroshvili SBDC Suite, Sep 2025)',
  ],
  contactLine: '@btc3050 (Telegram)',
  fileLine: 'Full case file: natro.meme · Press release: natro.meme/press',
};

const ruFact: FactSheetContent = {
  kicker: 'Кейс-сводка · v1.0 · 28 мая 2026',
  headline: '$NATRO — Solana-мемкоин · запуск 21 мая 2026 · обвал 98%',
  filed: 'Укладчик',
  filedValue: '@btc3050 (Telegram) · пострадавший ранний держатель',
  numbersHeading: 'В цифрах',
  numbers: [
    { value: '~98%', label: 'Обвал цены за 48 часов' },
    { value: '$36', label: 'Рын. капитализация (API Pump.fun на момент)' },
    { value: '$200K+', label: '«Заявлено на старте» (заявление команды)' },
    { value: '352', label: 'Оставшихся кошельков' },
    { value: '$1 500', label: 'Мин. вход в пресейл (установлен Д. Натрошвили)' },
    { value: '15', label: 'Возраст номинального основателя А. Натрошвили' },
    { value: '72 ч', label: 'От отказа в возврате до отключения сайта' },
    { value: '25', label: 'Задокументированных экспонатов в файле' },
  ],
  timelineHeading: 'Хронология',
  timeline: [
    { date: '20–21 мая', event: 'Давид Натрошвили публикует 5 Instagram Stories, предлагая пресейл ($1.5k мин., «with me & @natroalex», DM @natroalex1)' },
    { date: '21 мая · 20:11 UTC', event: 'Токен запущен на Pump.fun (контракт 9TmTw3B…tdiF)' },
    { date: '22–23 мая', event: 'Цена обваливается; держатели документируют потери в Telegram проекта' },
    { date: '23 мая · 13:50', event: 'Админ команды OC добровольно покидает тиерные чаты' },
    { date: '23 мая', event: 'Структурированное предложение возврата; ответ админа: «Nothing to say»' },
    { date: '24 мая', event: 'Ссылка NATRO удалена из верифицированной IG-биографии основателя' },
    { date: '24 мая', event: 'natrocoin.net отключён; архив Wayback сохранён' },
    { date: '24 мая', event: 'KOL @jrcryptex (114K подписчиков) удаляет оплаченное промо' },
    { date: '24 мая', event: 'Официальный Telegram-канал продолжает вербовать новых покупателей' },
    { date: '25 мая · 10:11', event: 'Личный ответ основателя в Telegram: «stfu».' },
    { date: '25 мая · 12:24', event: 'Официальное письмо в юр. отдел Spribe (info@, legal@spribe.co + 2 названных executive)' },
    { date: '25 мая · 13:06', event: 'Основатель инициирует Instagram DM через 42 мин после письма в Spribe' },
    { date: '28 мая · 12:24', event: 'Окно для юр. ответа Spribe истекло без реакции; кейс-файл публикован' },
  ],
  partiesHeading: 'Названные стороны',
  parties: [
    {
      name: 'Алекс Натрошвили',
      role: 'Номинальный основатель; 15 лет (дата рожд. 14 сент. 2010)',
      handles: 'IG @natroalex (54.1K ✓) · TG @natroalex1 (✓) · профиль Tapology',
    },
    {
      name: 'Давид Натрошвили',
      role: 'Отец; соискатель пресейл-инвестиций до запуска; основатель и CEO Spribe',
      handles: 'IG @davidnatro1 (✓) · IG @davi.natroshvili · LinkedIn Spribe · биография HandWiki',
    },
    {
      name: 'JR Cryptex',
      role: 'Оплаченный KOL; удалил промо 24 мая 2026',
      handles: 'IG @jrcryptex (114K)',
    },
    {
      name: '"A A" (Arif Azii)',
      role: 'Админ команды; "Nothing to say" дословно',
      handles: 'TG @arifazii',
    },
    {
      name: 'Eric Connola',
      role: 'Публичный защитник запуска (соцсети)',
      handles: 'IG @ericconnola (✓)',
    },
  ],
  sourcesHeading: 'Первичные источники',
  sources: [
    'Архив Wayback сайта natrocoin.net (захват 21 мая 2026, 21:32 UTC) — сильнейший источник в файле',
    'Solscan: токен 9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF',
    'Solscan: кошелёк-создатель 76qavBCaqDzn6KP6q5Qzu5sXVUXSqXWQpCTTF6Tye7xx',
    'Solscan: кошелёк укладчика GsCKRFsTYbU4CuTDYP9NLDDMvsVVWSnpdVDst3nKb6JJ (≈220M NATRO, верифицируемая позиция)',
    'Pump.fun mint state (complete: true) и pump_swap_pool 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS',
    'Скриншоты NATRO Foyer / Floor / Lounge в Telegram (полный архив по запросу)',
    'Личный Telegram DM основателя (@natroalex1): «stfu», 25 мая 10:11',
    'Email-цепочка с юр. отделом Spribe, 25 мая 12:24 UTC',
    'Публичное объявление Kutztown University Foundation (David Natroshvili SBDC Suite, сент. 2025)',
  ],
  contactLine: '@btc3050 (Telegram)',
  fileLine: 'Полный кейс-файл: natro.meme · Пресс-релиз: natro.meme/press',
};

const urFact: FactSheetContent = {
  kicker: 'کیس فیکٹ شیٹ · v1.0 · 28 مئی 2026',
  headline: '$NATRO — Solana میم کوائن · 21 مئی 2026 لانچ · 98% زوال',
  filed: 'مرتب کردہ',
  filedValue: '@btc3050 (Telegram) · متاثرہ ابتدائی ہولڈر',
  numbersHeading: 'اعداد میں',
  numbers: [
    { value: '~98%', label: '48 گھنٹوں میں قیمت کا زوال' },
    { value: '$36', label: 'مارکیٹ کیپ (Pump.fun API کے مطابق، فائلنگ کے وقت)' },
    { value: '$200K+', label: '"لانچ پر طے شدہ" (پروجیکٹ کا اپنا دعویٰ)' },
    { value: '352', label: 'باقی بچے والیٹس' },
    { value: '$1,500', label: 'پری سیل میں کم از کم داخلہ (D. Natroshvili کی جانب سے مقرر)' },
    { value: '15', label: 'برائے نام بانی Alex Natroshvili کی عمر' },
    { value: '72 h', label: 'ریفنڈ سے انکار سے ویب سائٹ ہٹائے جانے تک' },
    { value: '25', label: 'کیس فائل میں دستاویزی شواہد' },
  ],
  timelineHeading: 'ٹائم لائن',
  timeline: [
    { date: '20–21 مئی', event: 'David Natroshvili پری سیل کی دعوت دیتے ہوئے 5 Instagram Stories شائع کرتے ہیں ($1.5k کم از کم داخلہ، "with me & @natroalex"، DM @natroalex1)' },
    { date: '21 مئی · 20:11 UTC', event: 'ٹوکن Pump.fun پر لانچ ہوتا ہے (کنٹریکٹ 9TmTw3B…tdiF)' },
    { date: '22–23 مئی', event: 'قیمت گر جاتی ہے؛ ہولڈرز پروجیکٹ کے Telegram میں نقصانات دستاویز کرتے ہیں' },
    { date: '23 مئی · 13:50', event: 'ٹیم ایڈمن OC رضاکارانہ طور پر ٹائر چیٹس چھوڑ دیتا ہے' },
    { date: '23 مئی', event: 'منظم ریفنڈ تجویز پیش کی گئی؛ ٹیم ایڈمن: "Nothing to say"' },
    { date: '24 مئی', event: 'بانی کے تصدیق شدہ IG بائیو سے NATRO لنک ہٹا دیا گیا' },
    { date: '24 مئی', event: 'natrocoin.net آف لائن کر دی گئی؛ Wayback آرکائیو محفوظ' },
    { date: '24 مئی', event: 'KOL @jrcryptex (114K فالوورز) ادائیگی شدہ پرومو حذف کرتا ہے' },
    { date: '24 مئی', event: 'سرکاری Telegram چینل نئے خریداروں کی بھرتی جاری رکھتا ہے' },
    { date: '25 مئی · 10:11', event: 'بانی کا ذاتی Telegram جواب: "stfu."' },
    { date: '25 مئی · 12:24', event: 'Spribe کے قانونی شعبے کو رسمی خط (info@, legal@spribe.co + 2 نامزد ایگزیکٹوز)' },
    { date: '25 مئی · 13:06', event: 'بانی Spribe ای میل کے 42 منٹ بعد Instagram DM شروع کرتا ہے' },
    { date: '28 مئی · 12:24', event: 'Spribe کی قانونی جواب کی مہلت بغیر جواب ختم ہو جاتی ہے؛ کیس فائل عوامی طور پر جاری' },
  ],
  partiesHeading: 'نامزد فریق',
  parties: [
    {
      name: 'Alex Natroshvili',
      role: 'برائے نام بانی؛ 15 سال (تاریخ پیدائش 14 ستمبر 2010)',
      handles: 'IG @natroalex (54.1K ✓) · TG @natroalex1 (✓) · Tapology فائٹر پروفائل',
    },
    {
      name: 'David Natroshvili',
      role: 'والد؛ لانچ سے پہلے پری سیل کی دعوت دینے والے؛ بانی اور CEO، Spribe',
      handles: 'IG @davidnatro1 (✓) · IG @davi.natroshvili · Spribe LinkedIn · HandWiki سوانح',
    },
    {
      name: 'JR Cryptex',
      role: 'ادائیگی شدہ KOL؛ 24 مئی 2026 کو پرومو حذف کیا',
      handles: 'IG @jrcryptex (114K)',
    },
    {
      name: '"A A" (Arif Azii)',
      role: 'ٹیم ایڈمن؛ "Nothing to say" حرف بحرف',
      handles: 'TG @arifazii',
    },
    {
      name: 'Eric Connola',
      role: 'لانچ کا عوامی محافظ (سوشل میڈیا)',
      handles: 'IG @ericconnola (✓)',
    },
  ],
  sourcesHeading: 'بنیادی ذرائع',
  sources: [
    'natrocoin.net کا Wayback آرکائیو (21 مئی 2026 21:32 UTC کیپچر) — فائل کا واحد مضبوط ترین ذریعہ',
    'Solscan: ٹوکن مِنٹ 9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF',
    'Solscan: کریئیٹر والیٹ 76qavBCaqDzn6KP6q5Qzu5sXVUXSqXWQpCTTF6Tye7xx',
    'Solscan: مرتب کنندہ والیٹ GsCKRFsTYbU4CuTDYP9NLDDMvsVVWSnpdVDst3nKb6JJ (≈220M NATRO، قابلِ تصدیق پوزیشن)',
    'Pump.fun mint state (complete: true) اور pump_swap_pool 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS',
    'NATRO Foyer، Floor، Lounge Telegram چینل کے اسکرین شاٹس (مکمل آرکائیو درخواست پر دستیاب)',
    'بانی کا ذاتی Telegram DM (@natroalex1): "stfu" جواب، 25 مئی 10:11',
    'Spribe قانونی ای میل پیپر ٹریل، 25 مئی 12:24 UTC',
    'Kutztown University Foundation عوامی اعلان (David Natroshvili SBDC Suite، ستمبر 2025)',
  ],
  contactLine: '@btc3050 (Telegram)',
  fileLine: 'مکمل کیس فائل: natro.meme · پریس ریلیز: natro.meme/press',
};

const hiFact: FactSheetContent = {
  kicker: 'केस फैक्ट शीट · v1.0 · 28 मई 2026',
  headline: '$NATRO — Solana मीमकॉइन · 21 मई 2026 लॉन्च · 98% गिरावट',
  filed: 'संकलनकर्ता',
  filedValue: '@btc3050 (Telegram) · प्रभावित प्रारंभिक होल्डर',
  numbersHeading: 'आँकड़ों में',
  numbers: [
    { value: '~98%', label: '48 घंटों में कीमत में गिरावट' },
    { value: '$36', label: 'मार्केट कैप (Pump.fun API के अनुसार, फाइलिंग के समय)' },
    { value: '$200K+', label: '"लॉन्च पर प्रतिबद्ध" (प्रोजेक्ट का अपना दावा)' },
    { value: '352', label: 'शेष वॉलेट' },
    { value: '$1,500', label: 'न्यूनतम प्रीसेल प्रवेश (D. Natroshvili द्वारा निर्धारित)' },
    { value: '15', label: 'नाममात्र संस्थापक Alex Natroshvili की उम्र' },
    { value: '72 h', label: 'रिफंड से इनकार से वेबसाइट हटाए जाने तक' },
    { value: '25', label: 'केस फाइल में दर्ज साक्ष्य' },
  ],
  timelineHeading: 'टाइमलाइन',
  timeline: [
    { date: '20–21 मई', event: 'David Natroshvili प्रीसेल के लिए आमंत्रित करते हुए 5 Instagram Stories प्रकाशित करते हैं ($1.5k न्यूनतम प्रवेश, "with me & @natroalex", DM @natroalex1)' },
    { date: '21 मई · 20:11 UTC', event: 'टोकन Pump.fun पर लॉन्च होता है (कॉन्ट्रैक्ट 9TmTw3B…tdiF)' },
    { date: '22–23 मई', event: 'कीमत गिरती है; होल्डर प्रोजेक्ट के Telegram में नुकसान दर्ज करते हैं' },
    { date: '23 मई · 13:50', event: 'टीम एडमिन OC स्वेच्छा से टियर चैट छोड़ देता है' },
    { date: '23 मई', event: 'संरचित रिफंड प्रस्ताव प्रस्तुत किया गया; टीम एडमिन: "Nothing to say"' },
    { date: '24 मई', event: 'संस्थापक के सत्यापित IG बायो से NATRO लिंक हटा दिया गया' },
    { date: '24 मई', event: 'natrocoin.net ऑफलाइन कर दी गई; Wayback आर्काइव संरक्षित' },
    { date: '24 मई', event: 'KOL @jrcryptex (114K फॉलोअर्स) भुगतान किया गया प्रोमो हटाता है' },
    { date: '24 मई', event: 'आधिकारिक Telegram चैनल नए खरीदारों की भर्ती जारी रखता है' },
    { date: '25 मई · 10:11', event: 'संस्थापक का व्यक्तिगत Telegram उत्तर: "stfu."' },
    { date: '25 मई · 12:24', event: 'Spribe की लीगल टीम को औपचारिक पत्र (info@, legal@spribe.co + 2 नामित अधिकारी)' },
    { date: '25 मई · 13:06', event: 'संस्थापक Spribe ईमेल के 42 मिनट बाद Instagram DM शुरू करता है' },
    { date: '28 मई · 12:24', event: 'Spribe की लीगल-प्रतिक्रिया अवधि बिना उत्तर समाप्त; केस फाइल सार्वजनिक रूप से जारी' },
  ],
  partiesHeading: 'नामित पक्ष',
  parties: [
    {
      name: 'Alex Natroshvili',
      role: 'नाममात्र संस्थापक; 15 वर्ष (जन्म तिथि 14 सितंबर 2010)',
      handles: 'IG @natroalex (54.1K ✓) · TG @natroalex1 (✓) · Tapology फाइटर प्रोफाइल',
    },
    {
      name: 'David Natroshvili',
      role: 'पिता; लॉन्च-पूर्व प्रीसेल आमंत्रणकर्ता; संस्थापक एवं CEO, Spribe',
      handles: 'IG @davidnatro1 (✓) · IG @davi.natroshvili · Spribe LinkedIn · HandWiki जीवनी',
    },
    {
      name: 'JR Cryptex',
      role: 'भुगतान किया गया KOL; 24 मई 2026 को प्रोमो हटाया',
      handles: 'IG @jrcryptex (114K)',
    },
    {
      name: '"A A" (Arif Azii)',
      role: 'टीम एडमिन; "Nothing to say" शब्दशः',
      handles: 'TG @arifazii',
    },
    {
      name: 'Eric Connola',
      role: 'लॉन्च का सार्वजनिक समर्थक (सोशल मीडिया)',
      handles: 'IG @ericconnola (✓)',
    },
  ],
  sourcesHeading: 'प्राथमिक स्रोत',
  sources: [
    'natrocoin.net का Wayback आर्काइव (21 मई 2026 21:32 UTC कैप्चर) — फाइल का एकमात्र सबसे मजबूत स्रोत',
    'Solscan: टोकन मिंट 9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF',
    'Solscan: क्रिएटर वॉलेट 76qavBCaqDzn6KP6q5Qzu5sXVUXSqXWQpCTTF6Tye7xx',
    'Solscan: संकलनकर्ता वॉलेट GsCKRFsTYbU4CuTDYP9NLDDMvsVVWSnpdVDst3nKb6JJ (≈220M NATRO, सत्यापन योग्य स्थिति)',
    'Pump.fun mint state (complete: true) और pump_swap_pool 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS',
    'NATRO Foyer, Floor, Lounge Telegram चैनल के स्क्रीनशॉट (पूर्ण आर्काइव अनुरोध पर उपलब्ध)',
    'संस्थापक का व्यक्तिगत Telegram DM (@natroalex1): "stfu" उत्तर, 25 मई 10:11',
    'Spribe लीगल ईमेल पेपर-ट्रेल, 25 मई 12:24 UTC',
    'Kutztown University Foundation सार्वजनिक घोषणा (David Natroshvili SBDC Suite, सितंबर 2025)',
  ],
  contactLine: '@btc3050 (Telegram)',
  fileLine: 'पूर्ण केस फाइल: natro.meme · प्रेस रिलीज़: natro.meme/press',
};

const factSheets: Record<string, FactSheetContent> = { en: enFact, ru: ruFact, ur: urFact, hi: hiFact };

export function getFactSheet(locale: string): FactSheetContent {
  return factSheets[locale] || factSheets.en;
}
