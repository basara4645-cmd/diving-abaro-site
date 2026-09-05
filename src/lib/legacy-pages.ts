/** 旧サイトの固定ページ定義。URLは旧サイトのまま維持する（SEOを一切落とさないため） */
export type LegacyPage = {
  slug: string;      // src/data/legacy/<slug>.json
  path: string;      // 公開URL（旧サイトと同じ）
  title: string;
  description: string;
};

export const LEGACY_PAGES: LegacyPage[] = [
  {
    slug: 'license',
    path: '/各種ライセンスコース/',
    title: '各種ライセンスコース',
    description:
      'PADIのライセンス取得コース。オープンウォーターからアドバンス、EFR、レスキュー、ダイブマスターまで。毎日1名様から開催、静岡・清水のダイビングショップ アバロ。',
  },
  {
    slug: 'experience',
    path: '/experience-diving-2/',
    title: 'EXPERIENCE DIVING 体験ダイビング',
    description:
      '40分間の体験ダイビング。器材の装着から呼吸の仕方までインストラクターが全てサポート。お一人様大歓迎、追加料金なしのコミコミ価格12,650円。',
  },
  {
    slug: 'padi-open-water-course',
    path: '/padi-open-water-course/',
    title: 'PADI オープンウォーターコース',
    description:
      'PADIオープンウォーターダイバーコース。3日間・60,480円（税込）。学科講習費・海洋講習費・レンタル器材・申請費・教材費すべて込み。',
  },
  {
    slug: 'padi-advanced-open-water-course',
    path: '/padi-advanced-open-water-course/',
    title: 'PADI アドバンスド・オープンウォーターコース',
    description:
      'PADIアドバンスド・オープンウォーターコース。2日間・69,300円（税込）。課題の異なる5種類のダイビングでご自分に合ったスタイルを見つけられます。',
  },
  {
    slug: 'padi-emergency-first-response',
    path: '/padi-emergency-first-response/',
    title: 'PADI エマージェンシー・ファースト・レスポンス',
    description:
      'PADI EFRコース。1日間・19,800円（税込）。心停止など生命にかかわる一次ケアとケガや病気の二次ケアを学ぶプログラム。ダイバーでなくても受講できます。',
  },
  {
    slug: 'padi-rescue-diver-class',
    path: '/padi-rescue-diver-class/',
    title: 'PADI レスキューダイバーコース',
    description:
      'PADIレスキューダイバーコース。2日間・66,000円（税込）。トラブルに対処する知識と、未然に防ぐ能力を身につけるコースです。',
  },
  {
    slug: 'padi-dive-master-course',
    path: '/padi-dive-master-course/',
    title: 'PADI ダイブマスターコース',
    description:
      'PADIダイブマスターコース。12日間〜・248,000円（税込）。プロフェッショナルへの最初のステップ。修了後はダイバー達のリーダーとして活躍できます。',
  },
  {
    slug: 'tours',
    path: '/tours-price/',
    title: 'TOURS スケジュール＆料金',
    description:
      '伊豆半島30か所以上のダイビングポイントで日帰りツアーを開催。沖縄・海外・千葉などの遠征ツアーも。お一人様歓迎、清水・沼津・三島から無料送迎。',
  },
  {
    slug: 'tours-price',
    path: '/one-day-tour-日帰りツアー料金/',
    title: 'ONE DAY TOUR 日帰りツアー料金',
    description:
      '伊豆・三保・千葉・神奈川の日帰りダイビングツアー料金表。ガイド料・施設使用料・タンク代・保険・ランチ代まで含んだコミコミ価格。',
  },
  {
    slug: 'tours-rental',
    path: '/rentel-equipment-materials-レンタル器材料金/',
    title: 'RENTEL EQUIPMENT MATERIALS レンタル器材料金',
    description:
      'ダイビング器材のレンタル料金表。1日レンタルと年間パスポート。フルレンタルはウエット8,470円・ドライ9,460円。',
  },
  {
    slug: 'tours-points',
    path: '/diving-point/',
    title: 'DIVING POINT ダイビングポイント一覧',
    description:
      'アバロが開催する伊豆半島・千葉・神奈川のダイビングポイント紹介。西伊豆・東伊豆・南伊豆・千葉・その他エリア。',
  },
  {
    slug: 'store',
    path: '/store/',
    title: 'STORE 店舗情報',
    description:
      'ダイビングショップ アバロの店舗情報。静岡市清水区上原2-5-8、営業時間11:00〜20:00、定休日火曜日、駐車場10台。スタッフ紹介・会社概要・アクセス。',
  },
  {
    slug: 'contact',
    path: '/contact/',
    title: 'CONTACT お問合せ',
    description:
      'ダイビングショップ アバロへのお問い合わせ。LINEが一番早くお返事できます。お電話 054-689-7441（11:00〜20:00、火曜定休）、メールフォームも。',
  },
  {
    slug: 'newstopics',
    path: '/newstopics/',
    title: 'NEWS&TOPICS 新着情報',
    description: 'ダイビングショップ アバロの新着情報・イベント＆お得情報・ブログ。',
  },
];
