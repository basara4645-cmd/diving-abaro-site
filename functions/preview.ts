// Cloudflare Pages Function: microCMS「画面プレビュー」用
// 下書き記事を取得して簡易プレビューを表示する（本番ページと同じ見た目ではなく最低限の確認用）
// microCMS側の「画面プレビューURL」設定に以下を登録:
//   https://<このサイトのドメイン>/preview?id={CONTENT_ID}&draftKey={DRAFT_KEY}&contentType=blog
interface Env { MICROCMS_SERVICE_DOMAIN?: string; MICROCMS_API_KEY?: string }

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  const draftKey = url.searchParams.get('draftKey');
  const contentType = url.searchParams.get('contentType') || 'blog';

  const page = (title: string, body: string) =>
    new Response(
      `<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${escapeHtml(title)}</title>
      <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Shippori+Mincho:wght@500;700&display=swap" rel="stylesheet">
      <style>
        :root{--navy:#0a1a33;--ocean:#1a5fb4;--sun:#ffb703;--sand:#f6f1e8;--ink:#17202c;--ink-2:#4a5566;--line:#d9d2c4;}
        *{box-sizing:border-box}
        body{margin:0;font-family:'Zen Kaku Gothic New','Hiragino Sans',sans-serif;background:var(--sand);color:var(--ink);line-height:1.85}
        .banner{background:var(--navy);color:#fff;text-align:center;padding:0.7rem;font-weight:700;font-size:0.9rem;letter-spacing:0.05em}
        .wrap{max-width:760px;margin:0 auto;padding:2.5rem 1.5rem 5rem}
        .meta{color:var(--ocean);font-weight:700;margin-bottom:0.5rem}
        h1{font-size:1.7rem;line-height:1.5;margin:0 0 2rem}
        .prose img{max-width:100%;border-radius:10px;margin:1.2rem auto;display:block}
        .prose h2{border-left:5px solid var(--sun);padding-left:0.7rem;color:var(--navy);margin:2rem 0 0.8rem}
        .prose a{color:var(--ocean)}
        .err{max-width:640px;margin:4rem auto;text-align:center;color:var(--ink-2)}
      </style></head><body>${body}</body></html>`,
      { headers: { 'content-type': 'text/html; charset=utf-8' } }
    );

  if (!id || !draftKey) {
    return page('プレビュー設定エラー', `<div class="err"><h1>プレビューできません</h1><p>記事IDまたは下書きキーが指定されていません。microCMSの「画面プレビュー」ボタンから開いてください。</p></div>`);
  }
  if (!env.MICROCMS_SERVICE_DOMAIN || !env.MICROCMS_API_KEY) {
    return page('プレビュー設定エラー', `<div class="err"><h1>プレビューできません</h1><p>サイト側の設定が未完了です（開発者にご連絡ください）。</p></div>`);
  }

  const apiUrl = `https://${env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/${contentType}/${id}?draftKey=${encodeURIComponent(draftKey)}`;
  const res = await fetch(apiUrl, { headers: { 'X-MICROCMS-API-KEY': env.MICROCMS_API_KEY } });
  if (!res.ok) {
    return page('プレビューできません', `<div class="err"><h1>下書きを取得できませんでした</h1><p>記事が見つからないか、下書きキーの有効期限が切れています。microCMSの画面を開き直してもう一度お試しください。</p></div>`);
  }
  const data = await res.json<any>();
  const title: string = data.title || '(無題)';
  const date: string = data.date || data.createdAt || '';
  const category: string = data.category?.name ? `${data.category.name} ／ ` : '';
  const content: string = data.content || '';
  const dateStr = date ? new Date(date).toLocaleDateString('ja-JP') : '';

  return page(
    title,
    `<div class="banner">下書きプレビュー（この内容はまだ公開されていません）</div>
     <div class="wrap">
       <p class="meta">${category}${dateStr}</p>
       <h1>${escapeHtml(title)}</h1>
       <div class="prose">${content}</div>
     </div>`
  );
};
