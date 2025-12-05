'use server';

import Button from '@src/ui-kit/button/button';
import styles from './about-us.module.scss';
import Link from 'next/link';

export default async function AboutUs() {
  return <section className={styles['about-us']}>
    <h1 className={styles['about-us-title']}>О компании</h1>
    <div className={styles['about-us-content']}>
      <p className={styles['about-us-text']}>
        Наша компания специализируется на профессиональном ремонте холодильников любых брендов и моделей,
        от бытовых до промышленных. Мы работаем на рынке <span className={styles.bold}>более 10 лет</span> и за это время заслужили репутацию
        надежных и ответственных специалистов. Наша команда состоит из опытных мастеров с техническим образованием,
        которые постоянно проходят обучение и знают всё о современных холодильных системах.<br /><br />
        Мы ценим ваше время, поэтому выезжаем точно по договоренности, <span className={styles.bold}>диагностируем быстро</span> и устраняем неполадки
        уже <span className={styles.bold}>в день обращения</span>. Мы используем <span className={styles.bold}>только оригинальные запчасти</span>, предоставляем гарантию на все виды работ
        и всегда объясняем клиенту суть проблемы простыми словами.<br /><br />
        <span className={styles.bold}>Наша цель</span> — не просто отремонтировать технику, а сделать так, чтобы вы больше не волновались о её работе.
      </p>
      <Link className={styles['about-us-link']} href='https://google.com'>
        <Button text='Подробнее' style='text-only' />
      </Link>
    </div>
    <img className={styles['about-us-image']} src='about-us-photo.webp' width={470} height={522} alt='Специалист по ремонту холодильников' />
  </section>
}