import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canada Finance Learner",
  description: "Financial learning articles for newcomers, founders, and self-learners in Canada.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6790380864593257"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
