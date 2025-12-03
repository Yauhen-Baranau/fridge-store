export const dynamic = 'force-static';

import { Montserrat } from "next/font/google";
import "./globals.scss";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className}`}>
        <Header />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
