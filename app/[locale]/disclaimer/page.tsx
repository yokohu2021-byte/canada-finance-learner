import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../../lib/i18n";

const copy = {
  en: {
    title: "Disclaimer",
    body: [
      "The content on Canada Finance Learner is provided for educational and informational purposes only.",
      "The website does not provide personal financial, investment, tax, legal, insurance, or accounting advice. Nothing on this website should be interpreted as a recommendation to buy, sell, hold, or use any specific financial product or service.",
      "Readers should consult a licensed or qualified professional before making decisions based on their personal circumstances.",
    ],
  },
  fr: {
    title: "Avertissement",
    body: [
      "Le contenu de Canada Finance Learner est fourni uniquement à des fins éducatives et informatives.",
      "Le site ne fournit pas de conseils financiers, fiscaux, juridiques, d’assurance, comptables ou en investissement personnalisés. Rien sur ce site ne doit être interprété comme une recommandation d’acheter, vendre, conserver ou utiliser un produit ou service financier précis.",
      "Les lecteurs devraient consulter un professionnel agréé ou qualifié avant de prendre des décisions selon leur situation personnelle.",
    ],
  },
  zh: {
    title: "免责声明",
    body: [
      "Canada Finance Learner 的内容仅用于教育和信息交流目的。",
      "本站不提供个人金融、投资、税务、法律、保险或会计建议。本站任何内容都不应被理解为购买、出售、持有或使用任何具体金融产品或服务的建议。",
      "读者应根据个人情况，在作出相关决策前咨询持证或合格专业人士。",
    ],
  },
};

export default function DisclaimerPage({ params }: { params: { locale: string } }) {
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
