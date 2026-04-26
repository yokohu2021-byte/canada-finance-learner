"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "../lib/i18n";

const formCopy = {
  en: {
    name: "Name",
    email: "Email",
    question: "Your question",
    button: "Book Free Consultation",
    success: "Your question has been prepared. Thank you.",
    error: "Something went wrong. Please try again or email us directly.",
  },
  fr: {
    name: "Nom",
    email: "Courriel",
    question: "Votre question",
    button: "Réserver une consultation gratuite",
    success: "Votre question a été préparée. Merci.",
    error: "Une erreur est survenue. Veuillez réessayer ou nous envoyer un courriel.",
  },
  zh: {
    name: "姓名",
    email: "邮箱",
    question: "相关问题",
    button: "预约免费咨询",
    success: "你的问题已经准备提交。谢谢。",
    error: "提交时出现问题。请稍后再试，或直接通过邮箱联系。",
  },
};

export default function ConsultationForm({ locale }: { locale: Locale }) {
  const copy = formCopy[locale];
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      question: String(data.get("question") || ""),
      locale,
      source: "Canada Finance Learner",
      _subject: "New Canada Finance Learner consultation question",
      _replyto: String(data.get("email") || ""),
      _gotcha: String(data.get("_gotcha") || ""),
    };

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://formspree.io/f/xbdqelwo";
    const fallbackEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com";

    try {
      if (endpoint && endpoint.startsWith("http")) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Form submission failed");
        setStatus("success");
        form.reset();
        return;
      }

      const subject = encodeURIComponent("Canada Finance Learner Consultation Question");
      const body = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\nLanguage: ${locale}\n\nQuestion:\n${payload.question}`
      );
      window.location.href = `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100 sm:p-8">
      <div className="grid gap-5">
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <label className="grid gap-2 text-sm font-medium text-ink">
          {copy.name}
          <input name="name" required className="rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-brand" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          {copy.email}
          <input name="email" type="email" required className="rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-brand" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          {copy.question}
          <textarea name="question" required rows={7} className="rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-brand" />
        </label>
        <button disabled={status === "loading"} className="rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60">
          {status === "loading" ? "..." : copy.button}
        </button>
        {status === "success" && <p className="text-sm text-green-700">{copy.success}</p>}
        {status === "error" && <p className="text-sm text-red-700">{copy.error}</p>}
      </div>
    </form>
  );
}
