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
import { DialogContextProvider } from "@src/contexts/dialog-context";
import { HrefContextProvider } from "@contexts/href-context";
import { CategoryDataContextProvider } from "@contexts/category-data-context";
import useResponsive from "@hooks/use-responsive";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isDesktop } = useResponsive();

  return (
    <html lang='ru'>
      <body className={composeClassName(montserrat.className, styles.body)}>
        <CategoryDataContextProvider>
          <HrefContextProvider>
            <DialogContextProvider>
              <Header />
              {isDesktop && <Navigation />}
              <Breadcrumbs customClass={styles.breadcrumbs} />
              {children}
              <CallMeBack customClass={styles['call-me-back']} />
              <Footer />
            </DialogContextProvider>
          </HrefContextProvider>
        </CategoryDataContextProvider>
      </body>
    </html>
  );
}
