'use client';

import Button from '@ui-kit/button/button';
import styles from './discount-block.module.scss';
import composeClassName from '@src/helpers/compose-class-name';

export default function DiscountBlock({ customClass }: { customClass?: string }) {
  return <section className={composeClassName(styles['discount-block'], customClass)}>
    <h1 className={styles['discount-block-title']}>
      Дарим <span className={styles['discount-block-title-bold']}>скидку 10%</span> на первый заказ
    </h1>
    <p className={styles['discount-block-text']}>
      В благодарность <span className={styles['discount-block-text-bold']}>за выбор нашей компании</span><br />
      дарим скидку на все ремонтные услуги
    </p>
    <Button customClass={styles['discount-button']} text='Получить скидку' />
  </section>
}