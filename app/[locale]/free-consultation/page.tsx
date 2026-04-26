import { notFound } from "next/navigation";
import ConsultationForm from "../../../components/ConsultationForm";
import { isLocale, type Locale } from "../../../lib/i18n";

const pageCopy = {
  en: {
    title: "Book a Free 1-Hour Consultation with a Licensed Financial Advisor in Canada",
    subtitle:
      "Have questions about Canadian personal finance, investing basics, accounts, funds, insurance, or financial planning? Submit your question here. Your question will be reviewed by a licensed financial advisor in Canada, with a free 1-hour initial consultation available.",
    note:
      "This website is for financial education and information sharing only. It does not provide personal investment, tax, legal, or financial advice. Any specific guidance should come directly from a licensed financial advisor in Canada.",
  },
  fr: {
    title: "Réserver une consultation gratuite d’une heure avec un conseiller financier agréé au Canada",
    subtitle:
      "Vous avez des questions sur les finances personnelles au Canada, les bases de l’investissement, les comptes, les fonds, l’assurance ou la planification financière? Soumettez votre question ici. Elle sera examinée par un conseiller financier agréé au Canada, avec une consultation initiale gratuite d’une heure disponible.",
    note:
      "Ce site est destiné au partage de connaissances financières et d’informations générales seulement. Il ne constitue pas un conseil personnel en investissement, en fiscalité, en droit ou en finances. Toute recommandation spécifique doit provenir directement d’un conseiller financier agréé au Canada.",
  },
  zh: {
    title: "预约加拿大持证金融顾问免费 1 小时咨询",
    subtitle:
      "如果你有关于加拿大理财、投资基础、账户选择、基金、保险或财务规划的问题，可以在这里提交。你的问题将由加拿大持证金融顾问进行初步接待，并可获得免费 1 小时咨询。",
    note:
      "本站内容仅用于金融知识分享与信息交流，不构成个人投资、税务、法律或财务建议。具体建议请以加拿大持证金融顾问的正式沟通为准。",
  },
};

export default function FreeConsultationPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const copy = pageCopy[locale];

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Canada Finance Learner</p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">{copy.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted">{copy.subtitle}</p>
        <div className="mt-8 rounded-2xl bg-blue-50 p-5 text-sm leading-6 text-blue-900 ring-1 ring-blue-100">
          {copy.note}
        </div>
      </div>
      <ConsultationForm locale={locale} />
    </section>
  );
}
