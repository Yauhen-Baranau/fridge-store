"use client";
import useResponsive from "@hooks/use-responsive";
import Script from "next/script";
import { jsonLd } from "@constants/jsonld";
import { Montserrat } from "next/font/google";
import styles from "./layout.module.scss";
import Header from "../ui-kit/header/header";
import Navigation from "../ui-kit/navigation/navigation";
import Footer from "../ui-kit/footer/footer";
import composeClassName from "@src/helpers/compose-class-name";
import CallMeBack from "../ui-kit/call-me-back/call-me-back";
import Breadcrumbs from "@src/ui-kit/breadcrumbs/breadcrumbs";

import {
  useDialog,
} from "@contexts/dialog/dialog-context";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
});

export function RootLayoutBody({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isDesktop, initialResizeSettled } = useResponsive();
  const { isOpen } = useDialog();

  return (
    <body className={composeClassName(montserrat.className, styles.body, isOpen && styles["dialog-open"])}>
      <Script
        id='fridge-store-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Header />
      {initialResizeSettled && (
        <>
          {isDesktop && <Navigation />}
          <Breadcrumbs />
          {children}
          <CallMeBack customClass={styles["call-me-back"]} />
          <Footer />
        </>
      )}
    </body>
  );
}