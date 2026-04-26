"use client";

import type { ReactNode } from "react";
import styles from "./layout.module.scss";
import Header from "../ui-kit/header/header";
import Navigation from "../ui-kit/navigation/navigation";
import Footer from "../ui-kit/footer/footer";
import composeClassName from "@src/helpers/compose-class-name";
import CallMeBack from "../ui-kit/call-me-back/call-me-back";
import Breadcrumbs from "@src/ui-kit/breadcrumbs/breadcrumbs";
import { useDialog } from "@contexts/dialog/dialog-context";
import useResponsive from "@hooks/use-responsive";

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { isDesktop, initialResizeSettled } = useResponsive();
  const { isOpen } = useDialog();

  return (
    <body className={composeClassName(styles.body, isOpen && styles["dialog-open"])}>
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
