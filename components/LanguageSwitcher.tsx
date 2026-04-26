import Link from "next/link";
import { localeLabels, locales, type Locale } from "../lib/i18n";

export default function LanguageSwitcher({ locale, path = "" }: { locale: Locale; path?: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {locales.map((item) => (
        <Link
          key={item}
          href={`/${item}${path}`}
          className={`rounded-full px-3 py-1 transition ${
            locale === item
              ? "bg-ink text-white"
              : "bg-white text-muted ring-1 ring-slate-200 hover:text-ink"
          }`}
        >
          {localeLabels[item]}
        </Link>
      ))}
    </div>
  );
}
