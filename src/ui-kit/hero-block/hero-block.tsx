'use server';

import List from '@ui-kit/list/list';
import styles from './hero-block.module.scss';
import Button from '@ui-kit/button/button';
import Image from 'next/image';

export default async function HeroBlock() {
  return <section className={styles['hero-block']}>
    <div className={styles['hero-block-left']}>
      <h1 className={styles.title}>
        РЕМОНТ &nbsp;&nbsp;<span className={styles['in-minsk']}>в Минске</span><br />
        ХОЛОДИЛЬНИКОВ
      </h1>
      <List customClass={styles.guarantees} items={[
        {
          content: <span>Гарантия до <b>12 месяцев</b></span>,
          icon: {
            path: '/icons/circle.svg',
            width: 7,
            height: 7,
          }
        },
        {
          content: <span><b>Любой</b> ремонт холодильников на&nbsp;дому</span>,
          icon: {
            path: '/icons/circle.svg',
            width: 7,
            height: 7,
          }
        },
        {
          content: <span>Озвучиваем цену <b>ДО</b> начала ремонта</span>,
          icon: {
            path: '/icons/circle.svg',
            width: 7,
            height: 7,
          }
        },
      ]} />
      <Button customClass={styles['discount-button']} text='Получить скидку 10%' />
      <p className={styles.note}>
        * &nbsp;Запишись сейчас на диагностику холодильника<br />
        <span className={styles['aligner']}>* &nbsp;</span>и получи скидку 10% на ремонт
      </p>
    </div>
    <div className={styles['hero-block-right']}>
      <Image src='/hero-block-photo.webp' width={570} height={500} alt='Специалист по ремонту холодильников' />
    </div>
  </section>
}