import { Metadata } from "next";
import { notFound } from "next/navigation";
import AdSlot from "../../../../components/AdSlot";
import ConsultationCTA from "../../../../components/ConsultationCTA";
import DisclaimerBanner from "../../../../components/DisclaimerBanner";
import { articles, getArticle } from "../../../../content/articles";
import { isLocale, type Locale } from "../../../../lib/i18n";

export function generateStaticParams() {
  return articles.flatMap((article) => [
    { locale: "en", slug: article.slug },
    { locale: "fr", slug: article.slug },
    { locale: "zh", slug: article.slug },
  ]);
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const article = getArticle(params.locale as Locale, params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Canada Finance Learner`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const article = getArticle(locale, params.slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <div className="flex flex-wrap gap-2 text-xs text-muted">
        <span className="rounded-full bg-soft px-3 py-1 text-brand">{article.category}</span>
        <span className="px-1 py-1">{article.date}</span>
      </div>
      <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">{article.title}</h1>
      <p className="mt-5 text-lg leading-8 text-muted">{article.excerpt}</p>
      <div className="mt-6">
        <DisclaimerBanner locale={locale} />
      </div>
      <AdSlot />
      <div className="article-body mt-8 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100 sm:p-8">
        {article.content.map((block, index) => {
          if (block.type === "heading") return <h2 key={index}>{block.text}</h2>;
          if (block.type === "list") {
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }
          return <p key={index}>{block.text}</p>;
        })}
      </div>
      <AdSlot />
      <div className="mt-8">
        <ConsultationCTA locale={locale} />
      </div>
    </article>
  );
}
