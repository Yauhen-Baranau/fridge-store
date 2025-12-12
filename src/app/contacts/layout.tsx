'use server';

// TO DO: delete useless layouts
export default async function ContactsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    {children}
  </>
}