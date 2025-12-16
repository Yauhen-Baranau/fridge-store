'use client';

import React, { useContext } from 'react';
import styles from './popular-services.module.scss';
import Button from '@ui-kit/button/button';
import Link from 'next/link';
import Image from 'next/image';
import BackgroundSnowflake from '../background-snowflake/background-snowflake';
import services from '@category-data/services.json';
import { HrefContext } from '@contexts/href-context';

export default function PopularServices() {
  const { getServiceHref } = useContext(HrefContext);

  const serviceFactory = ({
    id,
    imagePath,
    label,
    price,
    dynamicPrice = true,
    priceComment,
    freeWithRepairs = false,
    requiredTime,
    guarantee,
  }: {
    id: string,
    imagePath: string,
    label: string,
    price: number,
    dynamicPrice?: boolean,
    priceComment?: string,
    freeWithRepairs?: boolean,
    requiredTime?: string,
    guarantee?: string,
  }) => {
    return <Link href={getServiceHref(id)}>
      <div className={styles.service}>
        <Image className={styles['service-image']} src={imagePath} width={263} height={173} alt='Изображение услуги' />
        <h3 className={styles['service-title']}>{label}</h3>
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

  const freeWithRepairsServiceIds = ['1-6-1'];
  const withIncludingPartsCommentServiceIds = ['1-1-1'];
  const popularServiceIds = ['1-6-1', '1-1-1', '1-1-5', '1-1-6', '1-6-2', '1-3-1', '1-4-1', '1-2-1', '1-4-2'];
  return <section className={styles['popular-services']}>
    <h1 className={styles['popular-services-title']}>Популярные услуги</h1>
    <div className={styles['services-list']}>
      {popularServiceIds.map((id, index) => {
        const serviceData = services.find(service => service.id === id);
        return serviceData && <React.Fragment key={index}>
          {serviceFactory({
            ...serviceData,
            freeWithRepairs: freeWithRepairsServiceIds.includes(id),
            priceComment: withIncludingPartsCommentServiceIds.includes(id) ? 'включая запчасти' : '',
          })}
        </React.Fragment>;
      })}
    </div>
    <Link href='https://google.com'>
      <Button text='Смотреть все услуги' style='text-only' />
    </Link>
    <BackgroundSnowflake width={658} height={638} left={0} top={94} rotation={-30} color='main-white' opacity={0.4} zIndex={-1} />
    <BackgroundSnowflake width={658} height={638} right={33} bottom={222} rotation={-30} color='main-white' opacity={0.4} zIndex={-1} />
  </section>
} 