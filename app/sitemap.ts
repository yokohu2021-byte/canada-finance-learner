import type { MetadataRoute } from "next";
import { articles } from "../content/articles";
import { locales } from "../lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://canadafinancelearner.ca";
  const staticPaths = ["", "/articles", "/free-consultation", "/about", "/disclaimer", "/privacy-policy", "/contact"];

  const rootUrl = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];

  const staticUrls = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
    }))
  );

  const articleUrls = locales.flatMap((locale) =>
    articles.map((article) => ({
      url: `${baseUrl}/${locale}/articles/${article.slug}`,
      lastModified: new Date(article.date),
    }))
  );

  return [...rootUrl, ...staticUrls, ...articleUrls];
}
