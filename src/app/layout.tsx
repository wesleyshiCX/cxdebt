// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://cxdebt.co"),
  title: {
    default: "CX Debt — Quantify the Hidden Cost of Unresolved Customer Issues",
    template: "%s | CX Debt",
  },
  description:
    "CX Debt is a framework and calculator for measuring the compounding cost of unresolved support backlogs, knowledge gaps, and process inefficiencies in customer-facing organizations.",
  keywords: [
    "CX Debt",
    "customer experience debt",
    "support backlog cost",
    "CX Debt calculator",
    "CX Debt framework",
    "customer support metrics",
    "support operations",
    "technical debt for support",
  ],
  authors: [{ name: "Your Name", url: "https://wesonops.com" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cxdebt.co",
    siteName: "CX Debt",
    title: "CX Debt — Quantify the Hidden Cost of Unresolved Customer Issues",
    description:
      "A framework and calculator for measuring the compounding cost of unresolved support backlogs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CX Debt Framework",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CX Debt — Quantify the Hidden Cost of Unresolved Customer Issues",
    description:
      "A framework and calculator for measuring the compounding cost of unresolved support backlogs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
