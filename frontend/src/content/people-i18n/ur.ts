/**
 * Urdu (ur) translation overlay for the /people profile pages.
 *
 * Index-aligned with the canonical English data in ../people.ts:
 *   profiles[slug].sections[i]      ↔ English profile.sections[i]
 *   profiles[slug].handleNotes[i]   ↔ English profile.handles[i].note
 *   profiles[slug].sourceLabels[i]  ↔ English profile.sources[i].label
 *
 * Verbatim source quotes (the presale Stories, "stfu", "Nothing to say",
 * stated loss figures) are kept in their original English inside the
 * translated prose — quotes are sacred. Markdown markers (**bold**, *italic*,
 * [label](url)) and all URLs are preserved exactly. The site renders Urdu
 * right-to-left automatically.
 */
import type { PeopleLocaleBundle } from '../people';

export const ur: PeopleLocaleBundle = {
  profiles: {
    'alex-natroshvili': {
      role: 'نامزد فریق · بانی',
      tagline:
        'Solana نیٹ ورک پر $NATRO میم کوائن کا بانی (21 May 2026 کو لانچ ہوا)؛ Spribe کے سی ای او ڈیوڈ ناتروشویلی کا بیٹا۔ خود کو لانچ کی مارکیٹنگ کے ذریعے پہچنوایا۔',
      metaTitle:
        'ایلکس ناتروشویلی — Solana نیٹ ورک پر $NATRO کا بانی | The NATRO File',
      metaDescription:
        'ایلکس ناتروشویلی کون ہے؟ Solana نیٹ ورک پر $NATRO میم کوائن کا بانی (21 May 2026)، Spribe کے سی ای او ڈیوڈ ناتروشویلی کا بیٹا۔ تصدیق شدہ Instagram @natroalex، اور تصدیق شدہ Telegram @natroalex1۔ ایک مستند فائل۔',
      handleNotes: ['تصدیق شدہ · 54.1K فالوورز', 'تصدیق شدہ'],
      sections: [
        {
          heading: 'وہ کون ہے',
          body: `ایلکس ناتروشویلی کی شناخت بطورِ بانی خود $NATRO منصوبے کی اپنی ویب سائٹ نے علانیہ کی — وہ گمنام نہیں تھا۔ بانی کا حصہ اس جملے سے شروع ہوا: *"Most coin founders are anonymous. Alex isn't. His name is on the project, his face is on TikTok and Instagram, and his family is well-known globally."* اور وہاں اس کے ذاتی پروفائل کو یوں بیان کیا گیا تھا: *"Boxer / Car Collector / Watch Collector."*

وہ **ڈیوڈ ناتروشویلی** کا بیٹا ہے، جو Spribe کا بانی اور سی ای او ہے — وہ iGaming اسٹوڈیو جس کے پیچھے دنیا بھر میں مشہور crash طرز کا جوئے کا پروڈکٹ Aviator ہے۔ لانچ کے وقت اس کے قابلِ تصدیق عوامی اکاؤنٹس Instagram [@natroalex](https://instagram.com/natroalex) (تصدیق شدہ، 54.1K فالوورز) اور Telegram [@natroalex1](https://t.me/natroalex1) (تصدیق شدہ) تھے۔`,
        },
        {
          heading: '$NATRO کی لانچ میں کردار',
          body: `$NATRO کی مارکیٹنگ ایک طبقاتی رسائی والے "networking coin" کے طور پر کی گئی، اور پیشکش صراحتاً ناتروشویلی خاندان کے نام اور Spribe / Aviator کے تعلق پر مرکزی اعتماد کے اشارے کے طور پر ٹِکی ہوئی تھی۔ ویب سائٹ کے اپنے FAQ نے rug-pull کے سوال کا براہِ راست جواب دیا، یہ کہتے ہوئے: *"The reputation hit lasts forever; the cash from a rug doesn't."*

چار طبقاتی رسائی کی سیڑھی کا وعدہ کیا گیا — Foyer (1M)، Floor (5M)، Lounge (10M)، اور Salon · Inner Circle (20M)، جس کے بالائی طبقے کو "names you'd recognize, real money behind them, people who can actually open doors" کہا گیا۔ چیٹس کھلنے کے بعد، کمرے وعدہ کردہ پیمانے کے ایک معمولی حصے پر موجود تھے: Foyer 13 ارکان پر، Floor 10 پر، Lounge 2 ہولڈرز اور 3 ایڈمنز پر؛ جبکہ Salon کبھی بنایا ہی نہیں گیا۔`,
        },
        {
          heading: 'انہدام کے بعد',
          body: `تقریباً 48 گھنٹوں کے اندر قیمت تقریباً 98% گر گئی۔ جب متاثرہ ابتدائی ہولڈرز نے رقم کی واپسی کا مطالبہ کیا تو ٹیم نے انکار کر دیا؛ ٹیم ایڈمن کا جواب تھا *"Nothing to say."* 25 May 2026 کو 10:11 UTC پر، اس کے تصدیق شدہ Telegram اکاؤنٹ پر بھیجی گئی ایک منظم "واپسی یا اشاعت" کی پیشکش کے جواب میں، ایلکس ناتروشویلی نے دو حرفوں سے جواب دیا: *"stfu."* یہ پیغام فائل کے دستاویزی مجموعے میں محفوظ ہے۔

اسی وقفے میں natrocoin.net ویب سائٹ بند کر دی گئی، اس کے تصدیق شدہ Instagram بائیو سے NATRO کا لنک ہٹا دیا گیا، اور بااثر مواد ساز @jrcryptex (114K فالوورز) کی ادائیگی شدہ تشہیری ویڈیو حذف کر دی گئی۔ مگر بلاک چین کا ریکارڈ، آرکائیو شدہ ویب سائٹ، اور چیٹ کے لاگز حذف نہیں ہوئے۔`,
        },
        {
          heading: 'براہِ راست رابطہ، پھر بلاک',
          body: `25 May 2026 کو Spribe کے قانونی اور ادارہ جاتی پتوں پر ایک رسمی خط پہنچائے جانے کے بیالیس منٹ بعد، ایلکس ناتروشویلی نے ایک متاثرہ ہولڈر سے Instagram DM کے ذریعے براہِ راست رابطہ شروع کیا۔ اگلے تقریباً دو گھنٹوں کے دوران لہجہ بار بار بدلا — دعوت سے، مشترکہ متاثر کے فریم سے، حکم تک، پھر تحقیر تک — اس سے پہلے کہ ہولڈر کو بلاک کر دیا جائے۔

اس سلسلے سے لفظ بہ لفظ: *"Delete this comments your just making a fool out of yourself."* اور *"Spribe legal is not responding to you 😅 / Who do u think u are."* یہ سلسلہ، اور وہ بلاک جس نے اسے ختم کیا، فائل کے دستاویزی مجموعے میں محفوظ ہیں۔`,
        },
        {
          heading: 'ہولڈرز کے اپنے الفاظ میں',
          body: `منصوبے کے اپنے "NATRO Foyer" Telegram کمرے کے اندر — جو 13 ارکان پر بنایا گیا، جبکہ وعدہ "few thousand" کا تھا — متاثرہ ہولڈرز نے اپنے نقصانات کو حقیقی وقت میں دستاویز کیا اور اپنا فیصلہ سنایا۔ چیٹ کے لاگز سے لفظ بہ لفظ دہرایا گیا، جو پیغامات ہٹائے جانے سے پہلے محفوظ کیے گئے: *"I lost 2K," "I lost 6K," "It's over,"* اور، صاف صاف، *"Natro scam"* اور *"Fucking scam."*

یہ متاثرہ ہولڈرز کے الفاظ ہیں، اس فائل کی آواز نہیں۔ انہیں یہاں اس لیے درج کیا گیا ہے کیونکہ جس کمرے میں یہ لکھے گئے، وہ بعینہٖ وہی رسائی کا طبقہ تھا جس کی بنیاد پر ٹوکن بیچا گیا۔`,
        },
        {
          heading: 'اس کے بیان کردہ نقصانات پر',
          body: `براہِ راست پیغامات میں، ایلکس ناتروشویلی نے کہا کہ اس نے خود لانچ میں رقم گنوائی — *"I lost 38k"* اور، الگ سے، *"I swear to god i lost 30k plus."* یہ اعداد یہاں اس کے دعوؤں کے طور پر درج ہیں، ثابت شدہ حقائق کے طور پر نہیں: بیان کردہ عدد اسی پیغامات کے سلسلے میں بدل جاتا ہے، اور خود منصوبے کی ٹوکینومکس نے بانی کی 30M حصے کو علانیہ طور پر کبھی نہ ہلانے کے عہد کے طور پر بیان کیا تھا۔ ایک نہ ہلنے والے حصے پر غیر محقق "کاغذی" نقصان خوردہ ہولڈرز کے محقق نقدی نقصان کے مساوی نہیں۔

ایک علیحدہ آن چین آڈٹ جاری ہے۔ تخلیق کار کا والٹ لانچ کے بعد مسلسل swap اور لیکویڈیٹی کی سرگرمی دکھاتا ہے؛ مگر آیا یہ نامزد 30M بانی حصے سے مطابقت رکھتا ہے یا کسی الگ ٹیم حصے سے، اس کے لیے مزید آن چین فرانزک تجزیے کی ضرورت ہے اور یہاں اس کی تصدیق نہیں کی جاتی۔`,
        },
        {
          heading: 'جواب کا حق',
          body: `ایلکس ناتروشویلی کو جواب دینے کی دعوت دی جاتی ہے۔ دستاویزی حقائقی تصحیحات ریکارڈ کے ساتھ شائع کی جائیں گی۔ رابطے کی تفصیلات [پریس صفحہ](/press) پر ہیں۔`,
        },
      ],
      sourceLabels: [
        'natrocoin.net کا Wayback آرکائیو (ہٹائے جانے سے پہلے، بانی کا حصہ)',
        'Telegram DMs (@natroalex1، تصدیق شدہ) اور NATRO Foyer لاگز — دستاویز 20 ("stfu") اور "Voices" مجموعہ، فائل گیلری میں',
        'Solscan — $NATRO ٹوکن کنٹریکٹ',
        'Kutztown University Foundation — ناتروشویلی خاندان کے بارے میں سیاق و سباق',
      ],
    },
    'david-natroshvili': {
      role: 'نامزد فریق · Spribe کا سی ای او',
      tagline:
        'Spribe کا بانی اور سی ای او؛ $NATRO کے بانی ایلکس ناتروشویلی کا والد۔ اپنے تصدیق شدہ Instagram اکاؤنٹ پر اس نے ذاتی طور پر $NATRO کے پری سیل کی تشہیر کی اور لانچ سے پہلے سرمایہ کاری کی دعوت دی۔',
      metaTitle: 'ڈیوڈ ناتروشویلی — Spribe کا بانی اور سی ای او | The NATRO File',
      metaDescription:
        'ڈیوڈ ناتروشویلی کون ہے؟ Spribe کا بانی اور سی ای او اور $NATRO کے بانی ایلکس ناتروشویلی کا والد۔ اپنے تصدیق شدہ Instagram پر اس نے 21 May 2026 کی لانچ سے پہلے ذاتی طور پر $NATRO کے پری سیل ("with me & @natroalex"، کم از کم 1.5k) کی تشہیر کی۔ ایک مستند فائل۔',
      handleNotes: [undefined, 'تصدیق شدہ', undefined],
      sections: [
        {
          heading: 'وہ کون ہے',
          body: `ڈیوڈ ناتروشویلی **Spribe** کا بانی اور سی ای او ہے، وہ iGaming اسٹوڈیو جس کے پیچھے دنیا بھر میں مشہور crash طرز کا جوئے کا پروڈکٹ Aviator ہے۔ اس کے پاس Kutztown University of Pennsylvania سے MBA کی ڈگری ہے (کلاس 2001)؛ اور Kutztown میں Pennsylvania Small Business Development Center کا مرکزی دفتر 2025 کے بہار میں ایک خیراتی عطیے کے بعد [اس کے نام پر ہے](https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/)۔ وہ Solana نیٹ ورک پر $NATRO میم کوائن کے بانی [ایلکس ناتروشویلی](/people/alex-natroshvili) کا والد ہے۔`,
        },
        {
          heading: 'اس نے ذاتی طور پر پری سیل کی تشہیر کی',
          body: `ڈیوڈ ناتروشویلی محض ایک ساکھ کے پس منظر کے طور پر استعمال نہیں ہوا۔ اپنے ذاتی **تصدیق شدہ** Instagram اکاؤنٹ (@davidnatro1) پر، لانچ سے قبل کے گھنٹوں میں، اس نے واحد متکلم کے صیغے میں ذاتی طور پر $NATRO کے پری سیل کی تشہیر کی اور سرمایہ کاری کی دعوت دی۔ یہ اسٹوریز فائل کے دستاویزی مجموعے میں محفوظ ہیں:

*"If you want to get involved in the crypto project presale **with me & @natroalex** — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k."* (دستاویز 22)

*"We're opening private access to **our** crypto project presale **with me & @natroalex** — Telegram by DM · 1.5k min entry · Limited access available."* (دستاویز 24)

*"I have many celebs on the line to post about natro this will be crazy🔥"* (دستاویز 21)

اس نے بااثر مواد ساز @jrcryptex (114K فالوورز) کی ادائیگی شدہ تشہیری ویڈیو بھی اپنی اسٹوریز میں دوبارہ شائع کی — *"It's called NATRO"* (دستاویز 2)۔ پری سیل کی دعوت نے ممکنہ خریداروں کو $1,500 کی کم از کم حد اور ایلکس ناتروشویلی کے Telegram (@natroalex1) کی طرف رہنمائی کی۔`,
        },
        {
          heading: 'مستند بمقابلہ زیرِ تصدیق',
          body: `**مستند:** کہ ڈیوڈ ناتروشویلی نے ذاتی اور علانیہ طور پر $NATRO کے پری سیل کی تشہیر کی اور اپنے تصدیق شدہ اکاؤنٹ سے واحد متکلم کے صیغے میں ("with me," "our crypto project") سرمایہ کاری کی دعوت دی، یہ اس کی اپنی اسٹوریز سے ثابت ہے جو ان کے ختم ہونے سے پہلے محفوظ کی گئیں۔

**زیرِ فرانزک تحقیق:** کہ پری سیل کی رقم کہاں گئی، اور آیا ڈیوڈ ناتروشویلی نے کسی منصوبے کے والٹ پر کنٹرول رکھا یا اس سے رقم وصول کی، اس کی یہاں تصدیق نہیں کی جاتی۔ اسے ثابت کرنے کے لیے آن چین کام درکار ہے جو جاری ہے۔ فائل اس میں فرق کرتی ہے کہ عوامی ریکارڈ پہلے سے کیا دکھاتا ہے اور کس چیز کے لیے ابھی ثبوت درکار ہے۔`,
        },
        {
          heading: 'دائرہ کار سے متعلق نوٹ',
          body: `یہ فائل May 2026 کی $NATRO ٹوکن لانچ سے متعلق ہے۔ یہ Spribe کے لائسنس یافتہ جوئے کے پروڈکٹس یا اس کے وسیع تر کاروبار کے بارے میں کوئی دعویٰ نہیں کرتی، جن کی متعدد دائرہ ہائے اختیار میں اپنی قانونی حیثیت ہے اور جو اس ریکارڈ کے دائرہ کار سے باہر ہیں۔`,
        },
        {
          heading: 'جواب کا حق',
          body: `ڈیوڈ ناتروشویلی اور Spribe کو جواب دینے کی دعوت دی جاتی ہے۔ 25 May 2026 کو Spribe کے شائع شدہ قانونی اور ادارہ جاتی پتوں پر ایک رسمی نوٹس بھیجا گیا۔ دستاویزی حقائقی تصحیحات ریکارڈ کے ساتھ شائع کی جائیں گی۔ رابطے کی تفصیلات [پریس صفحہ](/press) پر ہیں۔`,
        },
      ],
      sourceLabels: [
        'لانچ سے قبل کی Instagram اسٹوریز، @davidnatro1 (تصدیق شدہ) — دستاویزات 21، 22، 24 (پری سیل کی دعوت) اور دستاویز 2 (تشہیر کی دوبارہ اشاعت)، فائل گیلری میں',
        'natrocoin.net کا Wayback آرکائیو (ہٹائے جانے سے پہلے، بانی کا حصہ)',
        'Kutztown University Foundation — اس کے نام پر منسوب SBDC دفتر',
        'Spribe — کمپنی صفحہ',
      ],
    },
  },
  chrome: {
    namedParties: 'نامزد فریق',
    indexKicker: '§ نامزد فریق',
    indexH1: 'اس فائل میں نامزد افراد',
    indexStandfirst:
      'ہر ایک نے خود کو $NATRO کی لانچ مارکیٹنگ کے ذریعے پہچنوایا — اس فائل نے انہیں بے نقاب نہیں کیا۔ ہر پروفائل حقائقی، مستند، اور ہمیشہ جواب کے حق کی حامل ہے۔',
    indexMetaTitle:
      'نامزد فریق — ایلکس اور ڈیوڈ ناتروشویلی | The NATRO File',
    indexMetaDescription:
      '$NATRO فائل میں نامزد افراد، جن میں سے ہر ایک نے خود کو لانچ مارکیٹنگ کے ذریعے پہچنوایا: ایلکس ناتروشویلی (بانی) اور ڈیوڈ ناتروشویلی (Spribe کا سی ای او)۔ ذرائع کے روابط کے ساتھ علیحدہ پروفائلز۔',
    readFullProfile: 'مکمل پروفائل پڑھیں →',
    storiesHeading: 'اسکرین شاٹس · بنیادی ذرائع',
    storiesNote:
      'ہر حذف، بندش، اختتام یا بلاک سے پہلے محفوظ کیے گئے۔ کسی بھی اسکرین شاٹ پر دبائیں تاکہ مکمل ریزولوشن میں دستاویز کھل جائے۔',
    sources: 'ذرائع',
    whereToNext: 'اب کہاں جائیں',
    davidAwardTitle: 'iGaming میں سب سے بااثر #1 →',
    davidAwardSub: '"Game Changers 2026" ایوارڈ — $NATRO ریکارڈ کے پس منظر میں',
    fullFile: 'مکمل فائل →',
    fullFileSub: 'وعدہ · حقیقت · صفائی · آوازیں · افراد · ذرائع',
    onchain: 'آن چین تصدیق →',
    onchainSub: 'ٹوکن کی موجودہ حالت، تخلیق کار والٹ کی سرگرمی',
    press: 'پریس کٹ اور جواب کا حق →',
    pressSub: 'حقائق کی فہرست، روابط، رسمی نوٹس',
  },
};
