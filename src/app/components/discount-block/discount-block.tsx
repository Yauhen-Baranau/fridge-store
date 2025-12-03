import Button from '@src/ui-kit/button/button';
import styles from './discount-block.module.scss';

export default function DiscountBlock() {
  return <section className={styles['discount-block']}>
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