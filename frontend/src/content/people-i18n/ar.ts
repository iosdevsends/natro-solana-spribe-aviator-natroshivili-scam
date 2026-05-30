/**
 * Arabic (ar) translation overlay for the /people profile pages.
 *
 * Index-aligned with the canonical English data in ../people.ts:
 *   profiles[slug].sections[i]      ↔ English profile.sections[i]
 *   profiles[slug].handleNotes[i]   ↔ English profile.handles[i].note
 *   profiles[slug].sourceLabels[i]  ↔ English profile.sources[i].label
 *
 * Verbatim source quotes (the presale Stories, "stfu", "Nothing to say",
 * stated loss figures) are kept in their original English inside the
 * translated prose — quotes are sacred. Markdown markers (**bold**, *italic*,
 * [label](url)) and all URLs are preserved exactly. The site renders Arabic
 * right-to-left automatically.
 */
import type { PeopleLocaleBundle } from '../people';

export const ar: PeopleLocaleBundle = {
  profiles: {
    'alex-natroshvili': {
      role: 'طرف مُسمّى · المؤسِّس',
      tagline:
        'مؤسِّس عملة الميم $NATRO على شبكة Solana (أُطلقت في 21 May 2026)؛ ابن الرئيس التنفيذي لـ Spribe ديفيد ناتروشفيلي. عرّف عن نفسه عبر تسويق الإطلاق.',
      metaTitle:
        'ألكس ناتروشفيلي — مؤسِّس عملة $NATRO على شبكة Solana | The NATRO File',
      metaDescription:
        'من هو ألكس ناتروشفيلي؟ مؤسِّس عملة الميم $NATRO على شبكة Solana (21 May 2026)، ابن الرئيس التنفيذي لـ Spribe ديفيد ناتروشفيلي. حساب Instagram موثَّق @natroalex، وحساب Telegram @natroalex1. ملف موثَّق.',
      handleNotes: ['موثَّق · 54.1K متابع', 'موثَّق'],
      sections: [
        {
          heading: 'من هو',
          body: `جرى التعريف بألكس ناتروشفيلي علنًا بصفته المؤسِّس عبر الموقع الرسمي لمشروع $NATRO نفسه — فلم يكن مجهول الهوية. افتُتح قسم المؤسِّس بالعبارة: *«Most coin founders are anonymous. Alex isn't. His name is on the project, his face is on TikTok and Instagram, and his family is well-known globally.»* ووُصف ملفه الشخصي هناك بأنه *«Boxer / Car Collector / Watch Collector.»*

وهو ابن **ديفيد ناتروشفيلي**، مؤسِّس Spribe والرئيس التنفيذي لها — استوديو الـ iGaming صاحب منتج المقامرة العالمي من نوع crash المعروف باسم Aviator. كانت حساباته العامة القابلة للتحقق وقت الإطلاق هي Instagram [@natroalex](https://instagram.com/natroalex) (موثَّق، 54.1K متابع) وTelegram [@natroalex1](https://t.me/natroalex1) (موثَّق).`,
        },
        {
          heading: 'الدور في إطلاق $NATRO',
          body: `سُوِّقت $NATRO بوصفها «عملة تواصل» ذات وصول مُقسَّم إلى طبقات، واستند العرض صراحةً إلى اسم عائلة ناتروشفيلي وإلى الارتباط بـ Spribe / Aviator بوصفهما إشارة الثقة المحورية. تناول قسم الأسئلة الشائعة في الموقع مسألة الـ rug-pull مباشرةً، مُصرِّحًا: *«The reputation hit lasts forever; the cash from a rug doesn't.»*

وُعِد بسلّم وصول من أربع طبقات — Foyer (1M) وFloor (5M) وLounge (10M) وSalon · Inner Circle (20M)، ووُصفت الطبقة العليا بأنها «names you'd recognize, real money behind them, people who can actually open doors». وبعد فتح المحادثات، كانت الغرف قائمة بجزء يسير من الحجم الموعود: Foyer بـ 13 عضوًا، وFloor بـ 10، وLounge بحاملَين اثنين زائد 3 مشرفين؛ أمّا Salon فلم يُنشأ قط.`,
        },
        {
          heading: 'بعد الانهيار',
          body: `في غضون نحو 48 ساعة هبط السعر بنحو 98%. وحين طلب الحاملون المتضرِّرون المبكِّرون استرداد أموالهم، رفض الفريق؛ وكان ردّ مشرف الفريق *«Nothing to say.»* وفي 25 May 2026 الساعة 10:11 UTC، ردًّا على عرض مُنظَّم بـ«الاسترداد أو النشر» أُرسل إلى حسابه الموثَّق على Telegram، ردّ ألكس ناتروشفيلي بكلمة من حرفين: *«stfu.»* وهذه الرسالة محفوظة ضمن مجموعة مُستندات الملف.

وفي النافذة الزمنية نفسها، أُوقف موقع natrocoin.net عن العمل، وأُزيل رابط NATRO من سيرته الذاتية الموثَّقة على Instagram، وحُذف الفيديو الترويجي المدفوع لصانع المحتوى المؤثِّر @jrcryptex (114K متابع). أمّا سجلّ البلوكشين وأرشيف الموقع وسجلّات المحادثات فلم تُحذف.`,
        },
        {
          heading: 'اتصال مباشر، ثم حظر',
          body: `بعد اثنتين وأربعين دقيقة من تسليم رسالة رسمية إلى العناوين القانونية والمؤسسية لـ Spribe في 25 May 2026، بادر ألكس ناتروشفيلي إلى الاتصال المباشر بأحد الحاملين المتضرِّرين عبر رسائل Instagram المباشرة. وعلى مدى الساعتين التاليتين تقريبًا تبدّلت اللهجة مرارًا — من الدعوة، إلى تأطير الضحية المشتركة، إلى الإملاء، إلى الاستخفاف — قبل أن يُحظَر الحامل.

حرفيًا من تلك السلسلة: *«Delete this comments your just making a fool out of yourself.»* و*«Spribe legal is not responding to you 😅 / Who do u think u are.»* والتسلسل، والحظر الذي أنهاه، محفوظان ضمن مجموعة مُستندات الملف.`,
        },
        {
          heading: 'بكلمات الحاملين',
          body: `داخل غرفة Telegram الخاصة بالمشروع نفسه «NATRO Foyer» — المُنشأة بـ 13 عضوًا، مقابل «بضعة آلاف» موعودة — وثّق الحاملون المتضرِّرون خسائرهم لحظةً بلحظة وبلغوا حكمهم الخاص. مُعاد حرفيًا من سجلّات المحادثة، التُقطت قبل إزالة الرسائل: *«I lost 2K», «I lost 6K», «It's over»* و، بكل صراحة، *«Natro scam»* و*«Fucking scam.»*

هذه كلمات الحاملين المتضرِّرين، لا صوت هذا الملف. وقد سُجّلت هنا لأن الغرفة التي كُتبت فيها هي عينها طبقة الوصول التي بِيع التوكن على أساسها.`,
        },
        {
          heading: 'بشأن الخسائر التي أعلن عنها',
          body: `في رسائل مباشرة، صرّح ألكس ناتروشفيلي بأنه هو نفسه خسر أموالًا في الإطلاق — *«I lost 38k»* و، على نحو منفصل، *«I swear to god i lost 30k plus.»* وتُسجَّل هذه الأرقام هنا بوصفها ادّعاءاته، لا بوصفها وقائع ثابتة: فالرقم المُعلَن يتغيّر ضمن سلسلة الرسائل نفسها، كما أن توكينوميكس المشروع ذاته وصفت حصة المؤسِّس البالغة 30M بأنها مُلتزَم علنًا بألّا تتحرّك أبدًا. والخسارة «الورقية» غير المُحقَّقة على حصة لا تتحرّك ليست مكافئة لخسارة نقدية مُحقَّقة لدى الحاملين الأفراد.

وثمة تدقيق مستقل على السلسلة جارٍ. تُظهر محفظة المُنشئ نشاط تبادل (swap) وسيولة مستمرًّا بعد الإطلاق؛ أمّا ما إذا كان ذلك يطابق حصة المؤسِّس المُسمّاة البالغة 30M أو يطابق حصة فريق منفصلة فيتطلب مزيدًا من التحليل الجنائي على السلسلة ولا يُؤكَّد هنا.`,
        },
        {
          heading: 'حق الرد',
          body: `ألكس ناتروشفيلي مدعوٌّ للرد. وستُنشر التصويبات الوقائعية الموثَّقة مع السجلّ. بيانات الاتصال على [صفحة الصحافة](/press).`,
        },
      ],
      sourceLabels: [
        'أرشيف Wayback لموقع natrocoin.net (قبل الإزالة، قسم المؤسِّس)',
        'رسائل Telegram المباشرة (@natroalex1، موثَّق) وسجلّات NATRO Foyer — الوثيقة 20 («stfu») ومجموعة «الأصوات»، في معرض الملف',
        'Solscan — عقد توكن $NATRO',
        'Kutztown University Foundation — سياق عن عائلة ناتروشفيلي',
      ],
    },
    'david-natroshvili': {
      role: 'طرف مُسمّى · الرئيس التنفيذي لـ Spribe',
      tagline:
        'مؤسِّس Spribe والرئيس التنفيذي لها؛ والد مؤسِّس $NATRO ألكس ناتروشفيلي. عبر حسابه الموثَّق على Instagram روّج شخصيًا للبيع المُسبق لـ $NATRO واستجلب الاستثمار قبل الإطلاق.',
      metaTitle: 'ديفيد ناتروشفيلي — مؤسِّس Spribe والرئيس التنفيذي لها | The NATRO File',
      metaDescription:
        'من هو ديفيد ناتروشفيلي؟ مؤسِّس Spribe والرئيس التنفيذي لها ووالد مؤسِّس $NATRO ألكس ناتروشفيلي. عبر حسابه الموثَّق على Instagram روّج شخصيًا للبيع المُسبق لـ $NATRO («with me & @natroalex»، حد أدنى 1.5k) قبل إطلاق 21 May 2026. ملف موثَّق.',
      handleNotes: [undefined, 'موثَّق', undefined],
      sections: [
        {
          heading: 'من هو',
          body: `ديفيد ناتروشفيلي هو مؤسِّس **Spribe** والرئيس التنفيذي لها، استوديو الـ iGaming صاحب منتج المقامرة العالمي من نوع crash المعروف باسم Aviator. يحمل ماجستير إدارة الأعمال من Kutztown University of Pennsylvania (دفعة 2001)؛ والمكتب الرئيس لـ Pennsylvania Small Business Development Center في كوتزتاون [يحمل اسمه](https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/) عقب تبرّع خيري في ربيع 2025. وهو والد [ألكس ناتروشفيلي](/people/alex-natroshvili)، مؤسِّس عملة الميم $NATRO على شبكة Solana.`,
        },
        {
          heading: 'روّج للبيع المُسبق شخصيًا',
          body: `لم يكن ديفيد ناتروشفيلي مجرد خلفية سمعة يُستحضَر اسمها. فعبر حسابه الخاص **الموثَّق** على Instagram (@davidnatro1)، في الساعات السابقة للإطلاق، روّج شخصيًا للبيع المُسبق لـ $NATRO بصيغة المتكلِّم واستجلب الاستثمار. والستوريز محفوظة ضمن مجموعة مُستندات الملف:

*«If you want to get involved in the crypto project presale **with me & @natroalex** — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k.»* (الوثيقة 22)

*«We're opening private access to **our** crypto project presale **with me & @natroalex** — Telegram by DM · 1.5k min entry · Limited access available.»* (الوثيقة 24)

*«I have many celebs on the line to post about natro this will be crazy🔥»* (الوثيقة 21)

كما أعاد نشر الفيديو الترويجي المدفوع لصانع المحتوى المؤثِّر @jrcryptex (114K متابع) في ستوريز حسابه — *«It's called NATRO»* (الوثيقة 2). ووجّه عرض البيع المُسبق المشترين المحتملين إلى حد أدنى قدره $1,500 وإلى حساب Telegram الخاص بألكس ناتروشفيلي (@natroalex1).`,
        },
        {
          heading: 'موثَّق مقابل ما هو قيد التحقق',
          body: `**موثَّق:** أن ديفيد ناتروشفيلي روّج شخصيًا وعلنًا للبيع المُسبق لـ $NATRO واستجلب الاستثمار من حسابه الموثَّق، بصيغة المتكلِّم («with me»، «our crypto project»)، ثابتٌ بستوريزه الخاصة التي التُقطت قبل انتهائها.

**قيد التحقق الجنائي:** أمّا إلى أين ذهبت أموال البيع المُسبق، وما إذا كان ديفيد ناتروشفيلي قد تحكّم في أي محفظة للمشروع أو تلقّى منها أموالًا، فلا يُؤكَّد هنا. وإثبات ذلك يتطلب عملًا على السلسلة لا يزال جاريًا. ويفصل الملف ما يُظهره السجلّ العام بالفعل عمّا لا يزال يتطلب إثباتًا.`,
        },
        {
          heading: 'ملاحظة عن النطاق',
          body: `يتعلق هذا الملف بإطلاق توكن $NATRO في May 2026. وهو لا يقدّم ادّعاءات بشأن منتجات المقامرة المرخّصة لـ Spribe أو نشاطها التجاري الأوسع، التي لها وضعها القانوني الخاص في ولايات قضائية متعددة وتقع خارج نطاق هذا السجلّ.`,
        },
        {
          heading: 'حق الرد',
          body: `ديفيد ناتروشفيلي وSpribe مدعوّان للرد. وقد أُرسل إشعار رسمي إلى العناوين القانونية والمؤسسية المنشورة لـ Spribe في 25 May 2026. وستُنشر التصويبات الوقائعية الموثَّقة مع السجلّ. بيانات الاتصال على [صفحة الصحافة](/press).`,
        },
      ],
      sourceLabels: [
        'ستوريز Instagram قبل الإطلاق، @davidnatro1 (موثَّق) — الوثائق 21 و22 و24 (عرض البيع المُسبق) والوثيقة 2 (إعادة نشر الترويج)، في معرض الملف',
        'أرشيف Wayback لموقع natrocoin.net (قبل الإزالة، قسم المؤسِّس)',
        'Kutztown University Foundation — مكتب SBDC الذي يحمل اسمه',
        'Spribe — صفحة الشركة',
      ],
    },
  },
  chrome: {
    namedParties: 'الأطراف المُسمّاة',
    indexKicker: '§ الأطراف المُسمّاة',
    indexH1: 'الأشخاص المُسمّون في هذا الملف',
    indexStandfirst:
      'كلٌّ منهم عرّف عن نفسه عبر تسويق إطلاق $NATRO — لم يكشفه هذا الملف. كل ملف شخصي وقائعي، مُوثَّق المصادر، ويحمل حق رد دائمًا.',
    indexMetaTitle:
      'الأطراف المُسمّاة — ألكس وديفيد ناتروشفيلي | The NATRO File',
    indexMetaDescription:
      'الأشخاص المُسمّون في ملف $NATRO، كلٌّ منهم عرّف عن نفسه عبر تسويق الإطلاق: ألكس ناتروشفيلي (المؤسِّس) وديفيد ناتروشفيلي (الرئيس التنفيذي لـ Spribe). ملفات شخصية منفصلة مع روابط للمصادر.',
    readFullProfile: 'اقرأ الملف الكامل →',
    storiesHeading: 'لقطات شاشة · مصادر أوّلية',
    storiesNote:
      'التُقطت قبل كل عملية حذف أو إيقاف أو انتهاء أو حظر. اضغط على أي لقطة شاشة لفتح المُستند بالدقة الكاملة.',
    sources: 'المصادر',
    whereToNext: 'إلى أين بعد ذلك',
    davidAwardTitle: 'الأكثر نفوذًا رقم 1 في الـ iGaming →',
    davidAwardSub: 'جائزة «Game Changers 2026» — على خلفية سجلّ $NATRO',
    fullFile: 'الملف الكامل →',
    fullFileSub: 'الوعد · الواقع · التنظيف · الأصوات · الأشخاص · المصادر',
    onchain: 'التحقق على السلسلة →',
    onchainSub: 'الحالة الراهنة للتوكن، نشاط محفظة المُنشئ',
    press: 'حقيبة الصحافة وحق الرد →',
    pressSub: 'قائمة التحقق من الوقائع، جهات الاتصال، الإشعار الرسمي',
  },
};
