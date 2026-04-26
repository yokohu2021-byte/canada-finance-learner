import Link from "next/link";
import type { Locale } from "../lib/i18n";
import { siteCopy } from "../lib/i18n";

export default function ConsultationCTA({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <section className="rounded-3xl bg-ink p-8 text-white shadow-soft">
      <h2 className="text-2xl font-semibold tracking-tight">{copy.consultationTitle}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">{copy.consultationText}</p>
      <Link href={`/${locale}/free-consultation`} className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-slate-100">
        {copy.hero.cta}
      </Link>
    </section>
  );
}
