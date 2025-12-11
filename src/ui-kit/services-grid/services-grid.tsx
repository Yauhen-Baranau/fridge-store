import React, { useState } from 'react';
import styles from './services-grid.module.scss';
import Image from 'next/image';
import Button from '../button/button';
import Link from 'next/link';

interface Service {
  imagePath: string,
  label: string,
  price?: number,
  redirectTo: string,
}

export default function ServicesGrid({
  services,
  unexpandedServiceLimit = 6
}: {
  services: Array<Service>,
  unexpandedServiceLimit?: number,
}) {
  const [allExpanded, setAllExpanded] = useState(services.length <= unexpandedServiceLimit);

  const servicesToDisplay = allExpanded ? services : services.slice(0, 6);
  return <div className={styles['services-grid']}>
    {servicesToDisplay.map((service, index) => <React.Fragment key={index}>
      <div className={styles.service}>
        <Image className={styles['service-image']} src={service.imagePath} width={180} height={180} alt='Изображение услуги' />
        <h4 className={styles['service-label']}>{service.label}</h4>
        {service.price && <span className={styles['with-parts']}>С учетом запчастей</span>}
        <div className={styles['service-footer']}>
          {service.price && <span className={styles.price}>от {service.price} руб.</span>}
          <Link className={styles['service-learn-more']} href={service.redirectTo}>
            <Button customClass={styles['service-learn-more-button']} text='Подробнее' style='text-only' />
          </Link>
        </div>
      </div>
    </React.Fragment>)}
    {!allExpanded && <Button
      customClass={styles['view-all-services-button']}
      text='Смотреть все услуги'
      style='text-only'
      onClick={() => setAllExpanded(true)}
    />}
  </div>
}