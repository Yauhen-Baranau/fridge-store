'use server';

export default async function CommonFridgeProblemsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    {children}
  </>
}