import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../../lib/i18n";

const copy = {
  en: {
    title: "Contact",
    text: "For general questions about Canada Finance Learner, please use the consultation form or email the site operator.",
  },
  fr: {
    title: "Contact",
    text: "Pour toute question générale concernant Canada Finance Learner, veuillez utiliser le formulaire de consultation ou envoyer un courriel à l’exploitant du site.",
  },
  zh: {
    title: "联系",
    text: "如有关于 Canada Finance Learner 的一般问题，请使用咨询表单，或通过邮箱联系网站运营方。",
  },
};

export default function ContactPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-ink">{copy[locale].title}</h1>
      <div className="mt-8 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100 sm:p-8">
        <p className="text-base leading-8 text-muted">{copy[locale].text}</p>
      </div>
    </section>
  );
}
