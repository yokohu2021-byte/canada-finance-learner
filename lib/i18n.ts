export type Locale = "en" | "fr" | "zh";

export const locales: Locale[] = ["en", "fr", "zh"];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  zh: "中文",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const siteCopy = {
  en: {
    nav: {
      home: "Home",
      articles: "Articles",
      consultation: "Free Consultation",
      language: "Language",
    },
    hero: {
      eyebrow: "Financial education for Canada-based learners",
      title: "Canada Finance Learner",
      subtitle:
        "Financial learning articles for newcomers, founders, and self-learners in Canada.",
      cta: "Book a Free 1-Hour Consultation",
      secondary: "Read Articles",
    },
    categoriesTitle: "Explore by topic",
    latestArticles: "Latest articles",
    consultationTitle: "Questions about your own situation?",
    consultationText:
      "Submit your question and it may be reviewed by a licensed financial advisor in Canada. A free 1-hour initial consultation is available.",
    disclaimerShort: "Educational content only. Not personal financial, investment, tax, or legal advice.",
    footerNote:
      "Canada Finance Learner is for financial education and information sharing only. It does not provide personal financial, investment, tax, or legal advice.",
    legal: {
      about: "About",
      disclaimer: "Disclaimer",
      privacy: "Privacy Policy",
      contact: "Contact",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      articles: "Articles",
      consultation: "Consultation gratuite",
      language: "Langue",
    },
    hero: {
      eyebrow: "Éducation financière pour les apprenants au Canada",
      title: "Canada Finance Learner",
      subtitle:
        "Articles d’apprentissage financier pour les nouveaux arrivants, les entrepreneurs et les autodidactes au Canada.",
      cta: "Réserver une consultation gratuite d’une heure",
      secondary: "Lire les articles",
    },
    categoriesTitle: "Explorer par sujet",
    latestArticles: "Derniers articles",
    consultationTitle: "Des questions sur votre situation?",
    consultationText:
      "Soumettez votre question. Elle peut être examinée par un conseiller financier agréé au Canada. Une consultation initiale gratuite d’une heure est disponible.",
    disclaimerShort: "Contenu éducatif seulement. Ne constitue pas un conseil financier, fiscal, juridique ou en investissement personnalisé.",
    footerNote:
      "Canada Finance Learner est destiné à l’éducation financière et au partage d’informations générales seulement. Il ne fournit pas de conseils financiers, fiscaux, juridiques ou en investissement personnalisés.",
    legal: {
      about: "À propos",
      disclaimer: "Avertissement",
      privacy: "Politique de confidentialité",
      contact: "Contact",
    },
  },
  zh: {
    nav: {
      home: "首页",
      articles: "文章",
      consultation: "免费咨询",
      language: "语言",
    },
    hero: {
      eyebrow: "面向加拿大金融学习者的知识文章站",
      title: "Canada Finance Learner",
      subtitle: "写给加拿大新移民、创业者和金融自学者的金融知识文章站。",
      cta: "预约免费 1 小时咨询",
      secondary: "阅读文章",
    },
    categoriesTitle: "按主题浏览",
    latestArticles: "最新文章",
    consultationTitle: "有关于自身情况的问题？",
    consultationText:
      "你可以提交问题。问题可能由加拿大持证金融顾问进行初步接待，并可获得免费 1 小时咨询。",
    disclaimerShort: "本文仅用于金融知识学习与信息交流，不构成个人投资、税务、法律或财务建议。",
    footerNote:
      "Canada Finance Learner 仅用于金融知识分享与信息交流，不提供个人金融、投资、税务或法律建议。",
    legal: {
      about: "关于",
      disclaimer: "免责声明",
      privacy: "隐私政策",
      contact: "联系",
    },
  },
} as const;

export const categories = {
  en: [
    {
      title: "Canada Finance Basics",
      description: "Accounts, funds, credit, and financial planning basics for Canadian learners.",
    },
    {
      title: "Investing Learning Notes",
      description: "Risk, fees, market behaviour, and investing psychology explained in plain language.",
    },
    {
      title: "Founder & Small Business Finance",
      description: "Cash flow, business banking, financing, and financial habits for small business owners.",
    },
  ],
  fr: [
    {
      title: "Bases financières au Canada",
      description: "Comptes, fonds, crédit et notions de planification financière pour les apprenants au Canada.",
    },
    {
      title: "Notes d’apprentissage en investissement",
      description: "Risque, frais, comportement du marché et psychologie de l’investissement expliqués simplement.",
    },
    {
      title: "Finance pour entrepreneurs et petites entreprises",
      description: "Flux de trésorerie, comptes d’entreprise, financement et habitudes financières de base.",
    },
  ],
  zh: [
    {
      title: "加拿大金融基础",
      description: "用简单语言理解账户、基金、信用、财务规划等加拿大金融基础知识。",
    },
    {
      title: "投资学习笔记",
      description: "围绕风险、费用、市场行为和投资心理，整理适合金融自学者的知识文章。",
    },
    {
      title: "创业者与小生意财务",
      description: "理解现金流、公司账户、贷款和小生意主需要掌握的基础财务逻辑。",
    },
  ],
} as const;
