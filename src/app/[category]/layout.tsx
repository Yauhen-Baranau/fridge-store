'use client';

import Breadcrumbs from '@ui-kit/breadcrumbs/breadcrumbs';
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
  return <>
    <Breadcrumbs customClass={styles.breadcrumbs} />
    <main>{children}</main>
    <FrequentFridgeProblems customClass={styles['post-children-block']} />
    <DiscountBlock customClass={styles['post-children-block']} />
    <HowToOrderRepairs customClass={styles['post-children-block']} />
    <FridgeManufacturers customClass={styles['post-children-block']} />
  </>
}