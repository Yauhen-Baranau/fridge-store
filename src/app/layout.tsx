export const dynamic = 'force-static';

import { Montserrat } from "next/font/google";
import "./globals.scss";
import styles from './layout.module.scss';
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import composeClassName from "@src/helpers/compose-class-name";

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
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
