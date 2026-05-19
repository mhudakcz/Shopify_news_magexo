// Article helpers — derive category, week, date formatters.
// Used by ArticleCard, listing pagination grouping, detail meta sidebar.

export type Cat = 'urgent' | 'breaking' | 'deprecation' | 'uses' | 'customer' | 'opportunity' | 'blog' | 'news';

export interface CatInfo {
  cat: Cat;
  emoji: string;
}

export function deriveCat(data: any): CatInfo {
  const kat: string[] = data.kategorie || [];
  if (data.nalehavost === 'kriticka') return { cat: 'urgent', emoji: '🚨' };
  if (kat.includes('breaking-change')) return { cat: 'breaking', emoji: '🔥' };
  if (kat.includes('deprecation')) return { cat: 'deprecation', emoji: '⏰' };
  if (data.pouzivame_v_integratoru === 'ano') return { cat: 'uses', emoji: '⚙️' };
  if (data.customer_facing === true) return { cat: 'customer', emoji: '👤' };
  if (kat.includes('nova-prilezitost') || kat.includes('nova-api')) return { cat: 'opportunity', emoji: '✨' };
  if (data.zdroj_kanal === 'blog') return { cat: 'blog', emoji: '📝' };
  return { cat: 'news', emoji: '📰' };
}

export function isoWeekKey(d: Date): string {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((+t - +yearStart) / 86400000 + 1) / 7);
  return `${t.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

export function weekRange(d: Date): string {
  // Returns Czech-format range "4. – 10. května 2026"
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayOfWeek = (t.getUTCDay() + 6) % 7; // 0 = Monday
  const monday = new Date(t);
  monday.setUTCDate(t.getUTCDate() - dayOfWeek);
  const sunday = new Date(monday);
  sunday.setUTCDate(monday.getUTCDate() + 6);

  const months = ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];

  if (monday.getUTCMonth() === sunday.getUTCMonth()) {
    return `${monday.getUTCDate()}. – ${sunday.getUTCDate()}. ${months[sunday.getUTCMonth()]} ${sunday.getUTCFullYear()}`;
  }
  return `${monday.getUTCDate()}. ${months[monday.getUTCMonth()]} – ${sunday.getUTCDate()}. ${months[sunday.getUTCMonth()]} ${sunday.getUTCFullYear()}`;
}

export function fmtDateCz(d: Date | string | null | undefined): string {
  if (!d) return '';
  const dd = typeof d === 'string' ? new Date(d) : d;
  return dd.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' });
}

export function fmtDateShortCz(d: Date | string): string {
  const dd = typeof d === 'string' ? new Date(d) : d;
  return dd.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'short' });
}

export const SOURCE_LABEL: Record<string, string> = {
  'dev-changelog': 'Dev Changelog',
  'merchant-changelog': 'Merchant',
  'editions': 'Editions',
  'product-news': 'News',
  'blog': 'Blog',
};

export const URG_LABEL: Record<string, string> = {
  kriticka: 'kritická',
  vysoka: 'vysoká',
  stredni: 'střední',
  nizka: 'nízká',
};
