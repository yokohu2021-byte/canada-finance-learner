import type { Locale } from "../lib/i18n";

export type Article = {
  slug: string;
  date: string;
  category: string;
  translations: Record<
    Locale,
    {
      title: string;
      excerpt: string;
      content: Array<
        | { type: "paragraph"; text: string }
        | { type: "heading"; text: string }
        | { type: "list"; items: string[] }
      >;
    }
  >;
};

export const articles: Article[] = [
  {
    slug: "tfsa-rrsp-fhsa-guide",
    date: "2026-04-26",
    category: "Canada Finance Basics",
    translations: {
      en: {
        title: "TFSA, RRSP, and FHSA: A Beginner’s Guide for Canadians",
        excerpt:
          "A plain-language introduction to three common registered accounts in Canada and how learners can think about their differences.",
        content: [
          { type: "paragraph", text: "Canada has several registered accounts that are often mentioned in personal finance conversations. TFSA, RRSP, and FHSA are three of the most common. They are not investment products by themselves. They are account types with different tax rules." },
          { type: "heading", text: "TFSA: flexible tax-free growth" },
          { type: "paragraph", text: "A Tax-Free Savings Account can hold cash, GICs, mutual funds, ETFs, or other eligible investments. Contributions are not tax-deductible, but eligible growth and withdrawals are generally tax-free." },
          { type: "heading", text: "RRSP: retirement-focused tax deferral" },
          { type: "paragraph", text: "A Registered Retirement Savings Plan is generally used for retirement savings. Contributions may reduce taxable income, while withdrawals are taxable later. This makes RRSP planning sensitive to current and future tax brackets." },
          { type: "heading", text: "FHSA: first-home focused" },
          { type: "paragraph", text: "A First Home Savings Account is designed for eligible first-time home buyers. It combines features that learners often compare with TFSA and RRSP rules, but it has its own eligibility and withdrawal requirements." },
          { type: "heading", text: "How to think about the difference" },
          { type: "list", items: ["TFSA is often valued for flexibility.", "RRSP is often connected to retirement and tax-deferral planning.", "FHSA is specifically connected to first-home savings for eligible people."] },
          { type: "paragraph", text: "The right account depends on personal circumstances. This article is a learning overview, not a personal recommendation." }
        ],
      },
      fr: {
        title: "CELI, REER et CELIAPP : guide de base pour les Canadiens",
        excerpt:
          "Une introduction simple à trois comptes enregistrés courants au Canada et à leurs principales différences.",
        content: [
          { type: "paragraph", text: "Le Canada offre plusieurs comptes enregistrés souvent mentionnés dans les discussions de finances personnelles. Le CELI, le REER et le CELIAPP sont parmi les plus courants. Ce ne sont pas des produits d’investissement en soi, mais des types de comptes avec des règles fiscales différentes." },
          { type: "heading", text: "CELI : croissance flexible et généralement libre d’impôt" },
          { type: "paragraph", text: "Un compte d’épargne libre d’impôt peut contenir des liquidités, des CPG, des fonds communs, des FNB ou d’autres placements admissibles. Les cotisations ne sont pas déductibles d’impôt, mais la croissance admissible et les retraits sont généralement libres d’impôt." },
          { type: "heading", text: "REER : report d’impôt axé sur la retraite" },
          { type: "paragraph", text: "Un régime enregistré d’épargne-retraite est généralement utilisé pour l’épargne retraite. Les cotisations peuvent réduire le revenu imposable, tandis que les retraits sont imposables plus tard." },
          { type: "heading", text: "CELIAPP : axé sur l’achat d’une première habitation" },
          { type: "paragraph", text: "Un compte d’épargne libre d’impôt pour l’achat d’une première propriété est conçu pour les acheteurs admissibles d’une première habitation. Il a ses propres règles d’admissibilité et de retrait." },
          { type: "heading", text: "Comment comparer ces comptes" },
          { type: "list", items: ["Le CELI est souvent apprécié pour sa flexibilité.", "Le REER est lié à la retraite et au report d’impôt.", "Le CELIAPP est conçu pour l’épargne en vue d’une première habitation admissible."] },
          { type: "paragraph", text: "Le bon choix dépend de la situation personnelle. Cet article est une introduction éducative et non une recommandation personnalisée." }
        ],
      },
      zh: {
        title: "TFSA、RRSP 和 FHSA：加拿大新手基础指南",
        excerpt:
          "用简单语言理解加拿大三类常见注册账户，以及它们在税务和用途上的区别。",
        content: [
          { type: "paragraph", text: "在加拿大个人理财中，TFSA、RRSP 和 FHSA 是最常被提到的三类注册账户。它们本身不是某一种投资产品，而是具有不同税务规则的账户类型。账户里可以放现金、GIC、基金、ETF 等符合条件的投资。" },
          { type: "heading", text: "TFSA：灵活的免税增长账户" },
          { type: "paragraph", text: "TFSA 的全称是 Tax-Free Savings Account。它的特点是供款通常不能抵税，但符合条件的增长和提款通常不需要再缴税，因此经常被看作较灵活的储蓄和投资账户。" },
          { type: "heading", text: "RRSP：偏退休规划的递延纳税账户" },
          { type: "paragraph", text: "RRSP 的全称是 Registered Retirement Savings Plan。它常用于退休储蓄。供款可能降低当年的应税收入，但未来提款时通常需要作为收入纳税，因此和个人当前以及未来税率有关。" },
          { type: "heading", text: "FHSA：面向首次购房者的账户" },
          { type: "paragraph", text: "FHSA 的全称是 First Home Savings Account，主要面向符合条件的首次购房者。它有自己的资格要求和提款规则，不能简单等同于 TFSA 或 RRSP。" },
          { type: "heading", text: "如何理解三者区别" },
          { type: "list", items: ["TFSA 通常更强调灵活性。", "RRSP 通常和退休规划、递延纳税有关。", "FHSA 主要围绕符合条件的首次购房储蓄。"] },
          { type: "paragraph", text: "具体使用哪一种账户，取决于个人收入、目标、税务情况和时间规划。本文只是基础知识介绍，不构成个人建议。" }
        ],
      },
    },
  },
  {
    slug: "financial-advisor-vs-planner-canada",
    date: "2026-04-26",
    category: "Canada Finance Basics",
    translations: {
      en: {
        title: "Financial Advisor vs. Financial Planner in Canada: What’s the Difference?",
        excerpt:
          "A beginner-friendly explanation of common financial professional titles and why credentials, registration, and service scope matter.",
        content: [
          { type: "paragraph", text: "Many people use the terms financial advisor and financial planner interchangeably. In practice, the title, registration status, credentials, employer, and compensation model can all matter." },
          { type: "heading", text: "Titles can be confusing" },
          { type: "paragraph", text: "Some professionals focus on investment products, some focus on insurance, some focus on broader planning, and some work inside banks or dealer firms. A title alone does not explain the full scope of service." },
          { type: "heading", text: "Questions learners can ask" },
          { type: "list", items: ["Are you licensed or registered for the service you provide?", "What products or services can you discuss?", "How are you compensated?", "Do you provide a written plan or product-focused recommendations?", "What are the fees, commissions, and ongoing costs?"] },
          { type: "paragraph", text: "The goal is not to avoid professional help. The goal is to understand who is helping you, what they are allowed to do, and how they are paid." }
        ],
      },
      fr: {
        title: "Conseiller financier ou planificateur financier au Canada : quelle différence?",
        excerpt:
          "Une explication simple des titres professionnels financiers et de l’importance des permis, de l’inscription et du champ de service.",
        content: [
          { type: "paragraph", text: "Beaucoup de personnes utilisent les termes conseiller financier et planificateur financier comme s’ils étaient identiques. En pratique, le titre, l’inscription, les compétences, l’employeur et le mode de rémunération peuvent tous être importants." },
          { type: "heading", text: "Les titres peuvent porter à confusion" },
          { type: "paragraph", text: "Certains professionnels se concentrent sur les produits d’investissement, d’autres sur l’assurance, d’autres sur la planification globale, et certains travaillent dans des banques ou des courtiers." },
          { type: "heading", text: "Questions utiles à poser" },
          { type: "list", items: ["Êtes-vous autorisé ou inscrit pour le service offert?", "Quels produits ou services pouvez-vous expliquer?", "Comment êtes-vous rémunéré?", "Fournissez-vous un plan écrit ou des recommandations axées sur des produits?", "Quels sont les frais, commissions et coûts continus?"] },
          { type: "paragraph", text: "L’objectif n’est pas d’éviter l’aide professionnelle. L’objectif est de comprendre qui vous aide, ce que cette personne est autorisée à faire et comment elle est rémunérée." }
        ],
      },
      zh: {
        title: "加拿大 Financial Advisor 和 Financial Planner 有什么区别？",
        excerpt:
          "用初学者能理解的方式解释常见金融专业人士称谓，以及为什么资质、注册身份和服务范围很重要。",
        content: [
          { type: "paragraph", text: "很多人会把 Financial Advisor 和 Financial Planner 混在一起使用。但在现实中，称谓、注册身份、专业资质、所属机构和收费方式都可能影响服务内容。" },
          { type: "heading", text: "称谓本身可能不够清楚" },
          { type: "paragraph", text: "有些专业人士主要处理投资产品，有些主要处理保险，有些做更综合的财务规划，也有些在银行或金融机构内部工作。只看 title 并不能完整判断服务边界。" },
          { type: "heading", text: "可以先问这些问题" },
          { type: "list", items: ["你是否具备提供该服务所需的许可或注册身份？", "你可以讨论哪些产品或服务？", "你的收入来源是什么？", "你提供书面规划，还是主要推荐产品？", "费用、佣金和长期成本分别是什么？"] },
          { type: "paragraph", text: "重点不是拒绝专业帮助，而是理解谁在帮助你、对方能做什么，以及对方如何收费。" }
        ],
      },
    },
  },
  {
    slug: "stock-operator-lessons-financial-learners",
    date: "2026-04-26",
    category: "Investing Learning Notes",
    translations: {
      en: {
        title: "What The Reminiscences of a Stock Operator Can Teach Financial Learners",
        excerpt:
          "A learning-oriented look at patience, timing, discipline, and market psychology without turning the book into a trading signal manual.",
        content: [
          { type: "paragraph", text: "Reminiscences of a Stock Operator is often discussed by traders, but financial learners can read it more broadly as a book about behaviour, discipline, and the difficulty of acting under uncertainty." },
          { type: "heading", text: "Lesson 1: markets test patience" },
          { type: "paragraph", text: "One recurring idea is that waiting can be harder than acting. For learners, this is useful because financial decisions often involve time, emotion, and uncertainty." },
          { type: "heading", text: "Lesson 2: psychology matters" },
          { type: "paragraph", text: "The book repeatedly shows how confidence, fear, crowd behaviour, and overtrading can affect decisions. This is relevant even for people who do not trade actively." },
          { type: "heading", text: "Lesson 3: a story is not a personal strategy" },
          { type: "paragraph", text: "Reading a market story does not create a personal investment plan. A learner can study the psychology while still recognizing that personal financial decisions need individual context." }
        ],
      },
      fr: {
        title: "Ce que Reminiscences of a Stock Operator peut apprendre aux apprenants en finance",
        excerpt:
          "Une lecture axée sur la patience, le moment opportun, la discipline et la psychologie du marché, sans transformer le livre en guide de signaux de trading.",
        content: [
          { type: "paragraph", text: "Reminiscences of a Stock Operator est souvent discuté par les traders, mais les apprenants en finance peuvent aussi le lire comme un livre sur le comportement, la discipline et la difficulté d’agir dans l’incertitude." },
          { type: "heading", text: "Leçon 1 : les marchés testent la patience" },
          { type: "paragraph", text: "Une idée récurrente est que l’attente peut être plus difficile que l’action. Pour les apprenants, c’est utile car les décisions financières impliquent souvent le temps, l’émotion et l’incertitude." },
          { type: "heading", text: "Leçon 2 : la psychologie compte" },
          { type: "paragraph", text: "Le livre montre comment la confiance, la peur, le comportement de foule et l’excès d’activité peuvent influencer les décisions." },
          { type: "heading", text: "Leçon 3 : une histoire n’est pas une stratégie personnelle" },
          { type: "paragraph", text: "Lire une histoire de marché ne crée pas un plan d’investissement personnel. On peut étudier la psychologie tout en reconnaissant que les décisions personnelles exigent un contexte individuel." }
        ],
      },
      zh: {
        title: "《股票大作手回忆录》能给金融学习者什么启发？",
        excerpt:
          "从耐心、时机、纪律和市场心理角度理解这本书，而不是把它当成交易信号手册。",
        content: [
          { type: "paragraph", text: "《股票大作手回忆录》常被交易者讨论，但金融学习者也可以把它看作一本关于行为、纪律和不确定性决策的书，而不是简单模仿某种交易方式。" },
          { type: "heading", text: "启发一：市场考验耐心" },
          { type: "paragraph", text: "书中反复出现的一个主题是，等待往往比行动更难。对普通金融学习者来说，这一点有价值，因为很多财务决策都涉及时间、情绪和不确定性。" },
          { type: "heading", text: "启发二：心理因素很重要" },
          { type: "paragraph", text: "信心、恐惧、从众和过度交易都会影响人的判断。即使一个人不做短线交易，也可以从中理解市场行为与人性之间的关系。" },
          { type: "heading", text: "启发三：故事不等于个人策略" },
          { type: "paragraph", text: "读一本市场故事并不等于获得了个人投资方案。可以学习其中的心理和纪律，但具体财务决策仍然需要结合个人情况。" }
        ],
      },
    },
  },
];

export function getArticles(locale: Locale) {
  return articles.map((article) => ({
    ...article,
    title: article.translations[locale].title,
    excerpt: article.translations[locale].excerpt,
    content: article.translations[locale].content,
  }));
}

export function getArticle(locale: Locale, slug: string) {
  const article = articles.find((item) => item.slug === slug);
  if (!article) return undefined;
  return {
    ...article,
    title: article.translations[locale].title,
    excerpt: article.translations[locale].excerpt,
    content: article.translations[locale].content,
  };
}
