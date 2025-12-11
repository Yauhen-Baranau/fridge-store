'use client';

import styles from './page.module.scss';
import subcategories from '@category-data/subcategories.json';
import services from '@category-data/services.json';
import CallMeBackForm from '@src/ui-kit/call-me-back-form/call-me-back-form';
import { Subcategory } from '../[category]/[subcategory]/page';
import Accordion from '@src/ui-kit/accordion/accordion';
import React from 'react';
import Image from 'next/image';
import composeClassName from '@src/helpers/compose-class-name';

export default function PricesPage() {
  const diagnosticsPrice = services.find(service => service.label === 'Диагностика холодильника')?.price;

  const getSubcategoryAccordion = (subcategory: Subcategory) => {
    const subcategoryServices = services.filter(service => service.parentCategoryId === subcategory.id);
    return <Accordion
      toggleAreaCustomClass={styles['subcategory-price-accordion-toggle-area']}
      toggleAreaContent={<h3 className={styles['subcategory-price-accordion-toggle-area-label']}>{subcategory.label}</h3>}
      contentWrapperCustomClass={styles['subcategory-price-accordion-content-wrapper']}
      content={<>
        <Image className={styles['subcategory-image']} src={subcategory.imagePath} width={246} height={160} alt='Изображение подкатегории услуг' />
        <div className={styles['subcategory-service-list']}>
          {subcategoryServices.map(service => <div key={service.id} className={styles['subcategory-service']}>
            <span className={styles['subcategory-service-label']}>{service.label}</span>
            <span className={styles['subcategory-service-price']}>от {service.price} руб.</span>
          </div>)}
        </div>
        <Image className={(styles['accordion-content-snowflake'])} src='/snowflake.webp' width={247} height={239} alt='Снежинка' />
      </>}
    />
  };

  return <main className={styles.prices}>
    <div className={styles['prices-description']}>
      <h1 className={styles.title}>Цены</h1>
      {diagnosticsPrice && <div className={styles['diagnostics-price']}>
        <p className={styles['diagnostics-price-upper-row']}>
          <span>Диагностика холодильника</span>
          <span>{diagnosticsPrice} руб.</span>
        </p>
        <p className={styles['diagnostics-price-lower-row']}>
          <span>При выполнении ремонта</span>
          <span>БЕСПЛАТНО</span>
        </p>
      </div>}
      <p className={styles['prices-description-text']}>Реле в холодильнике - это пускозащитный механизм, который приводит в действие мотор-компрессор, когда на элемент поступает сигнал от термостата, и прекращает его работу в момент нагрева двигателя. Если деталь неисправна, потребуется ее восстановление или замена. Реле в холодильнике - это пускозащитный механизм, который приводит в действие мотор-компрессор, когда на элемент поступает сигнал от термостата, и прекращает его работу в момент нагрева двигателя. Если деталь неисправна, потребуется ее восстановление или замена. </p>
    </div>
    <CallMeBackForm customClass={styles['call-me-back-form']} />
    <div className={styles['prices-block']}>
      <h2 className={styles['prices-block-title']}>Цены</h2>
      <div className={styles['with-parts']}>Цены указаны с учетом новых запчастей</div>
      {subcategories.map(subcategory => <React.Fragment key={subcategory.id}>{getSubcategoryAccordion(subcategory)}</React.Fragment>)}
      {/* didn't use background-image because these snowflakes are rotated */}
      <Image className={composeClassName(styles.snowflake, styles['snowflake-upper-left'])} src='/snowflake.webp' width={247} height={239} alt='Снежинка' />
      <Image className={composeClassName(styles.snowflake, styles['snowflake-upper-right'])} src='/snowflake.webp' width={247} height={239} alt='Снежинка' />
    </div>
  </main>
}