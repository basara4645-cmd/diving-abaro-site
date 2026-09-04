import { createClient } from 'microcms-js-sdk';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export type Category = { id: string; name: string; slug: string };
export type Post = {
  id: string;
  title: string;
  date: string; // ISO
  path: string; // site-relative URL with trailing slash
  category: Category | null;
  eyecatch: string | null;
  excerpt: string;
  content: string; // HTML
};

const domain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

const LOCAL = fileURLToPath(new URL('../../../migration/posts-clean.json', import.meta.url));
const LOCAL_CATS = fileURLToPath(new URL('../../../migration/categories-clean.json', import.meta.url));

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

let cache: { posts: Post[]; categories: Category[] } | null = null;

export async function loadAll(): Promise<{ posts: Post[]; categories: Category[] }> {
  if (cache) return cache;
  if (domain && apiKey) {
    const client = createClient({ serviceDomain: domain, apiKey });
    const cats = await client.getAllContents<any>({ endpoint: 'categories' });
    const categories: Category[] = cats.map((c: any) => ({ id: c.id, name: c.name, slug: c.slug ?? c.id }));
    const raw = await client.getAllContents<any>({ endpoint: 'blog' });
    const posts: Post[] = raw.map((r: any) => {
      const date = r.date ?? r.publishedAt ?? r.createdAt;
      const cat = r.category ? categories.find((c) => c.id === r.category.id) ?? null : null;
      const legacy = r.legacyPath && r.legacyPath.length > 1 ? r.legacyPath : null;
      const path = legacy ? legacy : `/blog/${r.id}/`;
      const eyecatch = r.eyecatch?.url ? `${r.eyecatch.url}?w=1200&fm=webp` : r.legacyEyecatch || null;
      const content: string = r.content ?? '';
      const text = stripHtml(content);
      return {
        id: r.id,
        title: r.title,
        date,
        path,
        category: cat,
        eyecatch: eyecatch ?? (content.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? null),
        excerpt: text.slice(0, 90) + (text.length > 90 ? '…' : ''),
        content,
      };
    });
    posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    cache = { posts, categories };
    return cache;
  }
  if (!existsSync(LOCAL)) {
    console.warn('[posts] microCMS未設定・ローカルデータも無いため記事0件でビルドします');
    cache = { posts: [], categories: [] };
    return cache;
  }
  const local = JSON.parse(readFileSync(LOCAL, 'utf8'));
  const categories: Category[] = JSON.parse(readFileSync(LOCAL_CATS, 'utf8'));
  const posts: Post[] = local.map((p: any) => ({
    id: p.id,
    title: p.title,
    date: p.date,
    path: p.legacyPath,
    category: p.category ? { id: p.category.slug, ...p.category } : null,
    eyecatch: p.eyecatch,
    excerpt: p.excerpt,
    content: p.content,
  }));
  cache = { posts, categories };
  return cache;
}

export function fmtDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

export function paginate<T>(items: T[], size: number) {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) pages.push(items.slice(i, i + size));
  return pages.length ? pages : [[]];
}
