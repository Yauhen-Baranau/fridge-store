

import "./globals.scss";

import {
  DialogContextProvider,
} from "@contexts/dialog/dialog-context";
import { HrefContextProvider } from "@contexts/href/href-context";
import { CategoryDataContextProvider } from "@contexts/category-data/category-data-context";
import { RootLayoutBody } from "./LayoutBody";
export const dynamic = "force-static";


export const metadata = {
  verification: {
    google: "7MoWBgorYCgjRnGmyJpiJnZ70FDl42iDgjf0P6h4HHI",
    yandex: "d696d434f3da3530",
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
          <html lang='ru'>
            <RootLayoutBody>{children}</RootLayoutBody>
          </html>
        </DialogContextProvider>
      </HrefContextProvider>
    </CategoryDataContextProvider>
  );
}
