import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../../lib/i18n";

const copy = {
  en: {
    title: "Privacy Policy",
    body: [
      "Canada Finance Learner collects only limited information through its consultation form: name, email address, and the question submitted by the user.",
      "This information is used to respond to the submitted question and, where appropriate, to help connect the user with a licensed financial advisor in Canada for an initial consultation.",
      "Users should not submit sensitive personal information such as SIN, bank account details, tax documents, identification documents, account screenshots, income statements, or asset details through the form.",
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    body: [
      "Canada Finance Learner recueille uniquement des renseignements limités par son formulaire de consultation : le nom, l’adresse courriel et la question soumise par l’utilisateur.",
      "Ces renseignements sont utilisés pour répondre à la question soumise et, le cas échéant, pour aider à mettre l’utilisateur en relation avec un conseiller financier agréé au Canada pour une première consultation.",
      "Les utilisateurs ne doivent pas soumettre de renseignements personnels sensibles tels que NAS, coordonnées bancaires, documents fiscaux, pièces d’identité, captures d’écran de comptes, revenus ou détails d’actifs par le formulaire.",
    ],
  },
  zh: {
    title: "隐私政策",
    body: [
      "Canada Finance Learner 通过咨询表单仅收集有限信息：姓名、邮箱和用户提交的问题。",
      "这些信息用于回应用户提交的问题，并在适当情况下帮助用户与加拿大持证金融顾问进行初步咨询。",
      "用户不应通过表单提交敏感个人信息，例如 SIN、银行账户信息、税务文件、身份证件、账户截图、收入证明或资产明细。",
    ],
  },
};

export default function PrivacyPage({ params }: { params: { locale: string } }) {
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
