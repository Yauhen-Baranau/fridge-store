'use client';

import Breadcrumbs from "@src/ui-kit/breadcrumbs/breadcrumbs";

export default function PricesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    {children}
  </>
}