'use server';

export default async function ReviewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    {children}
  </>
}