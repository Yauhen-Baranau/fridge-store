import React from 'react';
import styles from './services-grid.module.scss';
import Image from 'next/image';
import Button from '../button/button';

interface Service {
  imagePath: string,
  label: string,
  price: number,
}

export default function ServicesGrid({ services }: { services: Array<Service> }) {
  return <div className={styles['services-grid']}>
    {services.map((service, index) => <React.Fragment key={index}>
      <div className={styles.service}>
        <Image className={styles['service-image']} src={service.imagePath} width={180} height={180} alt='Изображение услуги' />
        <h4 className={styles['service-label']}>{service.label}</h4>
        <span className={styles['with-parts']}>С учетом запчастей</span>
        <div className={styles['service-footer']}>
          <span className={styles.price}>от {service.price} руб.</span>
          <Button customClass={styles['service-learn-more']} text='Подробнее' style='text-only' />
        </div>
      </div>
    </React.Fragment>)}
  </div>
}