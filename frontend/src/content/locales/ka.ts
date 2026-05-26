import { extendEn } from './_helpers';

/**
 * Georgian is shipped as a short, accurate summary — not a full translation —
 * pending review by a native speaker (see project handoff §5.6). The English
 * baseline fills in any field this overlay doesn't override.
 */
export const ka = () =>
  extendEn({
    config: {
      siteTitle: 'NATRO საქმე — რეპუტაციის ფასდადების კვლევა',
      tagline: 'რეპუტაციის ფასდადების დოკუმენტირებული საქმე',
      mastheadMeta: 'საქმის კვლევა · პირველადი წყაროებიდან',
      kicker: 'რეპუტაციის ფასდადების დოკუმენტირებული საქმე',
      headline: 'ოჯახის სახელით გაყიდული ტოკენი. 98% ვარდნა. წაშლა.',
      deck: '2026 წლის 21 მაისს, Solana-ზე გაშვებული $NATRO მემკოინი — დაარსებული ალექს ნატროშვილის მიერ, რომელიც არის დავით ნატროშვილის (Spribe-ის დამფუძნებელი და CEO, Aviator-ის შემქმნელი) შვილი. შეთავაზება დაფუძნდა ოჯახის სახელზე. 72 საათში, თანხის დაბრუნებაზე უარის შემდეგ, ვებსაიტი, რეკლამა და სოციალური ბმულები წაიშალა.',
      dateline: [
        { label: 'თარიღი', value: '2026 წლის 26 მაისი' },
        { label: 'საგანი', value: '$NATRO · Solana ტოკენის გაშვება' },
        { label: 'სტატუსი', value: 'საჯარო ჩანაწერი' },
        { label: 'იურისდიქცია', value: 'საერთაშორისო (მონაკო / საქართველო / უკრაინა)' },
      ],
      byline: [
        { label: 'შემდგენელი', value: 'დაზარალებული ადრეული მფლობელი' },
        { label: 'პოზიცია', value: '220,000,000 NATRO (≈22% საცალო მიწოდების)' },
        { label: 'მეთოდი', value: 'მხოლოდ პირველადი წყაროები · ყველაფერი ბმულებში და დაარქივებული' },
      ],
      uiStrings: {
        'nav.promise': '§ I · დაპირება',
        'nav.reality': '§ II · რეალობა',
        'nav.scrub': '§ III · წაშლა',
        'nav.voices': '§ IV · ხმები',
        'nav.people': '§ V · ხალხი',
        'nav.evidence': '§ VI · წყაროები',
        'nav.gallery': '§ VII · გალერეა',
        'nav.stories': 'მკითხველთა ისტორიები',
        'ui.translation_pending': 'თარგმანი მშობლიური ენის სპეციალისტის შემოწმებაშია',
      },
    },
  });
