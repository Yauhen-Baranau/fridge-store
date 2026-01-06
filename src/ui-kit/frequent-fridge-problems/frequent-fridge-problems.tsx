'use client';

import Image from 'next/image';
import styles from './frequent-fridge-problems.module.scss';
import Button from '../button/button';
import composeClassName from '@src/helpers/compose-class-name';
import Link from 'next/link';
import { useDialog } from '@contexts/dialog/dialog-context';
import DialogForm from '@ui-kit/dialog-form/dialog-form';
import { Routes } from '@constants/routes';
import { useHrefHelper } from '@contexts/href/href-context';

export default function FrequentFridgeProblems({ customClass }: { customClass?: string }) {
  const { showDialog } = useDialog();
  const { getPageHref } = useHrefHelper();

  return <section className={composeClassName(styles['frequent-fridge-problems'], customClass)}>
    <h1 className={styles.title}>Частые проблемы с холодильником</h1>
    <div className={styles['left-content']}>
      <div className={styles['image-container']}>
        <Image className={styles.image} src='/water-bottles.webp' alt='Бутылки с водой' fill={true} />
      </div>
      <span className={styles['call-me-back-text']}>Не нашли решение своей проблемы?</span>
      <Button
        customClass={styles['call-me-back-button']}
        text='Вызвать мастера'
        onClick={() => showDialog(<DialogForm type='i-have-a-question' />)}
      />
    </div>
    <div className={styles['right-content']}>
      {[
        { label: 'ПРОБЛЕМЫ С ОХЛАЖДЕНИЕМ', link: getPageHref(Routes.CommonFridgeProblems) },
        { label: 'ПРОБЛЕМЫ С РАБОТОЙ ХОЛОДИЛЬНИКА', link: getPageHref(Routes.CommonFridgeProblems) },
        { label: 'ШУМЫ И ПОСТОРОННИЕ ЗВУКИ', link: getPageHref(Routes.CommonFridgeProblems) },
        { label: 'ПРОБЛЕМЫ С УТЕЧКАМИ И ПРОТЕКАНИЕМ', link: getPageHref(Routes.CommonFridgeProblems) },
        { label: 'ПРОБЛЕМЫ С КОМПЛЕКТУЮЩИМИ', link: getPageHref(Routes.CommonFridgeProblems) },
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
      <Link href={`/${Routes.CommonFridgeProblems}`}>
        <Button
          customClass={styles['view-all-problems-button']}
          text='Смотреть все проблемы'
          style='text-only'
        />
      </Link>
    </div>
  </section>
}