'use client';

import styles from './service-page-client-component.module.scss';
import ServicePageComponent from '@src/ui-kit/service-page-component/service-page-component';
import { useCategoryData } from '@contexts/category-data-context';
import { useHrefHelper } from '@contexts/href-context';

export default function ServicePageClientComponent({ serviceId }: { serviceId: string }) {
  const { getServiceById, getRelatedServices } = useCategoryData();
  const { getServiceHref } = useHrefHelper();
  const serviceData = getServiceById(serviceId);
  const relatedServices = getRelatedServices(serviceId);
  return serviceData && <ServicePageComponent
    service={serviceData}
    subservices={relatedServices!.map(service => ({ ...service, redirectTo: getServiceHref(service.id) }))}
    preServiceGridContent={relatedServices!.length > 0 && <h2 className={styles['related-services-title']}>Похожие услуги</h2>}
  />
}