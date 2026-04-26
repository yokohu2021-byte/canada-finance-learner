import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canada Finance Learner",
  description: "Financial learning articles for newcomers, founders, and self-learners in Canada.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
