import Button from '@src/ui-kit/button/button';
import styles from './fridge-manufacturers.module.scss';
import React from 'react';
import composeClassName from '@src/helpers/compose-class-name';

export default function FridgeManufacturers() {
  const fridgeManufacturerFactory = ({ name, imagePath }: { name: string, imagePath: string }) => {
    return <div className={styles['fridge-manufacturer']}>
      <img src={imagePath} width={69} height={160} />
      <h3 className={styles['fridge-manufacturer-name']}>{name}</h3>
      <Button customClass={styles['fridge-manufacturer-button']} text='Узнать подробнее' />
    </div>
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
    <Button customClass={styles['view-all-models-button']} text='Смотреть все модели' />
    {/* didn't use background-image because these snowflakes are rotated */}
    <img src='snowflake.webp' width={131} height={127} className={composeClassName(styles['snowflake'], styles['snowflake-upper-left'])} />
    <img src='snowflake.webp' width={131} height={127} className={composeClassName(styles['snowflake'], styles['snowflake-upper-right'])} />
  </section>
}