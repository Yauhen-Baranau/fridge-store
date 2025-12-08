'use client';

import Image from 'next/image';
import styles from './frequent-fridge-problems.module.scss';
import Button from '../button/button';
import composeClassName from '@src/helpers/compose-class-name';
import Link from 'next/link';

export default function FrequentFridgeProblems({ customClass }: { customClass?: string }) {
  return <section className={composeClassName(styles['frequent-fridge-problems'], customClass)}>
    <h1 className={styles.title}>Частые проблемы с холодильником</h1>
    <div className={styles['left-content']}>
      <Image className={styles.image} src='/water-bottles.webp' width={470} height={470} alt='Бутылки с водой' />
      <span className={styles['call-me-back-text']}>Не нашли решение своей проблемы?</span>
      <Button
        customClass={styles['call-me-back-button']}
        text='Вызвать мастера'
        onClick={console.log}
      />
    </div>
    <div className={styles['right-content']}>
      {[
        { label: 'ПРОБЛЕМЫ С ОХЛАЖДЕНИЕМ', link: 'https://google.com' },
        { label: 'ПРОБЛЕМЫ С РАБОТОЙ ХОЛОДИЛЬНИКА', link: 'https://google.com' },
        { label: 'ШУМЫ И ПОСТОРОННИЕ ЗВУКИ', link: 'https://google.com' },
        { label: 'ПРОБЛЕМЫ С УТЕЧКАМИ И ПРОТЕКАНИЕМ', link: 'https://google.com' },
        { label: 'ПРОБЛЕМЫ С КОМПЛЕКТУЮЩИМИ', link: 'https://google.com' },
      ].map((frequentProblemData, index) => <div
        key={index}
        className={styles['frequent-problem']}
      >
        <span className={styles['frequent-problem-label']}>{frequentProblemData.label}</span>
        <Link href={frequentProblemData.link}>
          <Button
            customClass={styles['frequent-problem-button']}
            icon={{
              path: '/icons/thick-arrow-up.svg',
              width: 24,
              height: 24,
            }}
          />
        </Link>
      </div>)}
      <Link href='https://google.com'>
        <Button
          customClass={styles['view-all-problems-button']}
          text='Смотреть все проблемы'
          style='text-only'
        />
      </Link>
    </div>
  </section>
}