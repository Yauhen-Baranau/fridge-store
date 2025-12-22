'use client';

import styles from './layout.module.scss';
import FrequentFridgeProblems from '@ui-kit/frequent-fridge-problems/frequent-fridge-problems';
import DiscountBlock from '@ui-kit/discount-block/discount-block';
import FridgeManufacturers from '@ui-kit/fridge-manufacturers/fridge-manufacturers';
import HowToOrderRepairs from '@ui-kit/how-to-order-repairs/how-to-order-repairs';

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={styles['category-layout']}>
    {children}
    <FrequentFridgeProblems />
    <DiscountBlock />
    <HowToOrderRepairs />
    <FridgeManufacturers />
  </main>
}