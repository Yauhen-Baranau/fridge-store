'use client';

import React from 'react';
import styles from './popular-services.module.scss';
import Button from '@ui-kit/button/button';
import Link from 'next/link';
import Image from 'next/image';
import BackgroundSnowflake from '../background-snowflake/background-snowflake';
import { useHrefHelper } from '@contexts/href-context';
import { Routes } from '@constants/routes';
import { useCategoryData } from '@contexts/category-data-context';
import useResponsive from '@hooks/use-responsive';
import Slider from '@ui-kit/slider/slider';
import composeClassName from '@helpers/compose-class-name';

export default function PopularServices() {
  const { getServiceById } = useCategoryData();
  const { getPageHref, getServiceHref } = useHrefHelper();
  const { isDesktop, isMobile } = useResponsive();

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
    return <Link className={styles['service-link']} href={getServiceHref(id)}>
      <div className={styles.service}>
        <div className={styles['service-image-wrapper']}>
          <Image
            className={styles['service-image']}
            src={imagePath}
            fill
            alt='Изображение услуги'
          />
        </div>
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

  const freeWithRepairsServiceIds = ['11'];
  const withIncludingPartsCommentServiceIds = ['1'];
  const popularServiceIds = ['11', '1', '5', '6', '12', '8', '9', '7', '10'];
  const services = popularServiceIds
    .slice(0, isDesktop ? 9 : 6)
    .map((id, index) => {
      const serviceData = getServiceById(id);
      return serviceData && <React.Fragment key={index}>
        {serviceFactory({
          ...serviceData,
          freeWithRepairs: freeWithRepairsServiceIds.includes(id),
          priceComment: withIncludingPartsCommentServiceIds.includes(id) ? 'включая запчасти' : '',
        })}
      </React.Fragment>;
    });
  return <section className={styles['popular-services']}>
    <h1 className={styles['popular-services-title']}>Популярные услуги</h1>
    {isMobile
      ? <Slider
        customClass={composeClassName(styles['services-slider'])}
        slides={services}
      />
      : <div className={styles['services-list']}>{services}</div>
    }
    <Link href={getPageHref(Routes.Prices)}>
      <Button text='Смотреть все услуги' style='text-only' />
    </Link>
    <BackgroundSnowflake width={658} height={638} left={0} top={94} rotation={-30} color='main-white' opacity={0.4} zIndex={-1} />
    <BackgroundSnowflake width={658} height={638} right={33} bottom={222} rotation={-30} color='main-white' opacity={0.4} zIndex={-1} />
  </section>
} 