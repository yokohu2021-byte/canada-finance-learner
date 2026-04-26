import Link from "next/link";
import type { Locale } from "../lib/i18n";
import { siteCopy } from "../lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href={`/${locale}`} className="font-semibold tracking-tight text-ink">
          Canada Finance Learner
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href={`/${locale}`} className="hover:text-brand">{copy.nav.home}</Link>
          <Link href={`/${locale}/articles`} className="hover:text-brand">{copy.nav.articles}</Link>
          <Link href={`/${locale}/free-consultation`} className="rounded-full bg-brand px-4 py-2 text-white hover:bg-blue-700">
            {copy.nav.consultation}
          </Link>
        </nav>
        <div className="hidden md:block">
          <LanguageSwitcher locale={locale} />
        </div>
        <div className="md:hidden">
          <Link href={`/${locale}/free-consultation`} className="rounded-full bg-brand px-3 py-2 text-sm text-white">
            {copy.nav.consultation}
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pb-4 sm:px-6 md:hidden">
        <div className="flex gap-4 text-sm font-medium text-slate-700">
          <Link href={`/${locale}`}>{copy.nav.home}</Link>
          <Link href={`/${locale}/articles`}>{copy.nav.articles}</Link>
        </div>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
