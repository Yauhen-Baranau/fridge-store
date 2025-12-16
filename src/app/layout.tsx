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

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={composeClassName(montserrat.className, styles.body)}>
        <HrefContextProvider>
          <DialogContextProvider>
            <Header />
            <Navigation />
            <Breadcrumbs customClass={styles.breadcrumbs} />
            {children}
            <CallMeBack customClass={styles['call-me-back']} />
            <Footer />
          </DialogContextProvider>
        </HrefContextProvider>
      </body>
    </html>
  );
}
