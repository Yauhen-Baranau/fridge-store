'use client';

import styles from './page.module.scss';
import CallMeBackForm from '@src/ui-kit/call-me-back-form/call-me-back-form';
import Accordion from '@src/ui-kit/accordion/accordion';
import { useMemo } from 'react';
import Image from 'next/image';
import BackgroundSnowflake from '@src/ui-kit/background-snowflake/background-snowflake';
import { Subcategory, useCategoryData } from '@contexts/category-data-context';
import List from '@ui-kit/list/list';

export default function PricesPage() {
  const { getAllSubcategories, getSubcategoryServices, getDiagnosticsService } = useCategoryData();
  const diagnosticsPrice = useMemo(() => getDiagnosticsService()?.price ?? 0, [getDiagnosticsService]);
  const getSubcategoryAccordion = (subcategory: Subcategory) => {
    return <Accordion
      toggleAreaCustomClass={styles['subcategory-price-accordion-toggle-area']}
      toggleAreaContent={<h3 className={styles['subcategory-price-accordion-toggle-area-label']}>{subcategory.label}</h3>}
      contentWrapperCustomClass={styles['subcategory-price-accordion-content-wrapper']}
      content={<>
        <Image className={styles['subcategory-image']} src={subcategory.imagePath} width={246} height={160} alt='Изображение подкатегории услуг' />
        <div className={styles['subcategory-service-list']}>
          {getSubcategoryServices(subcategory.id)?.map(service => <div key={service.id} className={styles['subcategory-service']}>
            <span className={styles['subcategory-service-label']}>{service.label}</span>
            <span className={styles['subcategory-service-price']}>от {service.price} руб.</span>
          </div>)}
        </div>
        <BackgroundSnowflake width={247} height={239} left={67} bottom={84} rotation={-30} color='light-gray' />
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
          <span className={styles.free}>Бесплатно</span>
        </p>
      </div>}
      <p className={styles['prices-description-text']}>Реле в холодильнике - это пускозащитный механизм, который приводит в действие мотор-компрессор, когда на элемент поступает сигнал от термостата, и прекращает его работу в момент нагрева двигателя. Если деталь неисправна, потребуется ее восстановление или замена. Реле в холодильнике - это пускозащитный механизм, который приводит в действие мотор-компрессор, когда на элемент поступает сигнал от термостата, и прекращает его работу в момент нагрева двигателя. Если деталь неисправна, потребуется ее восстановление или замена. </p>
    </div>
    <CallMeBackForm customClass={styles['call-me-back-form']} />
    <div className={styles['prices-block']}>
      <h2 className={styles['prices-block-title']}>Цены</h2>
      <div className={styles['with-parts']}>Цены указаны с учетом новых запчастей</div>
      <List
        customClass={styles['accordion-list']}
        items={getAllSubcategories().map(subcategory => ({ content: getSubcategoryAccordion(subcategory) }))}
      />
      <BackgroundSnowflake width={247} height={239} left={81} top={30} rotation={-30} color='main-white' />
      <BackgroundSnowflake width={247} height={239} right={46} top={30} rotation={-30} color='main-white' />
    </div>
  </main>
}