/**
 * 英語FAQの中身。
 *
 * 設問は ScubaBoard と TripAdvisor に実際に投稿されている質問から選んでいる
 * （2026-09調査）。想像で作った質問は入れていない。
 *
 * 回答はアバロの公開情報（料金表・営業情報）に基づく事実だけを断定し、
 * 確認していないことは「聞いてください」に寄せている。特に英語対応力は
 * 過大に書かない（スタッフは日本人で、日常英語レベルという前提）。
 */
export type Faq = { q: string; a: string };
export type FaqGroup = { id: string; title: string; intro?: string; items: Faq[] };

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: 'language',
    title: 'Language and booking',
    intro:
      'The single most common question from divers visiting Japan is simply “can I find a shop that will take me?”. Here is an honest answer.',
    items: [
      {
        q: 'Do you speak English?',
        a: 'We are a Japanese shop and our guiding is in Japanese. Our staff handle everyday English rather than fluent English. In practice this works better than people expect: briefings use the standard hand signals and a site map, and the diving itself is visual. Write to us in English and we will reply in English. If you need something that genuinely depends on language — a full certification course, for example — tell us up front and we will be straight with you about what we can and cannot do well.',
      },
      {
        q: 'I emailed a Japanese dive shop and never heard back. Will that happen here?',
        a: 'This is a common complaint about diving in Japan, and it is usually a language problem rather than rudeness. Use LINE if you can — it reaches us fastest and we can reply there. Otherwise use the enquiry form or phone. If you have not heard from us in three business days, please chase us; something has gone wrong.',
      },
      {
        q: 'Can I dive on a weekday?',
        a: 'Yes. We run tours every day except Tuesday, when the shop is closed. Visitors are often told that English-friendly diving in Japan only happens at weekends because it depends on Tokyo-based clubs. We are a local shop on the Izu coast, so weekdays are normal for us — and quieter underwater.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'The earlier the better, especially for summer weekends and for boat sites. Tell us your dates, how many people, and your certification level, and we will come back with what is possible.',
      },
    ],
  },
  {
    id: 'access',
    title: 'Getting here from Tokyo',
    intro:
      'Most guides to diving near Tokyo assume you have a rental car. You do not need one to dive with us.',
    items: [
      {
        q: 'Can I dive here without a car?',
        a: 'Yes. We pick you up free of charge from Shimizu, Numazu or Mishima station and bring you back. Tell us which station when you book. This is the part that makes Izu diving awkward for visitors without a car, and it is the part we cover.',
      },
      {
        q: 'How do I get here from Tokyo?',
        a: 'Mishima is a Kodama stop on the Tokaido Shinkansen, roughly 45–60 minutes from Tokyo Station. Shizuoka is about an hour, then a short local train to Shimizu. From any of those stations we collect you. Please check current timetables when you plan.',
      },
      {
        q: 'Is this a day trip from Tokyo, or should I stay overnight?',
        a: 'Both work. A day trip is realistic if you take an early train — you would be back in Tokyo the same evening. Staying a night nearby is more relaxed and makes two days of diving straightforward. Tell us which you are planning and we will set the timing around it.',
      },
      {
        q: 'Where exactly are you?',
        a: 'Diving Shop ABARO, 2-5-8 Uehara, Shimizu-ku, Shizuoka. We are open 11:00–20:00 and closed on Tuesdays. There is parking for ten cars if you do drive.',
      },
    ],
  },
  {
    id: 'certification',
    title: 'Certification and experience',
    items: [
      {
        q: 'Is my certification card valid in Japan?',
        a: 'Cards from the recognised agencies — PADI, SSI, NAUI, BSAC, CMAS and the others — are accepted here. Bring the physical card or the digital version on your phone.',
      },
      {
        q: 'Do I need my logbook?',
        a: 'Bring it if you have it. It is not always asked for, but some sites want to see recent experience, and it saves a conversation. If you have lost your certification card, contact us before you book rather than on the day.',
      },
      {
        q: 'I have not dived in a few years. Can I still join?',
        a: 'Tell us how long it has been and how many dives you have. A refresher before a normal tour is usually the sensible answer, and for some sites it is required. We would rather sort this out before you travel than on the morning.',
      },
      {
        q: 'I have no licence at all. Can I still dive?',
        a: 'Yes. Our try-dive is 40 minutes with an instructor beside you the whole time, no experience needed, ¥12,650 with everything included. If you want the full certification, the PADI Open Water course is three days at ¥60,480, which covers tuition, sea training, rental gear, certification and materials.',
      },
      {
        q: 'Does the Open Water course have to be three days in a row?',
        a: 'The course is three days of training. Whether they can be split depends on the schedule and the sea, so ask us with your dates and we will tell you honestly what is possible.',
      },
    ],
  },
  {
    id: 'season',
    title: 'Season, water temperature and what to wear',
    intro:
      'Izu is a temperate sea, so it is colder than tropical diving and the seasons matter. It is divable all year.',
    items: [
      {
        q: 'What is the water temperature?',
        a: 'As a rough guide for Izu: winter roughly 14–17°C, spring 16–20°C, summer 23–27°C, autumn 20–25°C. The warmest water is usually late summer into early autumn. We will tell you the current temperature when you book.',
      },
      {
        q: 'Is my 3mm or 5mm wetsuit enough?',
        a: 'In midsummer a 5mm is usually comfortable and a 3mm is thin for most people. Outside summer, 5mm with a hood and gloves is the minimum most divers want, and from late autumn through spring a drysuit is the normal choice here. If you are bringing your own suit, tell us the thickness and your dates and we will tell you whether it will be enough.',
      },
      {
        q: 'I have never worn a drysuit. Does that rule out winter diving?',
        a: 'No. We rent drysuits at ¥3,300 for the day, or a full drysuit-season set at ¥9,460, and we will take you through how to use one. Tell us in advance that it will be your first time so we allow enough time before the dive.',
      },
      {
        q: 'When is the best time of year to dive here?',
        a: 'There is no single answer. Late summer and autumn give the warmest water and the best chance of big pelagic sightings. Winter usually gives the clearest water and the quietest sites. Spring brings a lot of small life for macro and photography. Tell us what you want to see and we will tell you when to come.',
      },
      {
        q: 'What about typhoons and the rainy season?',
        a: 'June and July can bring rain, and typhoon season runs through late summer and early autumn. Rain itself does not stop diving; swell does. We check conditions and, if a site is unsafe, we move to a sheltered one rather than cancel where we can.',
      },
    ],
  },
  {
    id: 'equipment',
    title: 'Equipment',
    items: [
      {
        q: 'Can I rent everything? I am travelling with hand luggage only.',
        a: 'Yes. A full rental set is ¥8,470 in wetsuit season and ¥9,460 in drysuit season. Individual items are available too — wetsuit ¥1,650, drysuit ¥3,300, dive computer ¥1,650, and so on. Many visitors bring only their own mask.',
      },
      {
        q: 'Do I need a dive computer?',
        a: 'Yes. Everyone on an ABARO tour wears a dive computer on every dive. If you do not own one, rent ours for ¥1,650.',
      },
      {
        q: 'Are the gauges in bar or psi?',
        a: 'Japan uses bar. If your gauge reads in psi, tell your guide at the briefing and simply show them the needle when they ask for your air — it is not a problem, but it is worth mentioning so nobody misreads it.',
      },
      {
        q: 'Can I bring my own tank?',
        a: 'No. Japan only permits cylinders that carry a Japanese KHK approval mark, so overseas tanks cannot be filled or used here. Tanks are included in the tour price anyway.',
      },
      {
        q: 'Will the rental gear fit me?',
        a: 'Tell us your height, weight and shoe size when you book. Sizes and stock are limited, so we cannot always supply the exact type you want, but knowing in advance lets us prepare. We do not stock prescription masks.',
      },
    ],
  },
  {
    id: 'price',
    title: 'Prices and what is included',
    intro:
      'Diving in Japan often looks confusing from outside because facility fees, sea-use fees paid to the local fishery association, tanks and insurance are quoted separately. Our tour prices already include all of them.',
    items: [
      {
        q: 'What does a day of diving actually cost?',
        a: 'The tour price covers guiding, facility fees, tanks, weights, insurance, lunch and transport from the shop. Examples: Miho 2 beach dives ¥14,850, Osezaki 2 beach dives ¥18,150, Futo or Kawana 2 beach dives ¥21,450, Izu Ocean Park 2 beach dives ¥22,000, Kumomi 2 boat dives ¥25,300. Rental equipment is the only usual extra.',
      },
      {
        q: 'Are there hidden fees on the day?',
        a: 'No. The sea-use fee paid to the local fishery association and the facility fee at the dive site are already inside the price shown. What is not included is rental gear, and any additional dive you decide to add on the day.',
      },
      {
        q: 'How do I pay?',
        a: 'Cash, major credit cards and electronic money are accepted at the shop.',
      },
    ],
  },
  {
    id: 'how',
    title: 'How diving works in Japan',
    intro:
      'Diving here is run differently from much of the world. Knowing this in advance avoids surprises.',
    items: [
      {
        q: 'Will a guide always be with me? Can I just dive with my buddy?',
        a: 'A shop guide leads the dive. This is the norm throughout Japan, not a rule we invented: the sea is managed by local fishery associations and access is arranged through the dive centres, which take responsibility for who is in the water. If you are used to independent buddy diving, this will feel more structured than you are used to.',
      },
      {
        q: 'How long are the dives?',
        a: 'A typical dive runs around 40–50 minutes. The group surfaces together, so the dive ends when the first diver in the group reaches their air limit. If you are a light breather you may find dives shorter than you are used to.',
      },
      {
        q: 'How big are the groups?',
        a: 'Small. We are a small shop, which is the main reason groups stay small. Tell us if you are diving with a camera and want to move slowly — it is easier for us to accommodate that than most shops.',
      },
    ],
  },
  {
    id: 'solo',
    title: 'Solo travellers, families and non-divers',
    items: [
      {
        q: 'I am travelling alone. Can I still join, and who will I dive with?',
        a: 'Yes, and this is genuinely normal for us — solo divers join almost every tour. You dive within the guided group, so you do not need to arrive with a buddy.',
      },
      {
        q: 'My partner does not dive. Can they come along?',
        a: 'Ask us with your dates. What makes sense depends on which site we are going to, since some have more to do on land than others.',
      },
      {
        q: 'Can children take part?',
        a: 'Ask us with their ages. Minimum ages differ between the try-dive and the certification courses, and anyone under 18 needs a parent or guardian to sign.',
      },
      {
        q: 'I am not a strong swimmer.',
        a: 'Tell us before you book. For a try-dive this is usually fine, since an instructor stays with you throughout. Certification courses include swimming and float requirements, so it matters there.',
      },
    ],
  },
  {
    id: 'sites',
    title: 'Dive sites around Izu',
    intro: 'We run to more than thirty sites across the Izu Peninsula, plus Chiba and Kanagawa.',
    items: [
      {
        q: 'Can I do both Osezaki and Izu Ocean Park on one trip?',
        a: 'Yes. They are on opposite coasts of the peninsula, so we would normally run them on separate days rather than the same day. Give us the number of days you have and we will build a sensible route.',
      },
      {
        q: 'Do I need cave training for Kumomi?',
        a: 'No. The formations at Kumomi are caverns rather than true caves, and recreational divers dive them. It is a boat site: 2 boat dives ¥25,300.',
      },
      {
        q: 'Can I dive Mikomoto for hammerheads?',
        a: 'We run it — 2 boat dives ¥30,800, 3 boat dives ¥41,800. It is an advanced site with real current, and operators there normally require an Advanced certification and a substantial number of logged dives, plus the ability to deploy an SMB. Tell us your certification and dive count and we will tell you straight whether it is on for you and when to come.',
      },
      {
        q: 'How far do I have to carry a tank at beach sites?',
        a: 'It varies by site, and at some Izu beach entries it is a real walk over uneven ground. If that is a concern, say so — we can pick a site with an easier entry, or put you on boat dives instead.',
      },
      {
        q: 'Are the popular sites crowded in summer?',
        a: 'Izu Ocean Park and Futo do get busy on summer weekends. Weekdays are much quieter, and we can suggest sites that stay calm even in season.',
      },
    ],
  },
  {
    id: 'misconceptions',
    title: 'Things visitors often get wrong about diving here',
    items: [
      {
        q: 'Is the water dirty because it is near Tokyo Bay?',
        a: 'No — this is a map-reading mistake we hear often. Izu does not face Tokyo Bay. The west coast, where Osezaki and Kumomi are, faces Suruga Bay, one of the deepest bays in Japan. The east coast faces the open Sagami Sea. Winter visibility here is frequently better than tropical destinations.',
      },
      {
        q: 'Is Okinawa the only place worth diving in Japan?',
        a: 'Okinawa is warmer and tropical, and it is a long flight south. Izu is the main diving region of mainland Japan, reachable from Tokyo in about an hour, divable all year, and known for macro life, seasonal pelagics and dramatic rock topography. If your trip is not built entirely around diving, Izu is far easier to fit in.',
      },
      {
        q: 'Is Japanese diving too cold to be worth it?',
        a: 'It is a temperate sea, so exposure protection matters more than in the tropics. With the right suit — which we rent — winter diving here is comfortable and the visibility is at its best.',
      },
    ],
  },
  {
    id: 'safety',
    title: 'Health, safety and practical points',
    items: [
      {
        q: 'Am I insured?',
        a: 'Diving insurance is included in our tour prices. If you already hold your own cover, bring the details.',
      },
      {
        q: 'Do I need a medical certificate?',
        a: 'You will complete a standard medical questionnaire. If you answer yes to any of the conditions on it, you need a doctor’s sign-off before diving. Some sites apply their own age and health requirements. If you take regular medication or have a condition you are unsure about, contact us before you travel — not on the morning of the dive.',
      },
      {
        q: 'How long before flying?',
        a: 'Follow the standard guidance from your training agency: as a rule of thumb, leave at least 18 hours after repetitive diving before you fly. Plan your last diving day accordingly.',
      },
      {
        q: 'Are there jellyfish in summer?',
        a: 'Numbers rise from late summer. It varies by site and by day, and we check before we go in. A full wetsuit and a hood take care of most of it.',
      },
      {
        q: 'What should I bring on the day?',
        a: 'Swimwear, a towel, and your certification card. Lunch and drinking water are covered by the tour. Bring your own mask and dive computer if you own them; everything else can be rented.',
      },
    ],
  },
];
