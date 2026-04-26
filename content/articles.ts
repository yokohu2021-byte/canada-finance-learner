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
    "slug": "tfsa-rrsp-fhsa-guide",
    "date": "2026-04-26",
    "category": "Canada Finance Basics",
    "translations": {
      "en": {
        "title": "TFSA, RRSP, and FHSA: A Clear Beginner Guide for Canadians",
        "excerpt": "A practical comparison of three common registered accounts in Canada, written for newcomers and self-learners who want to understand the purpose before choosing products.",
        "content": [
          {
            "type": "paragraph",
            "text": "Many people first hear about TFSA, RRSP, and FHSA from a bank appointment, a tax conversation, or a friend who says they should “open one.” The first thing to understand is that these are not investments by themselves. They are account types. What you hold inside the account, such as cash, GICs, mutual funds, ETFs, or other eligible investments, is a separate decision."
          },
          {
            "type": "paragraph",
            "text": "A useful way to compare them is to ask two questions: when do I get the tax benefit, and what is the account mainly designed for? Once those two questions are clear, the names become much less intimidating."
          },
          {
            "type": "heading",
            "text": "TFSA: flexibility first"
          },
          {
            "type": "paragraph",
            "text": "A Tax-Free Savings Account is often the easiest registered account for beginners to understand. You contribute after-tax money, so the contribution does not reduce your taxable income. In return, eligible investment growth and withdrawals are generally tax-free. The annual TFSA dollar limit for 2026 is $7,000, and unused room can carry forward if you were eligible in previous years."
          },
          {
            "type": "paragraph",
            "text": "The detail that beginners often miss is the withdrawal timing rule. If you withdraw from a TFSA, that amount is generally added back to your contribution room in the next calendar year, not immediately. Re-contributing too early can create an over-contribution problem."
          },
          {
            "type": "heading",
            "text": "RRSP: retirement and tax deferral"
          },
          {
            "type": "paragraph",
            "text": "A Registered Retirement Savings Plan is more directly connected to retirement planning and tax deferral. Contributions may reduce taxable income today. Later withdrawals are generally taxed as income. This means RRSP planning depends heavily on your tax bracket now, your expected tax bracket later, and whether you have employer pensions or other retirement income."
          },
          {
            "type": "heading",
            "text": "FHSA: first-home focused"
          },
          {
            "type": "paragraph",
            "text": "A First Home Savings Account is designed for eligible first-time home buyers. It combines a deductible contribution feature with tax-free qualifying withdrawals for a first home purchase, subject to FHSA rules. CRA guidance states that FHSA participation room is $8,000 in the first year you open your FHSA, and the lifetime deductible contribution limit is $40,000."
          },
          {
            "type": "heading",
            "text": "A simple way to remember the difference"
          },
          {
            "type": "list",
            "items": [
              "TFSA is usually about flexibility and tax-free growth.",
              "RRSP is usually about retirement planning and tax deferral.",
              "FHSA is usually about saving for a qualifying first home."
            ]
          },
          {
            "type": "paragraph",
            "text": "The best next step is not to ask which account is “best.” It is to ask what problem you are trying to solve: emergency access, retirement, tax planning, or first-home savings. A licensed financial professional can help connect those goals to your income, timeline, and risk comfort."
          },
          {
            "type": "paragraph",
            "text": "Source note: This overview is based on public guidance from the Canada Revenue Agency. Always check current CRA rules before contributing, withdrawing, or transferring funds."
          }
        ]
      },
      "fr": {
        "title": "CELI, REER et CELIAPP : guide clair pour débutants au Canada",
        "excerpt": "Une comparaison pratique de trois comptes enregistrés courants au Canada, pensée pour les nouveaux arrivants et les apprenants autonomes.",
        "content": [
          {
            "type": "paragraph",
            "text": "Beaucoup de personnes entendent parler du CELI, du REER ou du CELIAPP lors d’un rendez-vous bancaire, d’une discussion fiscale ou d’une conversation avec un ami. Le premier point à comprendre est simple : ces comptes ne sont pas des placements en eux-mêmes. Ce sont des types de comptes. Les produits détenus à l’intérieur représentent une décision distincte."
          },
          {
            "type": "paragraph",
            "text": "Pour les comparer, posez deux questions : à quel moment l’avantage fiscal apparaît-il, et quel est l’objectif principal du compte? Avec ces deux repères, les différences deviennent plus faciles à comprendre."
          },
          {
            "type": "heading",
            "text": "CELI : la flexibilité d’abord"
          },
          {
            "type": "paragraph",
            "text": "Le compte d’épargne libre d’impôt est souvent le plus facile à comprendre. Vous y cotisez avec de l’argent déjà imposé, donc la cotisation ne réduit pas votre revenu imposable. En échange, la croissance admissible et les retraits sont généralement libres d’impôt. Le plafond annuel du CELI pour 2026 est de 7 000 $, et les droits inutilisés peuvent être reportés si vous étiez admissible les années précédentes."
          },
          {
            "type": "paragraph",
            "text": "Le détail souvent oublié concerne les retraits. Lorsqu’un montant est retiré d’un CELI, il est généralement ajouté aux droits de cotisation de l’année civile suivante, pas immédiatement. Une nouvelle cotisation trop rapide peut créer un excédent."
          },
          {
            "type": "heading",
            "text": "REER : retraite et report d’impôt"
          },
          {
            "type": "paragraph",
            "text": "Le régime enregistré d’épargne-retraite est davantage lié à la planification de la retraite. Les cotisations peuvent réduire le revenu imposable aujourd’hui. Les retraits futurs sont généralement imposables comme revenu."
          },
          {
            "type": "heading",
            "text": "CELIAPP : orienté vers la première habitation"
          },
          {
            "type": "paragraph",
            "text": "Le compte d’épargne libre d’impôt pour l’achat d’une première propriété vise les acheteurs admissibles. Selon l’ARC, les droits de participation sont de 8 000 $ la première année d’ouverture, avec un plafond viager de déduction de 40 000 $."
          },
          {
            "type": "heading",
            "text": "Une façon simple de mémoriser"
          },
          {
            "type": "list",
            "items": [
              "Le CELI est surtout lié à la flexibilité et à la croissance libre d’impôt.",
              "Le REER est surtout lié à la retraite et au report d’impôt.",
              "Le CELIAPP est surtout lié à l’épargne pour une première habitation admissible."
            ]
          },
          {
            "type": "paragraph",
            "text": "La bonne question n’est pas seulement “quel compte est le meilleur?” mais “quel problème financier est-ce que je cherche à résoudre?” Un professionnel financier agréé peut relier vos objectifs à votre revenu, votre horizon et votre tolérance au risque."
          },
          {
            "type": "paragraph",
            "text": "Note de source : cet aperçu s’appuie sur les renseignements publics de l’Agence du revenu du Canada. Vérifiez toujours les règles actuelles avant de cotiser, retirer ou transférer des fonds."
          }
        ]
      },
      "zh": {
        "title": "TFSA、RRSP 和 FHSA：加拿大新手真正需要先理解什么",
        "excerpt": "面向加拿大新移民、小生意主和金融自学者，用现实语言解释三类常见注册账户的用途、税务逻辑和常见误区。",
        "content": [
          {
            "type": "paragraph",
            "text": "很多人第一次听到 TFSA、RRSP 和 FHSA，是在银行开户、报税、买基金或者朋友聊天时。最先要理解的一点是：它们本身不是投资产品，而是账户类型。账户里可以放现金、GIC、基金、ETF 或其他符合条件的投资，这才是另一层选择。"
          },
          {
            "type": "paragraph",
            "text": "比较这三类账户时，可以先问两个问题：税务好处发生在什么时候？这个账户主要为了解决什么目标？这两个问题清楚以后，很多复杂名词就会变得好理解。"
          },
          {
            "type": "heading",
            "text": "TFSA：优先理解为灵活账户"
          },
          {
            "type": "paragraph",
            "text": "TFSA 是 Tax-Free Savings Account。你用税后收入供款，所以供款本身通常不能抵税；但账户中符合条件的增长和提款通常不再缴税。2026 年 TFSA 年度额度为 7,000 加元，过去符合条件但没有用完的额度通常可以累积。"
          },
          {
            "type": "paragraph",
            "text": "新手最容易忽略的是提款后的时间规则。TFSA 提款后，这部分额度一般是在下一年重新加回，而不是马上恢复。如果同一年马上存回，可能造成超额供款。"
          },
          {
            "type": "heading",
            "text": "RRSP：更偏退休和递延纳税"
          },
          {
            "type": "paragraph",
            "text": "RRSP 是 Registered Retirement Savings Plan，更多和退休规划有关。供款可能降低当年应税收入，未来提款时通常作为收入纳税。所以 RRSP 是否适合，和你现在的税率、未来退休后的税率、是否有雇主养老金等因素有关。"
          },
          {
            "type": "heading",
            "text": "FHSA：围绕首次购房目标"
          },
          {
            "type": "paragraph",
            "text": "FHSA 是 First Home Savings Account，主要面向符合条件的首次购房者。CRA 公开信息显示，FHSA 第一年开户参与额度为 8,000 加元，终身可扣除供款上限为 40,000 加元。"
          },
          {
            "type": "heading",
            "text": "最简单的记忆方式"
          },
          {
            "type": "list",
            "items": [
              "TFSA 通常强调灵活性和免税增长。",
              "RRSP 通常强调退休规划和递延纳税。",
              "FHSA 通常围绕符合条件的首次购房储蓄。"
            ]
          },
          {
            "type": "paragraph",
            "text": "真正的问题不是“哪个账户最好”，而是你现在要解决什么问题：应急储蓄、退休、税务规划，还是购房目标。持证金融顾问可以根据收入、时间线和风险承受能力做更具体的判断。"
          },
          {
            "type": "paragraph",
            "text": "资料说明：本文基于加拿大税务局公开资料整理。供款、提款或转账前，应以 CRA 最新规则为准。"
          }
        ]
      }
    }
  },
  {
    "slug": "financial-advisor-vs-planner-canada",
    "date": "2026-04-26",
    "category": "Canada Finance Basics",
    "translations": {
      "en": {
        "title": "Financial Advisor vs. Financial Planner in Canada: What Should You Ask First?",
        "excerpt": "A practical guide to understanding financial titles, registration, compensation, and the questions to ask before you accept advice.",
        "content": [
          {
            "type": "paragraph",
            "text": "Many Canadians use “financial advisor” and “financial planner” as if they mean the same thing. In real life, the title alone does not tell you enough. Two people with similar titles may work under different licences, sell different products, follow different employer rules, and get paid in different ways."
          },
          {
            "type": "paragraph",
            "text": "For a beginner, the goal is not to memorize every credential. The goal is to slow down the conversation before you buy anything or move money. A good first meeting should help you understand the person’s role, not pressure you into a product."
          },
          {
            "type": "heading",
            "text": "Start with scope, not title"
          },
          {
            "type": "paragraph",
            "text": "Some professionals focus mainly on investments. Some focus on insurance. Some provide broader planning that includes cash flow, retirement, tax coordination, estate considerations, and risk management. Some work for a bank or dealer firm; others operate through independent firms."
          },
          {
            "type": "heading",
            "text": "Ask whether they are registered or licensed"
          },
          {
            "type": "paragraph",
            "text": "In Canada, securities regulators encourage investors to check registration before investing. Registration does not guarantee performance, but it helps confirm that a person or firm is permitted to offer certain regulated services."
          },
          {
            "type": "heading",
            "text": "Ask how they are paid"
          },
          {
            "type": "paragraph",
            "text": "Compensation can shape incentives. A professional may be paid by salary, fee, commission, trailing commission, planning fee, asset-based fee, or a mix of several methods. None of these is automatically bad. What matters is whether the client understands the cost and the possible conflicts."
          },
          {
            "type": "heading",
            "text": "Ask what you will receive"
          },
          {
            "type": "list",
            "items": [
              "Will I receive a written financial plan?",
              "Are you recommending a product, a strategy, or both?",
              "What fees will I pay directly or indirectly?",
              "Can I take time to read the documents before deciding?",
              "What happens after the first meeting?"
            ]
          },
          {
            "type": "paragraph",
            "text": "A good professional relationship should make you feel more informed, not more confused. If the conversation jumps quickly from your question to a product, pause and ask for the reasoning in plain language."
          },
          {
            "type": "paragraph",
            "text": "Source note: FCAC and Canadian securities regulators provide public tools for checking advisor registration and understanding financial professionals."
          }
        ]
      },
      "fr": {
        "title": "Conseiller financier ou planificateur financier au Canada : que faut-il demander d’abord?",
        "excerpt": "Un guide pratique pour comprendre les titres, l’inscription, la rémunération et les questions à poser avant d’accepter des conseils.",
        "content": [
          {
            "type": "paragraph",
            "text": "Beaucoup de Canadiens utilisent “conseiller financier” et “planificateur financier” comme des synonymes. En réalité, le titre ne suffit pas. Deux personnes avec des titres semblables peuvent avoir des permis différents, vendre des produits différents et être rémunérées différemment."
          },
          {
            "type": "paragraph",
            "text": "Pour un débutant, l’objectif n’est pas de mémoriser tous les titres professionnels. L’objectif est de ralentir la conversation avant d’acheter un produit ou de déplacer de l’argent."
          },
          {
            "type": "heading",
            "text": "Commencez par le champ de service"
          },
          {
            "type": "paragraph",
            "text": "Certains professionnels se concentrent sur les placements. D’autres sur l’assurance. D’autres offrent une planification plus large : flux de trésorerie, retraite, coordination fiscale, succession et gestion des risques."
          },
          {
            "type": "heading",
            "text": "Demandez s’ils sont inscrits ou autorisés"
          },
          {
            "type": "paragraph",
            "text": "Au Canada, les autorités en valeurs mobilières encouragent les investisseurs à vérifier l’inscription avant d’investir. L’inscription ne garantit pas le rendement, mais elle aide à confirmer que la personne ou l’entreprise peut offrir certains services réglementés."
          },
          {
            "type": "heading",
            "text": "Demandez comment ils sont rémunérés"
          },
          {
            "type": "paragraph",
            "text": "La rémunération peut influencer les incitatifs : salaire, honoraires, commission, commission de suivi, frais basés sur l’actif ou combinaison. Ce qui compte, c’est la transparence."
          },
          {
            "type": "heading",
            "text": "Demandez ce que vous recevrez"
          },
          {
            "type": "list",
            "items": [
              "Vais-je recevoir un plan financier écrit?",
              "Recommandez-vous un produit, une stratégie ou les deux?",
              "Quels frais vais-je payer directement ou indirectement?",
              "Puis-je prendre le temps de lire les documents avant de décider?",
              "Que se passe-t-il après la première rencontre?"
            ]
          },
          {
            "type": "paragraph",
            "text": "Une bonne relation professionnelle devrait vous rendre plus informé, pas plus confus. Si la conversation passe trop vite de votre question à un produit, demandez une explication simple."
          },
          {
            "type": "paragraph",
            "text": "Note de source : l’ACFC et les autorités canadiennes en valeurs mobilières offrent des outils publics pour vérifier l’inscription et comprendre les professionnels financiers."
          }
        ]
      },
      "zh": {
        "title": "加拿大 Financial Advisor 和 Financial Planner：第一次咨询前应该先问什么",
        "excerpt": "帮助金融初学者理解金融顾问称谓、注册身份、收费方式和首次沟通时最应该问清楚的问题。",
        "content": [
          {
            "type": "paragraph",
            "text": "很多人在加拿大会把 Financial Advisor 和 Financial Planner 混在一起使用。但现实中，一个 title 并不能说明全部。两个看起来称谓相近的人，可能持有不同许可、销售不同产品、受不同机构监管，也可能有完全不同的收费方式。"
          },
          {
            "type": "paragraph",
            "text": "对初学者来说，重点不是记住所有证书缩写，而是在购买任何产品或转移资金之前，把对方的角色弄清楚。好的第一次沟通，应该让你更理解情况，而不是让你马上做决定。"
          },
          {
            "type": "heading",
            "text": "先问服务范围，而不是只看 title"
          },
          {
            "type": "paragraph",
            "text": "有些专业人士主要处理投资，有些主要处理保险，有些会做更综合的财务规划，包括现金流、退休、税务协调、遗产安排和风险管理。有些人在银行或 dealer firm 工作，有些在独立机构工作。"
          },
          {
            "type": "heading",
            "text": "问清楚是否具备注册或许可"
          },
          {
            "type": "paragraph",
            "text": "加拿大证券监管机构建议投资者在投资前检查相关人士或公司的注册情况。注册并不保证收益，但有助于确认对方是否被允许提供相关受监管服务。"
          },
          {
            "type": "heading",
            "text": "问清楚对方如何获得收入"
          },
          {
            "type": "paragraph",
            "text": "收费方式会影响激励结构。金融专业人士可能通过工资、咨询费、佣金、trail commission、规划费、按资产收费，或多种方式混合获得收入。关键是你是否知道自己直接或间接付出了什么成本。"
          },
          {
            "type": "heading",
            "text": "第一次沟通可以问这些问题"
          },
          {
            "type": "list",
            "items": [
              "我会收到书面财务规划吗？",
              "你是在推荐产品、策略，还是两者都有？",
              "我需要直接或间接支付哪些费用？",
              "我可以先阅读资料再决定吗？",
              "第一次咨询之后会发生什么？"
            ]
          },
          {
            "type": "paragraph",
            "text": "好的专业关系应该让你变得更清楚，而不是更焦虑。如果对方很快从你的问题跳到某个产品，可以请对方用普通语言解释推荐逻辑。"
          },
          {
            "type": "paragraph",
            "text": "资料说明：本文参考 FCAC 与加拿大证券监管机构公开资料整理，仅用于教育目的，不评价任何具体顾问或机构。"
          }
        ]
      }
    }
  },
  {
    "slug": "etf-vs-mutual-fund-canada",
    "date": "2026-04-26",
    "category": "Investing Learning Notes",
    "translations": {
      "en": {
        "title": "ETF vs. Mutual Fund in Canada: A Beginner Explanation Without the Sales Pitch",
        "excerpt": "A plain-language comparison of ETFs and mutual funds, focusing on structure, costs, access, and what beginners should ask before choosing.",
        "content": [
          {
            "type": "paragraph",
            "text": "ETF and mutual fund conversations often become emotional. Some people say ETFs are always better because fees are lower. Others prefer mutual funds because they are familiar and often sold with advice. A calmer view is more useful: both are pooled investment vehicles, but they differ in how they trade, how they are accessed, and how costs are experienced."
          },
          {
            "type": "heading",
            "text": "What they have in common"
          },
          {
            "type": "paragraph",
            "text": "Both ETFs and mutual funds can hold baskets of investments. Depending on the fund, that basket may include stocks, bonds, money market instruments, or a mix of asset classes. This pooling can provide diversification, but diversification does not remove investment risk."
          },
          {
            "type": "heading",
            "text": "How they trade"
          },
          {
            "type": "paragraph",
            "text": "ETFs trade on an exchange during market hours, more like a stock. Mutual funds are usually bought or sold through a fund company, dealer, bank, or platform, and transactions are typically priced after the market closes."
          },
          {
            "type": "heading",
            "text": "Cost is important, but not the only question"
          },
          {
            "type": "paragraph",
            "text": "Funds and ETFs often have a Management Expense Ratio, or MER. CIRO explains that MER represents the total cost of owning a mutual fund or ETF, including management fees and other expenses. A lower MER can be meaningful over time, but a low-cost product used badly is not automatically a good plan."
          },
          {
            "type": "heading",
            "text": "Questions to ask before choosing"
          },
          {
            "type": "list",
            "items": [
              "What does the fund actually hold?",
              "What is the MER and are there other costs?",
              "Is this passive, active, or something else?",
              "How will I buy and sell it?",
              "Do I understand the risk level and time horizon?"
            ]
          },
          {
            "type": "paragraph",
            "text": "A beginner does not need to join an ETF-versus-mutual-fund identity war. The practical goal is to understand the structure, cost, risk, and role of the fund in a broader plan."
          },
          {
            "type": "paragraph",
            "text": "Source note: This article uses public investor education concepts from CIRO and Canadian securities regulators. It does not recommend any specific fund or ETF."
          }
        ]
      },
      "fr": {
        "title": "FNB ou fonds commun au Canada : explication simple sans discours de vente",
        "excerpt": "Une comparaison claire entre FNB et fonds communs, centrée sur la structure, les coûts, l’accès et les questions à poser.",
        "content": [
          {
            "type": "paragraph",
            "text": "Les discussions sur les FNB et les fonds communs deviennent souvent trop catégoriques. Certains disent que les FNB sont toujours meilleurs parce que les frais sont plus bas. D’autres préfèrent les fonds communs parce qu’ils sont plus familiers et souvent accompagnés de conseils. Une approche plus utile consiste à comprendre la structure."
          },
          {
            "type": "heading",
            "text": "Ce qu’ils ont en commun"
          },
          {
            "type": "paragraph",
            "text": "Les deux peuvent contenir un panier de placements : actions, obligations, instruments du marché monétaire ou combinaison d’actifs. Cette mise en commun peut aider à diversifier, mais elle n’élimine pas le risque."
          },
          {
            "type": "heading",
            "text": "Comment ils se négocient"
          },
          {
            "type": "paragraph",
            "text": "Les FNB se négocient en bourse pendant les heures de marché, un peu comme une action. Les fonds communs sont généralement achetés ou vendus par l’intermédiaire d’une société de fonds, d’un courtier, d’une banque ou d’une plateforme."
          },
          {
            "type": "heading",
            "text": "Les frais comptent, mais ne disent pas tout"
          },
          {
            "type": "paragraph",
            "text": "Les fonds et FNB ont souvent un ratio des frais de gestion, ou RFG. L’OCRI explique que le RFG représente le coût total de détention d’un fonds commun ou d’un FNB. Des frais plus bas peuvent aider à long terme, mais un produit peu coûteux mal utilisé n’est pas automatiquement une bonne stratégie."
          },
          {
            "type": "heading",
            "text": "Questions à poser"
          },
          {
            "type": "list",
            "items": [
              "Que contient réellement le fonds?",
              "Quel est le RFG et y a-t-il d’autres coûts?",
              "La stratégie est-elle passive, active ou hybride?",
              "Comment vais-je acheter et vendre le produit?",
              "Est-ce que je comprends le risque et l’horizon de placement?"
            ]
          },
          {
            "type": "paragraph",
            "text": "Un débutant n’a pas besoin de choisir un camp. L’objectif est de comprendre la structure, les coûts, les risques et le rôle du fonds dans un plan plus large."
          },
          {
            "type": "paragraph",
            "text": "Note de source : cet article s’appuie sur des concepts éducatifs publics de l’OCRI et des autorités canadiennes en valeurs mobilières."
          }
        ]
      },
      "zh": {
        "title": "ETF 和 Mutual Fund 在加拿大有什么区别：新手版解释",
        "excerpt": "不站队、不推产品，帮助金融初学者理解 ETF 和共同基金在结构、费用、购买方式和适用场景上的区别。",
        "content": [
          {
            "type": "paragraph",
            "text": "ETF 和 Mutual Fund 的讨论经常变成站队。有人说 ETF 费用低，所以一定更好；有人觉得共同基金更熟悉，也常常和顾问服务绑定。更成熟的理解是：它们都可以是集合投资工具，但交易方式、费用结构、购买渠道和服务模式不同。"
          },
          {
            "type": "heading",
            "text": "它们的共同点"
          },
          {
            "type": "paragraph",
            "text": "ETF 和共同基金都可以持有一篮子资产。根据基金类型，里面可能是股票、债券、货币市场工具，或多种资产组合。分散投资可以降低单一资产风险，但不代表没有投资风险。"
          },
          {
            "type": "heading",
            "text": "交易方式不同"
          },
          {
            "type": "paragraph",
            "text": "ETF 在交易所交易，价格会在交易时间内变化，更接近股票的交易方式。共同基金通常通过基金公司、银行、dealer 或平台买卖，通常按交易日结束后的净值处理。"
          },
          {
            "type": "heading",
            "text": "费用重要，但不是唯一问题"
          },
          {
            "type": "paragraph",
            "text": "基金和 ETF 通常都有 MER，也就是管理费用比率。CIRO 解释，MER 代表持有共同基金或 ETF 的总成本，包括管理费和其他费用。费用越低，长期影响可能越明显，但低费用产品如果不适合你的目标，也不等于好方案。"
          },
          {
            "type": "heading",
            "text": "选择前可以问这些问题"
          },
          {
            "type": "list",
            "items": [
              "这个基金到底持有什么资产？",
              "MER 是多少，还有没有其他成本？",
              "这是被动、主动，还是混合策略？",
              "我通过什么渠道买卖？",
              "我是否理解风险等级和持有时间？"
            ]
          },
          {
            "type": "paragraph",
            "text": "新手不需要参与 ETF 和共同基金的争论。更重要的是理解结构、成本、风险，以及这个产品在你整体财务目标中的角色。"
          },
          {
            "type": "paragraph",
            "text": "资料说明：本文参考 CIRO 和加拿大证券监管机构公开投资者教育资料整理，不推荐任何具体基金或 ETF。"
          }
        ]
      }
    }
  },
  {
    "slug": "what-is-gic-canada",
    "date": "2026-04-26",
    "category": "Canada Finance Basics",
    "translations": {
      "en": {
        "title": "What Is a GIC in Canada, and When Do Beginners Usually Consider One?",
        "excerpt": "A beginner-friendly explanation of Guaranteed Investment Certificates, why they feel safe, and what trade-offs to understand before locking in money.",
        "content": [
          {
            "type": "paragraph",
            "text": "A Guaranteed Investment Certificate, or GIC, is one of the first Canadian financial products many newcomers encounter. It sounds simple: deposit money for a fixed term, receive interest, and get the principal back at maturity. That simplicity is exactly why GICs are popular, but it is still worth understanding the trade-off."
          },
          {
            "type": "heading",
            "text": "What a GIC usually does"
          },
          {
            "type": "paragraph",
            "text": "A GIC is generally a secured investment. FCAC describes GICs and term deposits as secured investments, meaning you get back the amount you invest at the end of the term. The return may be fixed or variable depending on the product."
          },
          {
            "type": "heading",
            "text": "Why people like GICs"
          },
          {
            "type": "paragraph",
            "text": "GICs are often attractive when someone wants low volatility and a known timeline. A person saving for tuition next year, a home down payment, or a short-term tax bill may not want stock-market swings. In that situation, certainty may matter more than chasing a higher return."
          },
          {
            "type": "heading",
            "text": "The main trade-off: access"
          },
          {
            "type": "paragraph",
            "text": "Many GICs lock money in for the term. Some are cashable or redeemable, but they may pay lower rates or have conditions. Beginners should not look only at the rate. They should ask when the money can be accessed, whether penalties apply, and whether the term matches the real need."
          },
          {
            "type": "heading",
            "text": "Deposit insurance is not unlimited"
          },
          {
            "type": "paragraph",
            "text": "CDIC coverage may apply to eligible GICs held at member institutions. CDIC states that eligible deposits are insured separately by category up to $100,000, including principal and interest. Mutual funds, stocks, and bonds are not CDIC-covered deposits."
          },
          {
            "type": "heading",
            "text": "Questions before buying a GIC"
          },
          {
            "type": "list",
            "items": [
              "Is the institution a CDIC member or covered by another deposit insurer?",
              "Is the GIC cashable, redeemable, or locked in?",
              "When is interest paid?",
              "Does the term match my actual timeline?",
              "Am I comparing the after-tax result, not just the headline rate?"
            ]
          },
          {
            "type": "paragraph",
            "text": "A GIC can be a useful tool, especially for short-term certainty. It is not a complete financial plan. The question is not whether GICs are good or bad; it is whether the term, liquidity, tax treatment, and purpose fit the job."
          },
          {
            "type": "paragraph",
            "text": "Source note: This article uses public information from FCAC and CDIC. Product details vary by institution."
          }
        ]
      },
      "fr": {
        "title": "Qu’est-ce qu’un CPG au Canada, et quand les débutants l’envisagent-ils?",
        "excerpt": "Une explication simple des certificats de placement garanti, de leur sécurité apparente et des compromis à comprendre avant de bloquer des fonds.",
        "content": [
          {
            "type": "paragraph",
            "text": "Un certificat de placement garanti, ou CPG, est souvent l’un des premiers produits financiers que les nouveaux arrivants rencontrent au Canada. L’idée semble simple : déposer de l’argent pour une durée déterminée, recevoir des intérêts et récupérer le capital à l’échéance. Cette simplicité est utile, mais elle vient avec des compromis."
          },
          {
            "type": "heading",
            "text": "Ce qu’un CPG fait généralement"
          },
          {
            "type": "paragraph",
            "text": "Un CPG est généralement un placement sécurisé. L’ACFC décrit les CPG et dépôts à terme comme des placements sécurisés, ce qui signifie que vous récupérez le montant investi à la fin du terme. Le rendement peut être fixe ou variable selon le produit."
          },
          {
            "type": "heading",
            "text": "Pourquoi les gens aiment les CPG"
          },
          {
            "type": "paragraph",
            "text": "Les CPG attirent les personnes qui veulent peu de volatilité et un horizon clair. Quelqu’un qui épargne pour les frais de scolarité, une mise de fonds ou une facture fiscale proche peut préférer la certitude à un rendement potentiellement plus élevé."
          },
          {
            "type": "heading",
            "text": "Le principal compromis : l’accès"
          },
          {
            "type": "paragraph",
            "text": "Beaucoup de CPG bloquent l’argent jusqu’à l’échéance. Certains sont encaissables ou rachetables, mais ils peuvent offrir des taux plus faibles ou imposer des conditions. Il faut donc regarder plus que le taux affiché."
          },
          {
            "type": "heading",
            "text": "L’assurance-dépôts n’est pas illimitée"
          },
          {
            "type": "paragraph",
            "text": "La protection de la SADC peut s’appliquer aux CPG admissibles détenus auprès d’institutions membres. La SADC indique que les dépôts admissibles sont assurés par catégorie jusqu’à 100 000 $, incluant le capital et les intérêts. Les fonds communs, actions et obligations ne sont pas des dépôts couverts par la SADC."
          },
          {
            "type": "heading",
            "text": "Questions avant d’acheter un CPG"
          },
          {
            "type": "list",
            "items": [
              "L’institution est-elle membre de la SADC ou couverte par un autre assureur-dépôts?",
              "Le CPG est-il encaissable, rachetable ou bloqué?",
              "Quand les intérêts sont-ils versés?",
              "Le terme correspond-il à mon calendrier réel?",
              "Est-ce que je compare le résultat après impôt, pas seulement le taux affiché?"
            ]
          },
          {
            "type": "paragraph",
            "text": "Un CPG peut être utile pour une certitude à court terme. Ce n’est pas un plan financier complet. La vraie question est de savoir si le terme, la liquidité, la fiscalité et l’objectif correspondent."
          },
          {
            "type": "paragraph",
            "text": "Note de source : cet article s’appuie sur les renseignements publics de l’ACFC et de la SADC. Les détails varient selon l’institution."
          }
        ]
      },
      "zh": {
        "title": "加拿大 GIC 是什么：为什么新手经常先接触它",
        "excerpt": "解释 Guaranteed Investment Certificate 的基本逻辑、为什么它看起来安全，以及购买前必须理解的期限和流动性问题。",
        "content": [
          {
            "type": "paragraph",
            "text": "GIC，全称 Guaranteed Investment Certificate，是很多新移民在加拿大最早接触到的金融产品之一。它听起来很简单：把钱存入一个固定期限，到期拿回本金并获得利息。也正因为简单，GIC 很常见，但简单不等于不需要理解。"
          },
          {
            "type": "heading",
            "text": "GIC 通常解决什么问题"
          },
          {
            "type": "paragraph",
            "text": "GIC 通常被视为 secured investment。FCAC 对 GIC 和 term deposit 的说明是：这类产品通常意味着你在期限结束时可以拿回投资金额。收益可以是固定利率，也可能根据产品设计有变化。"
          },
          {
            "type": "heading",
            "text": "为什么很多人喜欢 GIC"
          },
          {
            "type": "paragraph",
            "text": "GIC 的吸引力在于波动低、时间明确。比如一年后要交学费、准备短期购房首付、或需要保留一笔税款的人，可能不希望承担股票市场波动。这时候，确定性比追求更高收益更重要。"
          },
          {
            "type": "heading",
            "text": "主要代价：流动性"
          },
          {
            "type": "paragraph",
            "text": "很多 GIC 会把钱锁定到期。也有一些 cashable 或 redeemable GIC，但可能利率较低或有条件。新手不能只看利率，还要问：什么时候可以取钱？提前取是否有惩罚？期限是否真的匹配自己的用钱时间？"
          },
          {
            "type": "heading",
            "text": "存款保险不是无限覆盖"
          },
          {
            "type": "paragraph",
            "text": "如果 GIC 符合条件并由 CDIC 成员机构发行，可能受到 CDIC 存款保险保护。CDIC 说明，符合条件的存款按类别分别最高覆盖 100,000 加元，包括本金和利息。共同基金、股票、债券不属于 CDIC 覆盖的存款。"
          },
          {
            "type": "heading",
            "text": "购买前可以问这些问题"
          },
          {
            "type": "list",
            "items": [
              "发行机构是否是 CDIC 成员，或是否有其他存款保险？",
              "这个 GIC 是否可以提前赎回？",
              "利息什么时候支付？",
              "期限是否符合我的实际用钱时间？",
              "我比较的是税后结果，还是只看表面利率？"
            ]
          },
          {
            "type": "paragraph",
            "text": "GIC 可以是有用工具，尤其适合短期确定性需求。但它不是完整财务计划。关键不是 GIC 好不好，而是期限、流动性、税务和资金用途是否匹配。"
          },
          {
            "type": "paragraph",
            "text": "资料说明：本文参考 FCAC 与 CDIC 公开资料整理。具体产品规则以金融机构文件为准。"
          }
        ]
      }
    }
  },
  {
    "slug": "credit-score-canada-newcomers",
    "date": "2026-04-26",
    "category": "Canada Finance Basics",
    "translations": {
      "en": {
        "title": "Credit Score in Canada: What Newcomers and Beginners Should Understand First",
        "excerpt": "A practical introduction to credit reports, credit scores, and why building credit in Canada is about habits, not tricks.",
        "content": [
          {
            "type": "paragraph",
            "text": "A credit score can feel like a mysterious number. For newcomers to Canada, it can also feel unfair: you may have savings, income, or good payment habits from another country, but little Canadian credit history. The first step is to understand what the score is trying to measure."
          },
          {
            "type": "heading",
            "text": "Credit score and credit report are not the same"
          },
          {
            "type": "paragraph",
            "text": "Your credit report contains information about your credit accounts and repayment history. Your credit score is a number calculated from information in the report. FCAC explains that credit reports may include personal information, credit cards, loans, payment history, balances, missed payments, collections, and public-record information such as bankruptcy."
          },
          {
            "type": "heading",
            "text": "Why it matters"
          },
          {
            "type": "paragraph",
            "text": "Financial institutions may use your credit report and score to decide whether to lend money and what interest rate to charge. Credit history may also affect renting, phone plans, or other applications. In Canada, building credit is part of becoming financially visible."
          },
          {
            "type": "heading",
            "text": "What beginners can control"
          },
          {
            "type": "list",
            "items": [
              "Pay bills on time.",
              "Keep credit card balances manageable compared with limits.",
              "Avoid applying for many credit products at once.",
              "Keep older good-standing accounts where appropriate.",
              "Review your report for errors."
            ]
          },
          {
            "type": "paragraph",
            "text": "There is no magic shortcut. Credit building is usually boring: use credit carefully, pay on time, and let the history grow."
          },
          {
            "type": "heading",
            "text": "A newcomer-friendly mindset"
          },
          {
            "type": "paragraph",
            "text": "Do not treat credit as free money. Treat it as a reputation system. A credit card is not a second income. It is a tool that can help build history when used carefully and can create stress when used casually."
          },
          {
            "type": "paragraph",
            "text": "If you are preparing for a mortgage, rebuilding after missed payments, or confused by your report, it may be worth speaking with a qualified professional. The goal is not only a higher score. The goal is a healthier financial structure."
          },
          {
            "type": "paragraph",
            "text": "Source note: This article is based on public FCAC information about credit reports and scores. Credit scoring models and lender decisions can vary."
          }
        ]
      },
      "fr": {
        "title": "Cote de crédit au Canada : ce que les nouveaux arrivants doivent comprendre",
        "excerpt": "Une introduction pratique aux dossiers de crédit, aux cotes de crédit et aux habitudes qui permettent de bâtir un historique au Canada.",
        "content": [
          {
            "type": "paragraph",
            "text": "Une cote de crédit peut sembler mystérieuse. Pour les nouveaux arrivants, elle peut même sembler injuste : vous pouvez avoir des économies, un revenu ou de bonnes habitudes de paiement ailleurs, mais peu d’historique canadien. La première étape est de comprendre ce que la cote cherche à mesurer."
          },
          {
            "type": "heading",
            "text": "La cote et le dossier ne sont pas la même chose"
          },
          {
            "type": "paragraph",
            "text": "Votre dossier de crédit contient de l’information sur vos comptes et votre historique de paiement. Votre cote est un nombre calculé à partir de ce dossier. L’ACFC explique qu’un dossier peut inclure des renseignements personnels, cartes de crédit, prêts, paiements, soldes, retards, recouvrements et certaines informations publiques comme une faillite."
          },
          {
            "type": "heading",
            "text": "Pourquoi c’est important"
          },
          {
            "type": "paragraph",
            "text": "Les institutions financières peuvent utiliser votre dossier et votre cote pour décider de vous prêter de l’argent et fixer le taux d’intérêt. L’historique de crédit peut aussi influencer la location, les forfaits téléphoniques ou d’autres demandes."
          },
          {
            "type": "heading",
            "text": "Ce que les débutants peuvent contrôler"
          },
          {
            "type": "list",
            "items": [
              "Payer les factures à temps.",
              "Garder les soldes de carte raisonnables par rapport aux limites.",
              "Éviter trop de demandes de crédit en même temps.",
              "Conserver les anciens comptes en règle lorsque pertinent.",
              "Vérifier le dossier pour repérer les erreurs."
            ]
          },
          {
            "type": "paragraph",
            "text": "Il n’y a pas de raccourci magique. Bâtir un crédit est souvent ennuyeux : utiliser le crédit avec prudence, payer à temps et laisser l’historique se construire."
          },
          {
            "type": "heading",
            "text": "Un état d’esprit utile"
          },
          {
            "type": "paragraph",
            "text": "Ne traitez pas le crédit comme de l’argent gratuit. Voyez-le comme un système de réputation. Une carte de crédit n’est pas un deuxième revenu; c’est un outil qui peut aider ou nuire selon l’usage."
          },
          {
            "type": "paragraph",
            "text": "Si vous préparez une hypothèque, reconstruisez après des paiements manqués ou ne comprenez pas votre dossier, il peut être utile de consulter un professionnel qualifié."
          },
          {
            "type": "paragraph",
            "text": "Note de source : cet article s’appuie sur les renseignements publics de l’ACFC. Les modèles de cote et les décisions des prêteurs peuvent varier."
          }
        ]
      },
      "zh": {
        "title": "加拿大信用分：新移民和金融新手应该先理解什么",
        "excerpt": "解释 credit report 和 credit score 的区别，以及为什么加拿大信用建设靠长期习惯，而不是技巧。",
        "content": [
          {
            "type": "paragraph",
            "text": "信用分对很多新移民来说像一个神秘数字。有些人明明有存款、有收入，也在原居住国有良好还款习惯，但在加拿大仍然需要重新建立信用历史。第一步不是焦虑数字，而是理解它试图衡量什么。"
          },
          {
            "type": "heading",
            "text": "信用报告和信用分不是一回事"
          },
          {
            "type": "paragraph",
            "text": "信用报告记录的是你的信用账户和还款历史。信用分则是根据报告信息计算出来的数字。FCAC 说明，信用报告可能包含个人信息、信用卡、贷款、付款记录、欠款金额、逾期、催收，以及破产等公开记录。"
          },
          {
            "type": "heading",
            "text": "为什么信用分重要"
          },
          {
            "type": "paragraph",
            "text": "金融机构可能用信用报告和信用分决定是否借钱给你，以及利率水平。信用历史也可能影响租房、手机计划或其他申请。在加拿大，建立信用某种程度上是建立金融可见度。"
          },
          {
            "type": "heading",
            "text": "新手能控制什么"
          },
          {
            "type": "list",
            "items": [
              "按时支付账单。",
              "让信用卡余额保持在合理水平，不要长期接近额度上限。",
              "不要短时间内申请过多信用产品。",
              "在合适情况下保留历史较长且状态良好的账户。",
              "定期检查信用报告是否有错误。"
            ]
          },
          {
            "type": "paragraph",
            "text": "没有真正的魔法捷径。信用建设通常很无聊：谨慎使用、按时付款、让记录慢慢累积。"
          },
          {
            "type": "heading",
            "text": "新移民应有的心态"
          },
          {
            "type": "paragraph",
            "text": "不要把信用当作免费的钱，而要把它看成一种信誉系统。信用卡不是第二份收入，而是一个使用得当能建立历史、使用不当会制造压力的工具。"
          },
          {
            "type": "paragraph",
            "text": "如果你准备申请房贷、正在修复逾期记录，或看不懂信用报告，可以咨询合格专业人士。目标不只是更高分数，而是更健康的财务结构。"
          },
          {
            "type": "paragraph",
            "text": "资料说明：本文参考 FCAC 关于信用报告和信用分的公开资料整理。具体评分模型和贷款机构判断可能不同。"
          }
        ]
      }
    }
  },
  {
    "slug": "mer-fees-fund-investors-canada",
    "date": "2026-04-26",
    "category": "Investing Learning Notes",
    "translations": {
      "en": {
        "title": "What Is MER, and Why Do Fund Fees Matter More Than Beginners Think?",
        "excerpt": "A clear explanation of Management Expense Ratio, hidden cost perception, and why long-term investors should learn to read fund fees.",
        "content": [
          {
            "type": "paragraph",
            "text": "Many beginners focus on whether an investment went up or down last year. Fewer beginners ask what the investment costs every year. That is why MER, or Management Expense Ratio, is one of the most important terms to learn before buying mutual funds or ETFs."
          },
          {
            "type": "heading",
            "text": "What MER means"
          },
          {
            "type": "paragraph",
            "text": "MER represents the ongoing cost of owning a fund. CIRO explains that MER includes the management fee of an investment fund and other expenses such as administrative costs, trading costs, and taxes. It is usually shown as a percentage of the fund’s assets."
          },
          {
            "type": "heading",
            "text": "Why it feels invisible"
          },
          {
            "type": "paragraph",
            "text": "MER is usually not paid by writing a separate cheque. It is deducted inside the fund before performance is reported. That makes it easy to ignore. A fund can show a positive return, but fees still affect the return you keep."
          },
          {
            "type": "heading",
            "text": "Small percentages become large over time"
          },
          {
            "type": "paragraph",
            "text": "A difference that looks small in one year can matter over decades. This is not because fees are evil. It is because compounding works both ways: returns compound, and cost drag also accumulates."
          },
          {
            "type": "heading",
            "text": "Fee is not the only decision factor"
          },
          {
            "type": "paragraph",
            "text": "A lower MER is not automatically the best choice. Investors also need to understand asset mix, risk level, diversification, tax location, behaviour, and whether they need advice. But ignoring MER is also a mistake."
          },
          {
            "type": "heading",
            "text": "Questions to ask when reviewing a fund"
          },
          {
            "type": "list",
            "items": [
              "What is the MER?",
              "Are there trading commissions or account fees?",
              "Does the fund pay trailing commissions?",
              "What does the fund actually hold?",
              "Am I paying for advice, portfolio management, convenience, or all three?"
            ]
          },
          {
            "type": "paragraph",
            "text": "Learning MER is not about becoming cheap. It is about becoming conscious. A financial learner should know what they pay, what they receive, and whether the trade-off makes sense."
          },
          {
            "type": "paragraph",
            "text": "Source note: This article uses public investor education material from CIRO and Canadian securities regulators. It does not compare or recommend specific funds."
          }
        ]
      },
      "fr": {
        "title": "Qu’est-ce que le RFG, et pourquoi les frais comptent plus qu’on le pense?",
        "excerpt": "Une explication claire du ratio des frais de gestion, de son caractère peu visible et de son importance pour les investisseurs à long terme.",
        "content": [
          {
            "type": "paragraph",
            "text": "Beaucoup de débutants regardent surtout si un placement a monté ou baissé l’an dernier. Moins nombreux sont ceux qui demandent combien il coûte chaque année. C’est pourquoi le RFG, ou ratio des frais de gestion, est un terme essentiel à comprendre avant d’acheter des fonds communs ou des FNB."
          },
          {
            "type": "heading",
            "text": "Ce que signifie le RFG"
          },
          {
            "type": "paragraph",
            "text": "Le RFG représente le coût continu de détention d’un fonds. L’OCRI explique qu’il inclut les frais de gestion et d’autres dépenses comme les frais administratifs, les coûts de négociation et les taxes. Il est généralement exprimé en pourcentage de l’actif du fonds."
          },
          {
            "type": "heading",
            "text": "Pourquoi il semble invisible"
          },
          {
            "type": "paragraph",
            "text": "Le RFG n’est généralement pas payé par chèque séparé. Il est prélevé à même le fonds avant que le rendement soit présenté. Il est donc facile de l’oublier, même s’il réduit le rendement que vous conservez."
          },
          {
            "type": "heading",
            "text": "Les petits pourcentages s’accumulent"
          },
          {
            "type": "paragraph",
            "text": "Une différence qui semble faible sur un an peut devenir importante sur plusieurs décennies. Ce n’est pas parce que les frais sont toujours mauvais, mais parce que la capitalisation fonctionne aussi avec les coûts."
          },
          {
            "type": "heading",
            "text": "Le coût n’est pas le seul critère"
          },
          {
            "type": "paragraph",
            "text": "Un RFG plus bas n’est pas automatiquement le meilleur choix. Il faut aussi comprendre la composition de l’actif, le risque, la diversification, la fiscalité, le comportement et le besoin d’accompagnement."
          },
          {
            "type": "heading",
            "text": "Questions à poser"
          },
          {
            "type": "list",
            "items": [
              "Quel est le RFG?",
              "Y a-t-il des commissions de négociation ou frais de compte?",
              "Le fonds verse-t-il des commissions de suivi?",
              "Que contient réellement le fonds?",
              "Est-ce que je paie pour des conseils, une gestion de portefeuille, la simplicité ou les trois?"
            ]
          },
          {
            "type": "paragraph",
            "text": "Comprendre le RFG ne signifie pas chercher le moins cher à tout prix. Cela signifie savoir ce que vous payez, ce que vous recevez et si l’échange est raisonnable."
          },
          {
            "type": "paragraph",
            "text": "Note de source : cet article s’appuie sur des documents éducatifs publics de l’OCRI et des autorités canadiennes en valeurs mobilières."
          }
        ]
      },
      "zh": {
        "title": "MER 是什么：为什么基金费用比新手想象中更重要",
        "excerpt": "解释基金和 ETF 的 Management Expense Ratio，为什么它不容易被看见，以及长期投资者为什么必须学会看费用。",
        "content": [
          {
            "type": "paragraph",
            "text": "很多新手看投资时，第一反应是这个产品去年涨了多少或跌了多少。但真正应该同时看的，是它每年花费多少成本。MER，也就是 Management Expense Ratio，是购买共同基金或 ETF 前必须理解的核心概念之一。"
          },
          {
            "type": "heading",
            "text": "MER 到底是什么"
          },
          {
            "type": "paragraph",
            "text": "MER 代表持有基金的持续成本。CIRO 解释，MER 不只包括基金管理费，也包括行政成本、交易成本和税费等其他费用，通常以基金资产百分比形式展示。"
          },
          {
            "type": "heading",
            "text": "为什么它容易被忽略"
          },
          {
            "type": "paragraph",
            "text": "MER 通常不是你单独写一张支票支付，而是在基金内部扣除后再显示投资表现。也就是说，基金看起来仍然可能有正收益，但费用已经影响了你最终留下的回报。"
          },
          {
            "type": "heading",
            "text": "小百分比在长期会变大"
          },
          {
            "type": "paragraph",
            "text": "一年看起来很小的费用差异，放到十年、二十年可能产生明显影响。这不是说费用一定不好，而是复利既会放大收益，也会放大成本拖累。"
          },
          {
            "type": "heading",
            "text": "费用不是唯一因素"
          },
          {
            "type": "paragraph",
            "text": "低 MER 不自动等于最佳选择。你还要看资产配置、风险等级、分散程度、税务位置、自己能否坚持，以及是否需要专业服务。但完全不看 MER，也是一个明显错误。"
          },
          {
            "type": "heading",
            "text": "看基金时可以问这些问题"
          },
          {
            "type": "list",
            "items": [
              "MER 是多少？",
              "是否还有交易佣金或账户费用？",
              "是否包含 trailing commission？",
              "基金实际持有哪些资产？",
              "我付费买到的是建议、管理、便利，还是三者都有？"
            ]
          },
          {
            "type": "paragraph",
            "text": "理解 MER 不是为了极端省钱，而是为了有意识地付费。金融学习者应该知道自己付了什么、换来了什么，以及这个交换是否合理。"
          },
          {
            "type": "paragraph",
            "text": "资料说明：本文参考 CIRO 和加拿大证券监管机构公开投资者教育资料整理，不比较或推荐任何具体基金。"
          }
        ]
      }
    }
  },
  {
    "slug": "cash-flow-vs-profit-small-business",
    "date": "2026-04-26",
    "category": "Founder & Small Business Finance",
    "translations": {
      "en": {
        "title": "Cash Flow vs. Profit: Why Small Business Owners in Canada Need to Understand Both",
        "excerpt": "A practical finance note for founders who are profitable on paper but still feel short of cash at the wrong moments.",
        "content": [
          {
            "type": "paragraph",
            "text": "A small business can look profitable and still feel financially tight. This surprises many new founders. Profit and cash flow are related, but they are not the same. Profit is an accounting result. Cash flow is the movement of money in and out of the business."
          },
          {
            "type": "heading",
            "text": "Profit answers one question"
          },
          {
            "type": "paragraph",
            "text": "Profit asks whether revenue exceeds expenses over a period. It is essential for judging whether the business model can work. But profit may include sales not yet collected, inventory not yet sold, depreciation, accruals, and timing differences."
          },
          {
            "type": "heading",
            "text": "Cash flow answers a different question"
          },
          {
            "type": "paragraph",
            "text": "Cash flow asks whether the business has enough money available when bills are due. Rent, payroll, inventory deposits, sales tax remittances, supplier payments, loan payments, and seasonal slowdowns all happen in cash, not in theory."
          },
          {
            "type": "heading",
            "text": "Where founders get caught"
          },
          {
            "type": "list",
            "items": [
              "Buying inventory before sales arrive.",
              "Paying suppliers before customers pay.",
              "Using sales tax collected as if it were business profit.",
              "Growing too fast without working capital.",
              "Ignoring slow months after a strong season."
            ]
          },
          {
            "type": "paragraph",
            "text": "The trap is especially common in retail and wholesale. Inventory can look like an asset, but it is also cash sitting on shelves. If the wrong products move slowly, profit projections may not protect the bank account."
          },
          {
            "type": "heading",
            "text": "A useful weekly habit"
          },
          {
            "type": "paragraph",
            "text": "Every week, a small business owner can review three numbers: current bank balance, expected cash coming in, and required cash going out over the next 30 to 60 days. This is not sophisticated finance. It is survival discipline."
          },
          {
            "type": "paragraph",
            "text": "A founder’s personal financial plan is often connected to the business. If the business cash cycle is unstable, personal investing, insurance, debt planning, and tax planning may all need to reflect that reality."
          },
          {
            "type": "paragraph",
            "text": "This article is general education. Business owners should work with a qualified bookkeeper, accountant, or financial professional for decisions specific to their situation."
          }
        ]
      },
      "fr": {
        "title": "Flux de trésorerie ou profit : pourquoi les petits entrepreneurs doivent comprendre les deux",
        "excerpt": "Une note pratique pour les fondateurs dont l’entreprise semble rentable sur papier mais manque parfois de liquidités.",
        "content": [
          {
            "type": "paragraph",
            "text": "Une petite entreprise peut sembler rentable et manquer tout de même de liquidités. Cela surprend beaucoup de nouveaux fondateurs. Le profit et le flux de trésorerie sont liés, mais différents. Le profit est un résultat comptable. Le flux de trésorerie est le mouvement réel de l’argent."
          },
          {
            "type": "heading",
            "text": "Le profit répond à une question"
          },
          {
            "type": "paragraph",
            "text": "Le profit indique si les revenus dépassent les dépenses sur une période. Il est essentiel pour évaluer le modèle d’affaires. Mais il peut inclure des ventes non encaissées, des stocks, des amortissements et des différences de calendrier."
          },
          {
            "type": "heading",
            "text": "Le flux de trésorerie répond à une autre question"
          },
          {
            "type": "paragraph",
            "text": "Le flux de trésorerie demande si l’entreprise a assez d’argent disponible lorsque les factures arrivent. Loyer, paie, dépôts d’inventaire, taxes de vente, fournisseurs, prêts et périodes lentes se paient en argent réel."
          },
          {
            "type": "heading",
            "text": "Où les fondateurs se font piéger"
          },
          {
            "type": "list",
            "items": [
              "Acheter des stocks avant que les ventes arrivent.",
              "Payer les fournisseurs avant d’être payé par les clients.",
              "Utiliser les taxes de vente perçues comme si c’était du profit.",
              "Croître trop vite sans fonds de roulement.",
              "Oublier les mois lents après une bonne saison."
            ]
          },
          {
            "type": "paragraph",
            "text": "Le piège est fréquent dans le commerce de détail et de gros. L’inventaire est un actif, mais aussi de l’argent immobilisé. Si les mauvais produits bougent lentement, les projections ne protègent pas le compte bancaire."
          },
          {
            "type": "heading",
            "text": "Une habitude hebdomadaire utile"
          },
          {
            "type": "paragraph",
            "text": "Chaque semaine, un propriétaire peut regarder trois chiffres : solde bancaire actuel, entrées prévues et sorties obligatoires sur 30 à 60 jours. Ce n’est pas complexe, mais c’est une discipline de survie."
          },
          {
            "type": "paragraph",
            "text": "La planification financière personnelle d’un fondateur est souvent liée à l’entreprise. Si le cycle de trésorerie est instable, les placements, assurances, dettes et impôts personnels doivent le refléter."
          },
          {
            "type": "paragraph",
            "text": "Cet article est éducatif. Les entrepreneurs devraient consulter un comptable, un teneur de livres ou un professionnel financier qualifié pour leur situation."
          }
        ]
      },
      "zh": {
        "title": "现金流和利润不是一回事：加拿大小生意主必须先看懂这点",
        "excerpt": "写给创业者和小生意主的基础财务文章：为什么账面盈利不代表账户里有钱，现金流才决定企业能否撑过关键时间点。",
        "content": [
          {
            "type": "paragraph",
            "text": "一个小生意账面上可能盈利，但老板仍然每天觉得钱很紧。这不是错觉。利润和现金流有关，但不是同一件事。利润是会计结果，现金流是真正进出银行账户的钱。"
          },
          {
            "type": "heading",
            "text": "利润回答的是一个问题"
          },
          {
            "type": "paragraph",
            "text": "利润看的是一段时间内收入是否超过费用。它对判断商业模式是否成立很重要。但利润可能包含还没收回来的销售、还没卖掉的库存、折旧、应计项目和时间差。"
          },
          {
            "type": "heading",
            "text": "现金流回答的是另一个问题"
          },
          {
            "type": "paragraph",
            "text": "现金流问的是：账单到期时，公司账户里是否有足够的钱。房租、工资、库存定金、销售税、供应商货款、贷款还款、淡季支出，最后都要用现金支付。"
          },
          {
            "type": "heading",
            "text": "创业者最容易卡住的地方"
          },
          {
            "type": "list",
            "items": [
              "库存先买了，销售还没回来。",
              "供应商先付款，客户或平台后结算。",
              "把代收的销售税当成自己的利润使用。",
              "扩张太快，但营运资金不足。",
              "旺季过后没有为淡季预留现金。"
            ]
          },
          {
            "type": "paragraph",
            "text": "零售和批发尤其容易遇到这个问题。库存是资产，但也是被压在货架上的现金。如果产品动销慢，漂亮的利润预测并不能保护银行余额。"
          },
          {
            "type": "heading",
            "text": "一个简单但有用的每周习惯"
          },
          {
            "type": "paragraph",
            "text": "每周看三个数字：当前银行余额、未来预计进账、未来 30 到 60 天必须支出的金额。这不是复杂金融模型，而是创业生存纪律。"
          },
          {
            "type": "paragraph",
            "text": "创业者的个人财务和公司现金流通常高度绑定。如果公司现金周期不稳定，个人投资、保险、债务和税务规划都要考虑这件事。"
          },
          {
            "type": "paragraph",
            "text": "本文仅作基础教育。小生意主做具体决策时，应结合 bookkeeper、会计或合格金融专业人士的意见。"
          }
        ]
      }
    }
  },
  {
    "slug": "newcomers-personal-finance-first-90-days",
    "date": "2026-04-26",
    "category": "Canada Finance Basics",
    "translations": {
      "en": {
        "title": "New to Canada? A 90-Day Financial Learning Checklist",
        "excerpt": "A calm, practical checklist for newcomers who want to understand banking, credit, taxes, insurance, and basic planning without being overwhelmed.",
        "content": [
          {
            "type": "paragraph",
            "text": "Moving to Canada can make financial life feel unfamiliar. The bank names are different, credit history may restart, tax rules are new, and everyone seems to have an opinion about TFSA, RRSP, insurance, and mortgages. A simple 90-day learning plan can reduce confusion."
          },
          {
            "type": "heading",
            "text": "First 30 days: build the basic structure"
          },
          {
            "type": "list",
            "items": [
              "Open a chequing account for daily spending.",
              "Open a savings account for short-term cash.",
              "Understand monthly account fees and minimum balance rules.",
              "Set up automatic payments for essential bills.",
              "Start learning how Canadian credit works."
            ]
          },
          {
            "type": "paragraph",
            "text": "The first month is not about optimizing investments. It is about creating a stable financial base so bills, income, and spending are visible."
          },
          {
            "type": "heading",
            "text": "Days 31 to 60: learn the credit and tax language"
          },
          {
            "type": "paragraph",
            "text": "This is the stage to understand credit reports, credit cards, interest rates, pay statements, payroll deductions, sales taxes, and the basic idea of filing taxes. If you are self-employed or starting a small business, separating personal and business money becomes important early."
          },
          {
            "type": "heading",
            "text": "Days 61 to 90: start asking planning questions"
          },
          {
            "type": "paragraph",
            "text": "Once the basics are stable, begin learning registered accounts, insurance needs, emergency fund targets, debt costs, and investment risk. You do not need to buy anything immediately. The goal is to understand the map before choosing a route."
          },
          {
            "type": "heading",
            "text": "Avoid these early mistakes"
          },
          {
            "type": "list",
            "items": [
              "Buying products before understanding fees.",
              "Using credit cards as extra income.",
              "Ignoring tax filing because income seems small.",
              "Mixing business and personal funds.",
              "Taking advice from social media without checking credentials."
            ]
          },
          {
            "type": "paragraph",
            "text": "A newcomer does not need a perfect financial plan in the first three months. But they do need a learning rhythm, clean records, and a habit of asking clear questions."
          },
          {
            "type": "paragraph",
            "text": "This checklist is educational. For personal decisions involving tax, insurance, investments, or business structure, speak with a qualified professional."
          }
        ]
      },
      "fr": {
        "title": "Nouveau au Canada? Liste d’apprentissage financier pour les 90 premiers jours",
        "excerpt": "Une liste calme et pratique pour comprendre la banque, le crédit, les impôts, l’assurance et la planification de base sans être dépassé.",
        "content": [
          {
            "type": "paragraph",
            "text": "Arriver au Canada peut rendre la vie financière inconnue. Les banques ont d’autres noms, l’historique de crédit peut recommencer, les règles fiscales sont nouvelles et tout le monde parle du CELI, du REER, de l’assurance ou de l’hypothèque. Un plan d’apprentissage de 90 jours peut aider."
          },
          {
            "type": "heading",
            "text": "30 premiers jours : créer la structure de base"
          },
          {
            "type": "list",
            "items": [
              "Ouvrir un compte-chèques pour les dépenses courantes.",
              "Ouvrir un compte d’épargne pour les liquidités à court terme.",
              "Comprendre les frais mensuels et les soldes minimums.",
              "Mettre en place des paiements automatiques pour les factures essentielles.",
              "Commencer à apprendre le fonctionnement du crédit canadien."
            ]
          },
          {
            "type": "paragraph",
            "text": "Le premier mois ne sert pas à optimiser les placements. Il sert à rendre les revenus, factures et dépenses visibles."
          },
          {
            "type": "heading",
            "text": "Jours 31 à 60 : apprendre le langage du crédit et de l’impôt"
          },
          {
            "type": "paragraph",
            "text": "C’est le moment de comprendre les dossiers de crédit, cartes de crédit, taux d’intérêt, talons de paie, retenues, taxes de vente et les bases de la déclaration de revenus. Pour les travailleurs autonomes, séparer l’argent personnel et professionnel devient important tôt."
          },
          {
            "type": "heading",
            "text": "Jours 61 à 90 : commencer les questions de planification"
          },
          {
            "type": "paragraph",
            "text": "Une fois les bases en place, vous pouvez apprendre les comptes enregistrés, l’assurance, le fonds d’urgence, le coût des dettes et le risque de placement. Il n’est pas nécessaire d’acheter immédiatement. Il faut d’abord comprendre la carte."
          },
          {
            "type": "heading",
            "text": "Erreurs à éviter au début"
          },
          {
            "type": "list",
            "items": [
              "Acheter des produits avant de comprendre les frais.",
              "Utiliser la carte de crédit comme revenu supplémentaire.",
              "Ignorer la déclaration d’impôt parce que le revenu semble faible.",
              "Mélanger argent personnel et professionnel.",
              "Suivre les réseaux sociaux sans vérifier les compétences."
            ]
          },
          {
            "type": "paragraph",
            "text": "Un nouvel arrivant n’a pas besoin d’un plan parfait en trois mois. Il lui faut un rythme d’apprentissage, des dossiers propres et l’habitude de poser de bonnes questions."
          },
          {
            "type": "paragraph",
            "text": "Cette liste est éducative. Pour les décisions personnelles liées à l’impôt, l’assurance, les placements ou l’entreprise, consultez un professionnel qualifié."
          }
        ]
      },
      "zh": {
        "title": "新移民到加拿大后 90 天：金融基础学习清单",
        "excerpt": "帮助新移民在刚到加拿大时，有顺序地理解银行、信用、税务、保险和基础理财，不被信息淹没。",
        "content": [
          {
            "type": "paragraph",
            "text": "刚到加拿大时，金融系统会显得陌生。银行名称不同，信用历史可能需要重新建立，税务规则不熟悉，周围又不断有人提到 TFSA、RRSP、保险和房贷。一个 90 天学习清单，可以减少混乱感。"
          },
          {
            "type": "heading",
            "text": "前 30 天：先建立基础结构"
          },
          {
            "type": "list",
            "items": [
              "开一个日常消费用的 chequing account。",
              "开一个短期现金用的 savings account。",
              "弄清账户月费和最低余额要求。",
              "为必要账单设置自动付款。",
              "开始了解加拿大信用系统如何运作。"
            ]
          },
          {
            "type": "paragraph",
            "text": "第一个月不是为了优化投资，而是让收入、账单和支出变得清楚可见。"
          },
          {
            "type": "heading",
            "text": "第 31 到 60 天：理解信用和税务语言"
          },
          {
            "type": "paragraph",
            "text": "这个阶段可以开始理解信用报告、信用卡、利率、工资单、payroll deductions、销售税，以及报税的基本概念。如果你是自雇或准备做小生意，尽早区分个人资金和公司资金非常重要。"
          },
          {
            "type": "heading",
            "text": "第 61 到 90 天：开始进入规划问题"
          },
          {
            "type": "paragraph",
            "text": "基础稳定后，再学习注册账户、保险需求、应急金、债务成本和投资风险。你不需要马上买任何产品，先看懂地图，再决定路线。"
          },
          {
            "type": "heading",
            "text": "早期最该避免的错误"
          },
          {
            "type": "list",
            "items": [
              "还没理解费用就购买金融产品。",
              "把信用卡当作额外收入。",
              "因为收入不高就忽略报税。",
              "个人资金和生意资金混在一起。",
              "直接相信社交媒体建议而不核实资质。"
            ]
          },
          {
            "type": "paragraph",
            "text": "新移民不需要在三个月内拥有完美财务规划，但需要有学习节奏、清楚记录，以及提出好问题的习惯。"
          },
          {
            "type": "paragraph",
            "text": "本文为教育内容。涉及税务、保险、投资或公司结构的个人决策，应咨询合格专业人士。"
          }
        ]
      }
    }
  },
  {
    "slug": "emergency-fund-canada-financial-learners",
    "date": "2026-04-26",
    "category": "Canada Finance Basics",
    "translations": {
      "en": {
        "title": "Emergency Fund in Canada: Boring, Unsexy, and Often the First Real Financial Goal",
        "excerpt": "Why emergency savings matter before complex investing, especially for newcomers, freelancers, and small business owners.",
        "content": [
          {
            "type": "paragraph",
            "text": "Emergency funds do not sound exciting. They do not produce viral investing stories. They rarely make people feel sophisticated. But for many financial learners, an emergency fund is the first real financial goal because it protects decision-making."
          },
          {
            "type": "heading",
            "text": "What an emergency fund is for"
          },
          {
            "type": "paragraph",
            "text": "An emergency fund is not “money waiting to be invested.” It is money set aside for unexpected but realistic events: job loss, medical travel, car repair, urgent family support, delayed business payment, or a sudden move. The purpose is not return. The purpose is resilience."
          },
          {
            "type": "heading",
            "text": "Why it matters before investing"
          },
          {
            "type": "paragraph",
            "text": "Without emergency savings, people may be forced to sell investments at a bad time, use high-interest debt, or make rushed decisions. A small cash buffer can prevent a temporary problem from becoming a financial spiral."
          },
          {
            "type": "heading",
            "text": "How much is enough?"
          },
          {
            "type": "paragraph",
            "text": "There is no universal number. A salaried employee with stable income may need a different buffer from a freelancer, newcomer, parent, or small business owner. Many people use monthly essential expenses as the base, then adjust for income stability and responsibilities."
          },
          {
            "type": "heading",
            "text": "Where to keep it"
          },
          {
            "type": "paragraph",
            "text": "Emergency money should be accessible and low risk. It is usually not the place for volatile investments. Some people use a savings account, high-interest savings account, or short-term cash product. The exact choice depends on access, fees, insurance, and timing."
          },
          {
            "type": "heading",
            "text": "A practical starting method"
          },
          {
            "type": "list",
            "items": [
              "List monthly essentials: rent, food, utilities, insurance, debt payments.",
              "Set a first target that feels achievable.",
              "Automate a small transfer after income arrives.",
              "Keep it separate from daily spending.",
              "Review it after major life changes."
            ]
          },
          {
            "type": "paragraph",
            "text": "An emergency fund is not a sign of fear. It is a way to buy time. Time is often what allows people to make better financial decisions."
          },
          {
            "type": "paragraph",
            "text": "This article is educational and does not set a personal savings target for any individual reader."
          }
        ]
      },
      "fr": {
        "title": "Fonds d’urgence au Canada : simple, peu excitant, mais souvent prioritaire",
        "excerpt": "Pourquoi l’épargne d’urgence peut être plus importante que l’investissement complexe pour les nouveaux arrivants, travailleurs autonomes et entrepreneurs.",
        "content": [
          {
            "type": "paragraph",
            "text": "Un fonds d’urgence n’a rien de spectaculaire. Il ne crée pas d’histoires virales d’investissement. Pourtant, pour beaucoup d’apprenants, c’est le premier vrai objectif financier, car il protège la capacité de décider."
          },
          {
            "type": "heading",
            "text": "À quoi sert un fonds d’urgence"
          },
          {
            "type": "paragraph",
            "text": "Un fonds d’urgence n’est pas “de l’argent qui attend d’être investi”. C’est de l’argent réservé aux événements imprévus mais réalistes : perte d’emploi, déplacement médical, réparation, aide familiale urgente, paiement d’entreprise retardé ou déménagement soudain."
          },
          {
            "type": "heading",
            "text": "Pourquoi il vient avant l’investissement"
          },
          {
            "type": "paragraph",
            "text": "Sans épargne d’urgence, une personne peut être forcée de vendre des placements au mauvais moment, d’utiliser une dette coûteuse ou de prendre une décision précipitée. Un coussin peut empêcher un problème temporaire de devenir une spirale financière."
          },
          {
            "type": "heading",
            "text": "Combien faut-il?"
          },
          {
            "type": "paragraph",
            "text": "Il n’existe pas de chiffre universel. Un salarié stable n’a pas le même besoin qu’un travailleur autonome, un nouvel arrivant, un parent ou un entrepreneur. Beaucoup utilisent les dépenses essentielles mensuelles comme base, puis ajustent selon la stabilité du revenu."
          },
          {
            "type": "heading",
            "text": "Où le garder"
          },
          {
            "type": "paragraph",
            "text": "L’argent d’urgence doit être accessible et peu risqué. Ce n’est généralement pas l’endroit pour des placements volatils. Certains utilisent un compte d’épargne, un compte à intérêt élevé ou un produit de trésorerie à court terme."
          },
          {
            "type": "heading",
            "text": "Méthode simple pour commencer"
          },
          {
            "type": "list",
            "items": [
              "Lister les dépenses essentielles mensuelles.",
              "Fixer une première cible réaliste.",
              "Automatiser un petit transfert après le revenu.",
              "Le garder séparé des dépenses courantes.",
              "Le réviser après un changement de vie important."
            ]
          },
          {
            "type": "paragraph",
            "text": "Un fonds d’urgence n’est pas un signe de peur. C’est une façon d’acheter du temps, et le temps permet souvent de meilleures décisions financières."
          },
          {
            "type": "paragraph",
            "text": "Cet article est éducatif et ne fixe pas de cible d’épargne personnelle."
          }
        ]
      },
      "zh": {
        "title": "应急金：无聊、不性感，但通常是最先应该完成的财务目标",
        "excerpt": "解释为什么对新移民、自由职业者和小生意主来说，应急储蓄往往比复杂投资更优先。",
        "content": [
          {
            "type": "paragraph",
            "text": "应急金听起来不酷，也不会像投资故事那样容易传播。但对很多金融学习者来说，应急金是第一个真正重要的财务目标，因为它保护的是你的决策能力。"
          },
          {
            "type": "heading",
            "text": "应急金到底是为了什么"
          },
          {
            "type": "paragraph",
            "text": "应急金不是“暂时还没拿去投资的钱”。它是为现实中可能发生的意外准备的资金：失业、临时医疗出行、车辆维修、紧急家庭支持、生意款项延迟到账、突然搬家等。它追求的不是收益，而是韧性。"
          },
          {
            "type": "heading",
            "text": "为什么它常常应该早于投资"
          },
          {
            "type": "paragraph",
            "text": "没有应急金时，人可能被迫在糟糕时间卖出投资、使用高息债务，或做出仓促决定。一小笔现金缓冲，能防止临时问题变成财务螺旋。"
          },
          {
            "type": "heading",
            "text": "到底要准备多少"
          },
          {
            "type": "paragraph",
            "text": "没有所有人都适用的数字。收入稳定的雇员、自由职业者、新移民、父母、小生意主，需要的缓冲不同。很多人会先以每月必要支出为基础，再根据收入稳定性和家庭责任调整。"
          },
          {
            "type": "heading",
            "text": "应该放在哪里"
          },
          {
            "type": "paragraph",
            "text": "应急资金应该容易取用、风险低。它通常不适合放在波动很大的投资里。有些人会使用普通储蓄账户、高息储蓄账户，或短期现金类产品。具体选择要看取用速度、费用、保险和时间需求。"
          },
          {
            "type": "heading",
            "text": "一个简单开始方法"
          },
          {
            "type": "list",
            "items": [
              "列出每月必要支出：房租、食物、水电、保险、债务。",
              "设定一个先能做到的小目标。",
              "收入到账后自动转一小笔钱。",
              "和日常消费账户分开。",
              "生活发生重大变化后重新评估。"
            ]
          },
          {
            "type": "paragraph",
            "text": "应急金不是恐惧，而是购买时间。很多时候，时间就是更好决策的前提。"
          },
          {
            "type": "paragraph",
            "text": "本文仅作教育内容，不为任何个人设定具体储蓄目标。"
          }
        ]
      }
    }
  },
  {
    "slug": "stock-operator-lessons-financial-learners",
    "date": "2026-04-26",
    "category": "Investing Learning Notes",
    "translations": {
      "en": {
        "title": "What Reminiscences of a Stock Operator Can Teach Financial Learners",
        "excerpt": "A non-hype reading of a classic market book: patience, discipline, timing, and why a market story is not a personal strategy.",
        "content": [
          {
            "type": "paragraph",
            "text": "Reminiscences of a Stock Operator is often treated as a trader’s book. That is understandable, but financial learners can read it in a broader way. The book is less useful as a manual and more useful as a study of behaviour under pressure."
          },
          {
            "type": "heading",
            "text": "Patience is an active skill"
          },
          {
            "type": "paragraph",
            "text": "One of the strongest lessons is that waiting can be harder than acting. Many financial mistakes come from the need to do something immediately. Patience is not laziness. It is the ability to let a decision mature before committing capital."
          },
          {
            "type": "heading",
            "text": "Markets punish emotional certainty"
          },
          {
            "type": "paragraph",
            "text": "The book repeatedly shows how confidence, fear, ego, and crowd behaviour affect decisions. These forces are not limited to traders. Long-term investors, business owners, and ordinary savers also face emotional pressure when prices move or news becomes dramatic."
          },
          {
            "type": "heading",
            "text": "Timing is not the same as prediction"
          },
          {
            "type": "paragraph",
            "text": "A beginner may read market stories and think the goal is to predict the future. A more useful interpretation is that timing involves risk management, context, and humility. No one knows every outcome. Good decisions are made with incomplete information."
          },
          {
            "type": "heading",
            "text": "A story is not a personal plan"
          },
          {
            "type": "paragraph",
            "text": "The danger of reading famous market books is imitation. A story about one person’s speculation in one historical context does not become a strategy for your TFSA, RRSP, emergency fund, or retirement plan."
          },
          {
            "type": "heading",
            "text": "Useful questions after reading"
          },
          {
            "type": "list",
            "items": [
              "Do I understand my own risk tolerance?",
              "Am I acting from a plan or from emotion?",
              "What would make me change my mind?",
              "Can I afford to be wrong?",
              "Is this decision connected to my actual financial goals?"
            ]
          },
          {
            "type": "paragraph",
            "text": "The best lesson from the book may be discipline. Not glamour, not prediction, and not copying a legendary trader. For financial learners, discipline is the bridge between information and behaviour."
          },
          {
            "type": "paragraph",
            "text": "This article discusses a public-domain investment classic for education only. It does not provide trading or investment recommendations."
          }
        ]
      },
      "fr": {
        "title": "Ce que Reminiscences of a Stock Operator peut apprendre aux apprenants en finance",
        "excerpt": "Une lecture sans exagération d’un classique : patience, discipline, timing et pourquoi une histoire de marché n’est pas une stratégie personnelle.",
        "content": [
          {
            "type": "paragraph",
            "text": "Reminiscences of a Stock Operator est souvent vu comme un livre de trader. C’est compréhensible, mais les apprenants en finance peuvent le lire plus largement. Il est moins utile comme manuel que comme étude du comportement sous pression."
          },
          {
            "type": "heading",
            "text": "La patience est une compétence active"
          },
          {
            "type": "paragraph",
            "text": "Une grande leçon est que l’attente peut être plus difficile que l’action. Beaucoup d’erreurs financières viennent du besoin d’agir immédiatement. La patience n’est pas de la passivité; c’est la capacité de laisser une décision mûrir."
          },
          {
            "type": "heading",
            "text": "Les marchés punissent la certitude émotionnelle"
          },
          {
            "type": "paragraph",
            "text": "Le livre montre comment la confiance, la peur, l’ego et le comportement de foule influencent les décisions. Ces forces touchent aussi les investisseurs à long terme, entrepreneurs et épargnants."
          },
          {
            "type": "heading",
            "text": "Le timing n’est pas la prédiction"
          },
          {
            "type": "paragraph",
            "text": "Un débutant peut croire que le but est de prédire l’avenir. Une lecture plus utile voit le timing comme une combinaison de gestion du risque, contexte et humilité. Les décisions se prennent toujours avec information imparfaite."
          },
          {
            "type": "heading",
            "text": "Une histoire n’est pas un plan personnel"
          },
          {
            "type": "paragraph",
            "text": "Le danger des grands livres de marché est l’imitation. L’histoire d’un spéculateur dans un contexte historique ne devient pas une stratégie pour votre CELI, REER, fonds d’urgence ou retraite."
          },
          {
            "type": "heading",
            "text": "Questions utiles après la lecture"
          },
          {
            "type": "list",
            "items": [
              "Est-ce que je comprends ma tolérance au risque?",
              "Est-ce que j’agis selon un plan ou une émotion?",
              "Qu’est-ce qui me ferait changer d’avis?",
              "Puis-je me permettre d’avoir tort?",
              "Cette décision est-elle liée à mes objectifs réels?"
            ]
          },
          {
            "type": "paragraph",
            "text": "La meilleure leçon est peut-être la discipline : pas le glamour, pas la prédiction, pas l’imitation. Pour l’apprenant, la discipline relie l’information au comportement."
          },
          {
            "type": "paragraph",
            "text": "Cet article discute un classique du domaine public à des fins éducatives seulement. Il ne recommande aucune transaction ni placement."
          }
        ]
      },
      "zh": {
        "title": "《股票大作手回忆录》能给金融学习者什么真正启发",
        "excerpt": "不把经典书当成交易信号，而是从耐心、纪律、时机和市场心理角度理解它。",
        "content": [
          {
            "type": "paragraph",
            "text": "《股票大作手回忆录》经常被当成交易者必读书。这当然有道理，但金融学习者也可以用更宽的视角阅读它。它更像一本关于压力下人类行为的书，而不是可以直接照抄的操作手册。"
          },
          {
            "type": "heading",
            "text": "耐心是一种主动能力"
          },
          {
            "type": "paragraph",
            "text": "书中最重要的启发之一，是等待往往比行动更难。很多财务错误来自“必须马上做点什么”的冲动。耐心不是懒惰，而是在投入资金前，让判断充分成熟的能力。"
          },
          {
            "type": "heading",
            "text": "市场会惩罚情绪化的确定感"
          },
          {
            "type": "paragraph",
            "text": "书中反复呈现信心、恐惧、自尊和群体行为如何影响决策。这不只属于交易者。长期投资者、创业者、普通储蓄者，在价格波动或新闻刺激下，也会面对类似压力。"
          },
          {
            "type": "heading",
            "text": "时机不等于预测"
          },
          {
            "type": "paragraph",
            "text": "新手读市场故事，很容易以为关键是预测未来。更有用的理解是：时机包含风险管理、背景判断和谦逊。没有人拥有完整信息，好的决策也经常是在不确定中完成。"
          },
          {
            "type": "heading",
            "text": "故事不是个人方案"
          },
          {
            "type": "paragraph",
            "text": "读经典市场书最大的风险是模仿。一个人在特定历史环境下的投机故事，不会自动变成适合你的 TFSA、RRSP、应急金或退休规划的策略。"
          },
          {
            "type": "heading",
            "text": "读完后可以问自己"
          },
          {
            "type": "list",
            "items": [
              "我是否理解自己的风险承受能力？",
              "我是在按计划行动，还是被情绪推动？",
              "什么情况会让我改变判断？",
              "我是否承受得起判断错误？",
              "这个决定是否和真实财务目标有关？"
            ]
          },
          {
            "type": "paragraph",
            "text": "这本书最有价值的可能不是传奇感，而是纪律。对金融学习者来说，纪律是从信息走向行为的桥梁。"
          },
          {
            "type": "paragraph",
            "text": "本文仅从教育角度讨论公共领域经典作品，不提供交易或投资建议。"
          }
        ]
      }
    }
  }
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
