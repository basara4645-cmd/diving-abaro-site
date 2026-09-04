// Cloudflare Pages Function: お問い合わせフォーム → Resend でメール送信
// 環境変数: RESEND_API_KEY, CONTACT_TO（受信先）, CONTACT_FROM（送信元 例: form@diving-abaro.com）
interface Env { RESEND_API_KEY?: string; CONTACT_TO?: string; CONTACT_FROM?: string }

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
  let fd: FormData;
  try { fd = await request.formData(); } catch { return json({ error: '不正なリクエストです' }, 400); }
  const v = (k: string) => String(fd.get(k) ?? '').trim();
  if (v('company')) return json({ ok: true }); // honeypot
  const name = v('name'), email = v('email'), tel = v('tel'), kind = v('kind'), message = v('message');
  if (!name || !email || !message) return json({ error: '必須項目が未入力です' }, 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'メールアドレスの形式が正しくありません' }, 400);
  if (message.length > 5000) return json({ error: '本文が長すぎます' }, 400);
  if (!env.RESEND_API_KEY || !env.CONTACT_TO) return json({ error: 'メール送信の設定が完了していません。LINEまたはお電話でお問い合わせください。' }, 500);
  const from = env.CONTACT_FROM || 'onboarding@resend.dev';
  const text = `お名前: ${name}\nメール: ${email}\n電話: ${tel || '-'}\n内容: ${kind}\n\n${message}\n\n--\n送信元IP: ${request.headers.get('cf-connecting-ip')}`;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({ from: `ABARO HP <${from}>`, to: env.CONTACT_TO.split(',').map((s) => s.trim()), reply_to: email, subject: `【HPお問い合わせ】${kind} - ${name}様`, text }),
  });
  if (!res.ok) return json({ error: '送信に失敗しました。時間をおいて再度お試しください。' }, 502);
  return json({ ok: true });
};
