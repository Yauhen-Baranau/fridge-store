'use client';

import styles from './page.module.scss';
import { useParams } from 'next/navigation';
import { Routes } from "@constants/routes";
import ServicePageComponent from '@src/ui-kit/service-page-component/service-page-component';
import { routeToServiceIdMap } from '../../routing-maps';
import { useCategoryData } from '@contexts/category-data-context';
import { useHrefHelper } from '@contexts/href-context';

export default function ServicePage() {
  const params = useParams();
  const { getServiceById, getRelatedServices } = useCategoryData();
  const { getServiceHref } = useHrefHelper();
  const serviceId = routeToServiceIdMap.get(`${params.service}` as Routes) ?? '';
  const serviceData = getServiceById(serviceId);
  const relatedServices = getRelatedServices(serviceId);
  return serviceData && <ServicePageComponent
    service={serviceData}
    subservices={relatedServices!.map(service => ({ ...service, redirectTo: getServiceHref(service.id) }))}
    preServiceGridContent={relatedServices!.length > 0 && <h2 className={styles['related-services-title']}>Похожие услуги</h2>}
  />
}