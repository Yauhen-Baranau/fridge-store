import { Montserrat } from "next/font/google";
import "./globals.scss";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
