import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { isLocale, type Locale } from "../../lib/i18n";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "zh" }];
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  return (
    <div className="min-h-screen bg-paper">
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
