import { notFound } from "next/navigation";
import ArticleCard from "../../../components/ArticleCard";
import { getArticles } from "../../../content/articles";
import { isLocale, siteCopy, type Locale } from "../../../lib/i18n";

export default function ArticlesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const articles = getArticles(locale);
  const copy = siteCopy[locale];

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-ink">{copy.nav.articles}</h1>
      <p className="mt-4 max-w-2xl text-muted">{copy.hero.subtitle}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} locale={locale} {...article} />
        ))}
      </div>
    </section>
  );
}
