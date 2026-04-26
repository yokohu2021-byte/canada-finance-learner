import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../../lib/i18n";

const copy = {
  en: {
    title: "About Canada Finance Learner",
    body: [
      "Canada Finance Learner is a multilingual financial education article site for newcomers, founders, small business owners, and self-learners in Canada.",
      "The website shares general financial knowledge, learning notes, and plain-language explanations. It is not a financial advisory firm and does not provide personal investment, tax, legal, or financial advice.",
    ],
  },
  fr: {
    title: "À propos de Canada Finance Learner",
    body: [
      "Canada Finance Learner est un site d’articles d’éducation financière multilingue destiné aux nouveaux arrivants, entrepreneurs, propriétaires de petites entreprises et autodidactes au Canada.",
      "Le site partage des connaissances financières générales, des notes d’apprentissage et des explications simples. Il ne s’agit pas d’un cabinet de conseil financier et il ne fournit pas de conseils financiers, fiscaux, juridiques ou en investissement personnalisés.",
    ],
  },
  zh: {
    title: "关于 Canada Finance Learner",
    body: [
      "Canada Finance Learner 是一个面向加拿大新移民、创业者、小生意主和金融自学者的多语言金融知识文章网站。",
      "本站分享一般金融知识、学习笔记和通俗解释。本站不是金融顾问机构，不提供个人投资、税务、法律或财务建议。",
    ],
  },
};

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-ink">{copy[locale].title}</h1>
      <div className="mt-8 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100 sm:p-8">
        {copy[locale].body.map((text) => (
          <p key={text} className="mb-5 text-base leading-8 text-muted last:mb-0">{text}</p>
        ))}
      </div>
    </section>
  );
}
