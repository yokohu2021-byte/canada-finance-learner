import type { Locale } from "../lib/i18n";
import { siteCopy } from "../lib/i18n";

export default function DisclaimerBanner({ locale }: { locale: Locale }) {
  return (
    <div className="rounded-2xl bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-900 ring-1 ring-blue-100">
      {siteCopy[locale].disclaimerShort}
    </div>
  );
}
