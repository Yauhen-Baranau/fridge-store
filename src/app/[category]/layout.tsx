'use client';

import Breadcrumbs from '@src/ui-kit/breadcrumbs/breadcrumbs';
import styles from './layout.module.scss';
import FrequentFridgeProblems from '@src/ui-kit/frequent-fridge-problems/frequent-fridge-problems';
import DiscountBlock from '@src/ui-kit/discount-block/discount-block';
import FridgeManufacturers from '@src/ui-kit/fridge-manufacturers/fridge-manufacturers';
import HowToOrderRepairs from '@src/ui-kit/how-to-order-repairs/how-to-order-repairs';

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <Breadcrumbs customClass={styles.breadcrumbs} />
    {children}
    <FrequentFridgeProblems customClass={styles['post-children-block']} />
    <DiscountBlock customClass={styles['post-children-block']} />
    <HowToOrderRepairs customClass={styles['post-children-block']} />
    <FridgeManufacturers customClass={styles['post-children-block']} />
  </>
}