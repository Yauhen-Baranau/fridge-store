'use client';

import List, { ListItem } from '@ui-kit/list/list';
import styles from './main-advantages.module.scss';
import React from 'react';
import Image from 'next/image';
import BackgroundSnowflake from '../background-snowflake/background-snowflake';
import useResponsive from '@hooks/use-responsive';
import Accordion from '@ui-kit/accordion/accordion';

export default function MainAdvantages() {
  const { isMobile } = useResponsive();

  const advantageFactory = ({
    imagePath,
    title,
    subtitle,
    items
  }: {
    imagePath: string,
    title: string,
    subtitle?: string,
    items: Array<ListItem>
  }) => {
    const advantageHeader = <div className={styles['advantage-header']}>
      <Image src={imagePath} width={46} height={46} alt='Иконка' />
      <h2 className={styles['advantage-title']}>
        {title}
        {subtitle && <>
          <br />
          <span className={styles['advantage-subtitle']}>{subtitle}</span>
        </>}
      </h2>
    </div>
    const advantageContent = <List customClass={styles['advantage-content']} items={items} />;
    return !isMobile
      ? <div className={styles.advantage}>
        {advantageHeader}
        {advantageContent}
      </div>
      : <Accordion
        customClass={styles.advantage}
        toggleAreaContent={advantageHeader}
        content={advantageContent}
        toggleAreaCustomClass={styles['advantage-toggle-area']}
        contentWrapperCustomClass={styles['advantage-content-wrapper']}
        buttonStyle='chevron'
      />;
  };

  return <section className={styles['main-advantages']}>
    <h1 className={styles.title}>
      Основные преимущества <br />
      нашей компании
    </h1>
    <div className={styles['advantages-block']}>
      {[
        {
          imagePath: '/icons/clock-bg.svg',
          title: 'Быстро',
          items: [
            {
              content: 'Ремонт в день заявки',
              icon: {
                path: '/icons/circle.svg',
                width: 7,
                height: 7
              },
            },
            {
              content: 'От 15 минут до 24 часов, в зависимости от поломки',
              icon: {
                path: '/icons/circle.svg',
                width: 7,
                height: 7
              },
            },
          ]
        },
        {
          imagePath: '/icons/calendar-bg.svg',
          title: 'Ежедневно',
          items: [
            {
              content: 'Пн-Вс с 08:00 до 21:00',
              icon: {
                path: '/icons/circle.svg',
                width: 7,
                height: 7
              },
            },
            {
              content: 'Без выходных',
              icon: {
                path: '/icons/circle.svg',
                width: 7,
                height: 7
              },
            },
          ]
        },
        {
          imagePath: '/icons/medal-bg.svg',
          title: 'С гарантией',
          items: [
            {
              content: 'Опытные мастера',
              icon: {
                path: '/icons/circle.svg',
                width: 7,
                height: 7
              },
            },
            {
              content: 'От 3 до 12 месяцев гарантии',
              icon: {
                path: '/icons/circle.svg',
                width: 7,
                height: 7
              },
            },
            {
              content: 'Гарантийный талон',
              icon: {
                path: '/icons/circle.svg',
                width: 7,
                height: 7
              },
            },
          ]
        },
        {
          imagePath: '/icons/wallet-bg.svg',
          title: 'Недорого',
          items: [
            {
              content: 'Низкие цены на ремонт',
              icon: {
                path: '/icons/circle.svg',
                width: 7,
                height: 7
              },
            },
            {
              content: 'Ремонт от 35 руб.',
              icon: {
                path: '/icons/circle.svg',
                width: 7,
                height: 7
              },
            },
          ]
        },
        {
          imagePath: '/icons/piggybank-bg.svg',
          title: 'Бесплатно',
          subtitle: 'При выполнении ремонта',
          items: [
            {
              content: 'Диагностика техники',
              icon: {
                path: '/icons/circle.svg',
                width: 7,
                height: 7
              },
            },
            {
              content: 'Выезд мастера на дом',
              icon: {
                path: '/icons/circle.svg',
                width: 7,
                height: 7
              },
            },
          ]
        },
        {
          imagePath: '/icons/tick-bg.svg',
          title: 'Без б/у запчастей',
          items: [
            {
              content: 'Оригинальные запчасти',
              icon: {
                path: '/icons/circle.svg',
                width: 7,
                height: 7
              },
            },
            {
              content: 'Если деталь вышла из строя, заменяем ее на новую',
              icon: {
                path: '/icons/circle.svg',
                width: 7,
                height: 7
              },
            },
          ]
        },
      ].map((params, index) => <React.Fragment key={index}>{advantageFactory(params)}</React.Fragment>)}
    </div>
    {!isMobile
      ? <>
        <BackgroundSnowflake
          width={131}
          height={127}
          left={40}
          top={48}
          rotation={-30}
        />
        <BackgroundSnowflake
          width={131}
          height={127}
          right={40}
          top={48}
          rotation={-30}
        />
      </>
      : <>
        <BackgroundSnowflake
          width={69}
          height={64}
          left={20}
          top={20}
          rotation={-30}
        />
        <BackgroundSnowflake
          width={69}
          height={64}
          right={20}
          top={20}
          rotation={-30}
        />
      </>
    }
  </section>
}