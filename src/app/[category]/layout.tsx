'use client';
import Breadcrumbs from '@src/ui-kit/breadcrumbs/breadcrumbs';
import styles from './layout.module.scss';

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <Breadcrumbs />
    {children}
  </>
}