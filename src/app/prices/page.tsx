'use client';

import Form from '@src/ui-kit/form/form';
import styles from './page.module.scss';
import services from '@category-data/services.json';

export default function PricesPage() {
  const diagnosticsPrice = services.find(service => service.label === 'Диагностика холодильника')?.price;
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
    {/* TO DO: change to ui-kit one */}
    <Form
      customClass={styles['call-me-back-form']}
      config={{ fieldConfigs: [] }}
      submitButtonText='a'
      submitCallback={() => {}}
    />
    <div className={styles['prices-block']}></div>
  </main>
}