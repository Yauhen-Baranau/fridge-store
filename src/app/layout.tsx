export const dynamic = "force-static";

import type { Metadata } from "next";
import "./globals.scss";
import { jsonLd } from "@constants/jsonld";
import { DialogContextProvider } from "@contexts/dialog/dialog-context";
import { HrefContextProvider } from "@contexts/href/href-context";
import { CategoryDataContextProvider } from "@contexts/category-data/category-data-context";
import RootLayoutClient from "./root-layout-client";

const siteUrl = "https://holodcentr.by";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ремонт холодильников в Минске — Holodcentr",
    template: "%s | Holodcentr",
  },
  description:
    "Профессиональный ремонт холодильников в Минске: диагностика, выезд мастера в день обращения и гарантия на работы.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_BY",
    siteName: "Holodcentr",
    url: siteUrl,
    title: "Ремонт холодильников в Минске — Holodcentr",
    description:
      "Профессиональный ремонт холодильников в Минске: диагностика, выезд мастера в день обращения и гарантия на работы.",
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
    <CategoryDataContextProvider>
      <HrefContextProvider>
        <DialogContextProvider>
          <html lang="ru">
            <RootLayoutClient>
              {children}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(jsonLd),
                }}
              />
            </RootLayoutClient>
          </html>
        </DialogContextProvider>
      </HrefContextProvider>
    </CategoryDataContextProvider>
  );
}
