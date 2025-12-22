'use client';

import Button from '@ui-kit/button/button';
import styles from './fridge-manufacturers.module.scss';
import React from 'react';
import composeClassName from '@src/helpers/compose-class-name';
import Link from 'next/link';
import Image from 'next/image';
import BackgroundSnowflake from '../background-snowflake/background-snowflake';
import useResponsive from '@hooks/use-responsive';
import Slider from '@ui-kit/slider/slider';

export default function FridgeManufacturers({ customClass }: { customClass?: string }) {
  const { isMobile } = useResponsive();

  const fridgeManufacturerFactory = ({ name, imagePath }: { name: string, imagePath: string }) => {
    return <Link href='https://google.com'>
      <div className={styles['fridge-manufacturer']}>
        <Image src={imagePath} width={69} height={160} alt='Изображение холодильника' />
        <h3 className={styles['fridge-manufacturer-name']}>{name}</h3>
        <Button customClass={styles['fridge-manufacturer-button']} text='Узнать подробнее' style='monochrome' />
      </div>
    </Link>
  };

  const fridgeManufacturers = [
    { name: 'АТЛАНТ', imagePath: '/fridges/atlant.webp' },
    { name: 'LG', imagePath: '/fridges/lg.webp' },
    { name: 'SAMSUNG', imagePath: '/fridges/samsung.webp' },
    { name: 'INDESIT', imagePath: '/fridges/indesit.webp' },
    { name: 'BEKO', imagePath: '/fridges/beko.webp' },
    { name: 'BOSCH', imagePath: '/fridges/bosch.webp' },
  ].map((params, index) => <React.Fragment key={index}>{fridgeManufacturerFactory(params)}</React.Fragment>)
  return <section className={composeClassName(styles['fridge-manufacturers'], customClass)}>
    <h1 className={styles['fridge-manufacturers-title']}>
      Ремонтируем холодильники<br />
      всех производителей
    </h1>
    {!isMobile
      ? <div className={styles['fridge-manufacturers-list']}>{fridgeManufacturers}</div>
      : <Slider
        customClass={styles['fridge-manufacturers-slider']}
        slides={fridgeManufacturers}
        slidesGap={30}
      />
    }
    <Button text='Смотреть все модели' style='text-only' />
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
          width={70}
          height={68}
          left={20}
          top={20}
          rotation={-30}
        />
        <BackgroundSnowflake
          width={70}
          height={68}
          right={20}
          top={20}
          rotation={-30}
        />
        <BackgroundSnowflake
          width={70}
          height={68}
          left={20}
          bottom={40}
          rotation={-30}
        />
        <BackgroundSnowflake
          width={70}
          height={68}
          right={20}
          bottom={40}
          rotation={-30}
        />
      </>
    }
  </section>
}