'use server';

import React from 'react';
import styles from './popular-services.module.scss';
import composeClassName from '@src/helpers/compose-class-name';
import Button from '@ui-kit/button/button';
import Link from 'next/link';
import Image from 'next/image';

export default async function PopularServices() {
  const serviceFactory = ({
    imagePath,
    title,
    price,
    dynamicPrice = true,
    priceComment,
    freeWithRepairs = false,
    requiredTime,
    guarantee,
  }: {
    imagePath: string,
    title: string,
    price: number,
    dynamicPrice?: boolean,
    priceComment?: string,
    freeWithRepairs?: boolean,
    requiredTime: string,
    guarantee?: string,
  }) => {
    return <Link href='https://google.com'>
      <div className={styles.service}>
        <Image className={styles['service-image']} src={imagePath} width={263} height={173} alt='Изображение услуги' />
        <h3 className={styles['service-title']}>{title}</h3>
        <p className={styles['price-block']}>
          {dynamicPrice && <span className={styles['dynamic-price-text']}>от </span>}
          <span className={styles.price}>{price} руб.</span>
          {priceComment && <span className={styles['price-comment']}> ({priceComment})</span>}
          {freeWithRepairs && <>
            <br />
            <span className={styles['free-with-repairs-text']}>Бесплатно (при ремонте)</span>
          </>}
        </p>
        <div className={styles['service-footer']}>
          <div className={styles['service-footer-block']}>
            <span className={styles['service-footer-block-title']}>Время работы:</span>
            <span>{requiredTime}</span>
          </div>
          {guarantee && <div className={styles['service-footer-block']}>
            <span className={styles['service-footer-block-title']}>Гарантия:</span>
            <span>{guarantee}</span>
          </div>}
        </div>
      </div>
    </Link>
  };

  return <section className={styles['popular-services']}>
    <h1 className={styles['popular-services-title']}>Популярные услуги</h1>
    <div className={styles['services-list']}>
      {[
        {
          imagePath: '/services/diagnostics.webp',
          title: 'Диагностика неисправности',
          price: 20,
          freeWithRepairs: true,
          dynamicPrice: false,
          requiredTime: '30-60 минут',
        },
        {
          imagePath: '/services/compressor-repairs.webp',
          title: 'Замена и ремонт компрессора',
          price: 350,
          priceComment: 'включая запчасти',
          requiredTime: '1,5-3 часа',
          guarantee: '6 месяцев',
        },
        {
          imagePath: '/services/refrigerant-topup.webp',
          title: 'Заправка хладагентом (фреоном)',
          price: 130,
          requiredTime: '1-2 часа',
          guarantee: '3 месяца',
        },
        {
          imagePath: '/services/thermostat-repairs.webp',
          title: 'Ремонт или замена термостата',
          price: 125,
          requiredTime: '40-90 минут',
          guarantee: '6 месяцев',
        },
        {
          imagePath: '/services/drainage-cleaning.webp',
          title: 'Чистка и прочистка дренажной системы',
          price: 50,
          requiredTime: '30-60 минут',
          guarantee: '3 месяца',
        },
        {
          imagePath: '/services/nofrost-repairs.webp',
          title: 'Ремонт системы No Frost',
          price: 125,
          requiredTime: '1.5-3 часа',
          guarantee: '6 месяцев',
        },
        {
          imagePath: '/services/sealant-replacement.webp',
          title: 'Замена уплотнителя дверцы',
          price: 85,
          requiredTime: '40-90 минут',
          guarantee: '6 месяцев',
        },
        {
          imagePath: '/services/control-module-repairs.webp',
          title: 'Ремонт модуля управления',
          price: 165,
          requiredTime: '1-3 часа',
          guarantee: '6 месяцев',
        },
        {
          imagePath: '/services/cooling-ventilator-replacement.webp',
          title: 'Замена вентилятора охлаждения',
          price: 135,
          requiredTime: '1-2 часа',
          guarantee: '6 месяцев',
        },
      ].map((params, index) => <React.Fragment key={index}>
        {serviceFactory(params)}
      </React.Fragment>)}
    </div>
    <Link href='https://google.com'>
      <Button text='Смотреть все услуги' style='text-only' />
    </Link>
    {/* didn't use background-image because these snowflakes are rotated */}
    <Image className={composeClassName(styles.snowflake, styles['snowflake-upper-left'])} src='/snowflake.webp' width={658} height={638} alt='Снежинка' />
    <Image className={composeClassName(styles.snowflake, styles['snowflake-lower-right'])} src='/snowflake.webp' width={658} height={638} alt='Снежинка' />
  </section>
} 