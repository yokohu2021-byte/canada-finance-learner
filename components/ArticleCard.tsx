import Link from "next/link";
import type { Locale } from "../lib/i18n";

type Props = {
  locale: Locale;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

export default function ArticleCard({ locale, slug, title, excerpt, date, category }: Props) {
  return (
    <Link href={`/${locale}/articles/${slug}`} className="block rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex flex-wrap gap-2 text-xs text-muted">
        <span className="rounded-full bg-soft px-3 py-1 text-brand">{category}</span>
        <span className="px-1 py-1">{date}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{excerpt}</p>
    </Link>
  );
}
