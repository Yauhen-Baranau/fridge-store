'use client';

import styles from './page.module.scss';
import CallMeBackForm from '@src/ui-kit/call-me-back-form/call-me-back-form';
import { useEffect, useMemo, useState } from 'react';
import BackgroundSnowflake from '@src/ui-kit/background-snowflake/background-snowflake';
import { useCategoryData } from '@contexts/category-data/category-data-context';
import List from '@ui-kit/list/list';
import useResponsive from '@hooks/use-responsive';
import Button from '@ui-kit/button/button';
import DialogForm from '@ui-kit/dialog-form/dialog-form';
import { useDialog } from '@contexts/dialog/dialog-context';
import { getSubcategoryAccordion } from './helpers/get-subcategory-accordion';

export default function PricesPage() {
  const { isMobile } = useResponsive();
  const { showDialog } = useDialog();
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  useEffect(() => setDescriptionExpanded(!isMobile), [isMobile]);

  const { getAllSubcategories, getSubcategoryServices, getDiagnosticsService, getDiagnosticsServiceId } = useCategoryData();
  const diagnosticsPrice = useMemo(() => getDiagnosticsService()?.price ?? 0, [getDiagnosticsService]);

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
      <p className={styles['prices-description-text']}>
        Реле в холодильнике - это пускозащитный механизм, который приводит в действие мотор-компрессор, когда на элемент поступает сигнал от термостата, и прекращает его работу в момент нагрева двигателя. Если деталь неисправна, потребуется ее восстановление или замена.
        {isMobile && !descriptionExpanded && <span className={styles['mobile-expand-description']} onClick={() => setDescriptionExpanded(true)}> Подробнее</span>}
        {!isMobile || descriptionExpanded && <span> Реле в холодильнике - это пускозащитный механизм, который приводит в действие мотор-компрессор, когда на элемент поступает сигнал от термостата, и прекращает его работу в момент нагрева двигателя. Если деталь неисправна, потребуется ее восстановление или замена.</span>}
      </p>
      {isMobile && <Button
        customClass={styles['call-me-back-button']}
        text='Получить консультацию'
        onClick={() => showDialog(<DialogForm />)}
      />}
    </div>
    {!isMobile && <CallMeBackForm customClass={styles['call-me-back-form']} />}
    <div className={styles['prices-block']}>
      <h2 className={styles['prices-block-title']}>Цены</h2>
      <div className={styles['with-parts']}>Цены указаны с учетом новых запчастей</div>
      <List
        customClass={styles['accordion-list']}
        items={getAllSubcategories().map(subcategory => ({ content: getSubcategoryAccordion({
          subcategory,
          subcategoryServices: getSubcategoryServices(subcategory.id),
          diagnosticsServiceId: getDiagnosticsServiceId(),
          isMobile,
          styles,
        }) }))}
      />
      {!isMobile && <>
        <BackgroundSnowflake width={247} height={239} left={81} top={30} rotation={-30} color='main-white' />
        <BackgroundSnowflake width={247} height={239} right={46} top={30} rotation={-30} color='main-white' />
      </>}
    </div>
  </main>
}