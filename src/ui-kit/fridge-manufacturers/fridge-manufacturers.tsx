'use client';

import Button from '@ui-kit/button/button';
import styles from './fridge-manufacturers.module.scss';
import React from 'react';
import composeClassName from '@src/helpers/compose-class-name';
import Link from 'next/link';
import Image from 'next/image';
import BackgroundSnowflake from '../background-snowflake/background-snowflake';

export default function FridgeManufacturers({ customClass }: { customClass?: string }) {
  const fridgeManufacturerFactory = ({ name, imagePath }: { name: string, imagePath: string }) => {
    return <Link href='https://google.com'>
      <div className={styles['fridge-manufacturer']}>
        <Image src={imagePath} width={69} height={160} alt='Изображение холодильника' />
        <h3 className={styles['fridge-manufacturer-name']}>{name}</h3>
        <Button customClass={styles['fridge-manufacturer-button']} text='Узнать подробнее' style='monochrome' />
      </div>
    </Link>
  };

  return <section className={composeClassName(styles['fridge-manufacturers'], customClass)}>
    <h1 className={styles['fridge-manufacturers-title']}>
      Ремонтируем холодильники<br />
      всех производителей
    </h1>
    <div className={styles['fridge-manufacturers-list']}>
      {[
        { name: 'АТЛАНТ', imagePath: '/fridges/atlant.webp' },
        { name: 'LG', imagePath: '/fridges/lg.webp' },
        { name: 'SAMSUNG', imagePath: '/fridges/samsung.webp' },
        { name: 'INDESIT', imagePath: '/fridges/indesit.webp' },
        { name: 'BEKO', imagePath: '/fridges/beko.webp' },
        { name: 'BOSCH', imagePath: '/fridges/bosch.webp' },
      ].map((params, index) => <React.Fragment key={index}>{fridgeManufacturerFactory(params)}</React.Fragment>)}
    </div>
    <Button text='Смотреть все модели' style='text-only' />
    <BackgroundSnowflake width={131} height={127} left={40} top={48} rotation={-30} />
    <BackgroundSnowflake width={131} height={127} right={40} top={48} rotation={-30} />
  </section>
}