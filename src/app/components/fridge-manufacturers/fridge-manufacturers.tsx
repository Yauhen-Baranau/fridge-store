'use server';

import Button from '@src/ui-kit/button/button';
import styles from './fridge-manufacturers.module.scss';
import React from 'react';
import composeClassName from '@src/helpers/compose-class-name';
import Link from 'next/link';

export default async function FridgeManufacturers() {
  const fridgeManufacturerFactory = ({ name, imagePath }: { name: string, imagePath: string }) => {
    return <Link href='https://google.com'>
      <div className={styles['fridge-manufacturer']}>
        <img src={imagePath} width={69} height={160} />
        <h3 className={styles['fridge-manufacturer-name']}>{name}</h3>
        <Button customClass={styles['fridge-manufacturer-button']} text='Узнать подробнее' style='monochrome' />
      </div>
    </Link>
  };

  return <section className={styles['fridge-manufacturers']}>
    <h1 className={styles['fridge-manufacturers-title']}>
      Ремонтируем холодильники<br />
      всех производителей
    </h1>
    <div className={styles['fridge-manufacturers-list']}>
      {[
        { name: 'АТЛАНТ', imagePath: 'fridges/atlant.webp' },
        { name: 'LG', imagePath: 'fridges/lg.webp' },
        { name: 'SAMSUNG', imagePath: 'fridges/samsung.webp' },
        { name: 'INDESIT', imagePath: 'fridges/indesit.webp' },
        { name: 'BEKO', imagePath: 'fridges/beko.webp' },
        { name: 'BOSCH', imagePath: 'fridges/bosch.webp' },
      ].map((params, index) => <React.Fragment key={index}>{fridgeManufacturerFactory(params)}</React.Fragment>)}
    </div>
    <Button text='Смотреть все модели' style='text-only' />
    {/* didn't use background-image because these snowflakes are rotated */}
    <img src='snowflake.webp' width={131} height={127} className={composeClassName(styles['snowflake'], styles['snowflake-upper-left'])} />
    <img src='snowflake.webp' width={131} height={127} className={composeClassName(styles['snowflake'], styles['snowflake-upper-right'])} />
  </section>
}