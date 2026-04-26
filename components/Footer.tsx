import Link from "next/link";
import type { Locale } from "../lib/i18n";
import { siteCopy } from "../lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="font-semibold text-ink">Canada Finance Learner</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{copy.footerNote}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
          <Link href={`/${locale}/about`} className="hover:text-brand">{copy.legal.about}</Link>
          <Link href={`/${locale}/disclaimer`} className="hover:text-brand">{copy.legal.disclaimer}</Link>
          <Link href={`/${locale}/privacy-policy`} className="hover:text-brand">{copy.legal.privacy}</Link>
          <Link href={`/${locale}/contact`} className="hover:text-brand">{copy.legal.contact}</Link>
        </div>
      </div>
    </footer>
  );
}
