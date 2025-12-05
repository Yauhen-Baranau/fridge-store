'use server';

import List from '@src/ui-kit/list/list';
import styles from './hero-block.module.scss';
import Button from '@src/ui-kit/button/button';
import composeClassName from '@src/helpers/compose-class-name';

export default async function HeroBlock({ customClass }: { customClass?: string }) {
  return <section className={composeClassName(styles['hero-block'], customClass)}>
    <div className={styles['hero-block-left']}>
      <h1 className={styles.title}>
        РЕМОНТ &nbsp;&nbsp;<span className={styles['in-minsk']}>в Минске</span><br />
        ХОЛОДИЛЬНИКОВ
      </h1>
      <List customClass={styles.guarantees} items={[
        { iconPath: 'icons/circle.webp', content: <span>Гарантия до <b>12 месяцев</b></span> },
        { iconPath: 'icons/circle.webp', content: <span><b>Любой</b> ремонт холодильников на дому</span> },
        { iconPath: 'icons/circle.webp', content: <span>Озвучиваем цену <b>ДО</b> начала ремонта</span> },
      ]} />
      <Button customClass={styles['discount-button']} text='Получить скидку 10%' />
      <p className={styles.note}>
        * &nbsp;Запишись сейчас на диагностику холодильника<br />
        <span className={styles['aligner']}>* &nbsp;</span>и получи скидку 10% на ремонт
      </p>
    </div>
    <div className={styles['hero-block-right']}>
      <img src='hero-block-photo.webp' width={570} height={500} alt='Специалист по ремонту холодильников' />
    </div>
  </section>
}