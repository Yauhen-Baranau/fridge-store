export const dynamic = 'force-static';

import { Montserrat } from "next/font/google";
import "./globals.scss";
import styles from './layout.module.scss';
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import composeClassName from "@src/helpers/compose-class-name";
import CallMeBack from "./components/call-me-back/call-me-back";

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
        <Header />
        <Navigation />
        {children}
        <CallMeBack customClass={styles['call-me-back']} />
        <Footer />
      </body>
    </html>
  );
}
