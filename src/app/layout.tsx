'use client';
export const dynamic = 'force-static';

import { Montserrat } from "next/font/google";
import "./globals.scss";
import styles from './layout.module.scss';
import Header from "../ui-kit/header/header";
import Navigation from "../ui-kit/navigation/navigation";
import Footer from "../ui-kit/footer/footer";
import composeClassName from "@src/helpers/compose-class-name";
import CallMeBack from "../ui-kit/call-me-back/call-me-back";
import Breadcrumbs from "@src/ui-kit/breadcrumbs/breadcrumbs";
import { DialogContextProvider, useDialog } from "@contexts/dialog/dialog-context";
import { HrefContextProvider } from "@contexts/href/href-context";
import { CategoryDataContextProvider } from "@contexts/category-data/category-data-context";
import useResponsive from "@hooks/use-responsive";
import { useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
});

function RootLayoutBody({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isDesktop } = useResponsive();
  const { isOpen } = useDialog();

  return <body className={composeClassName(
    montserrat.className,
    styles.body,
    isOpen && styles['dialog-open'],
  )}>
    <Header />
    {isDesktop && <Navigation />}
    <Breadcrumbs customClass={styles.breadcrumbs} />
    {children}
    <CallMeBack customClass={styles['call-me-back']} />
    <Footer />
  </body>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CategoryDataContextProvider>
      <HrefContextProvider>
        <DialogContextProvider>
          <html lang='ru'>
            <RootLayoutBody>{children}</RootLayoutBody>
          </html>
        </DialogContextProvider>
      </HrefContextProvider>
    </CategoryDataContextProvider>
  );
}
