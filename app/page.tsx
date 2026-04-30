import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdSlot from "../components/AdSlot";
import ArticleCard from "../components/ArticleCard";
import ConsultationCTA from "../components/ConsultationCTA";
import { getArticles } from "../content/articles";
import { categories, siteCopy, type Locale } from "../lib/i18n";

const locale: Locale = "en";

export default function RootHomePage() {
  const copy = siteCopy[locale];
  const latest = getArticles(locale).slice(0, 3);

  return (
    <div className="min-h-screen bg-paper">
      <Header locale={locale} />
      <main>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{copy.hero.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-bold tracking-tight text-ink sm:text-6xl">{copy.hero.title}</h1>
            <p className="mt-6 text-xl leading-8 text-muted">{copy.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/en/free-consultation" className="rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-blue-700">
                {copy.hero.cta}
              </Link>
              <Link href="/en/articles" className="rounded-full bg-white px-6 py-3 font-semibold text-ink ring-1 ring-slate-200 hover:bg-slate-50">
                {copy.hero.secondary}
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">{copy.categoriesTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {categories[locale].map((category) => (
              <div key={category.title} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
                <h3 className="font-semibold text-ink">{category.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <AdSlot />
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">{copy.latestArticles}</h2>
            <Link href="/en/articles" className="text-sm font-semibold text-brand hover:text-blue-700">
              {copy.nav.articles} →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {latest.map((article) => (
              <ArticleCard key={article.slug} locale={locale} {...article} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <ConsultationCTA locale={locale} />
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
