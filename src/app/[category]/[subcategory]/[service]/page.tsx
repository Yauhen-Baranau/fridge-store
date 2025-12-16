'use client';

import styles from './page.module.scss';
import { useParams } from 'next/navigation';
import { Routes } from "@constants/routes";
import { useMemo } from 'react';
import allServices from '@category-data/services.json';
import ServicePageComponent from '@src/ui-kit/service-page-component/service-page-component';
import { Subcategory } from '../page';
import { routeToServiceIdMap, serviceIdToRouteMap } from '../../routing-maps';

export interface Service extends Subcategory {
  relatedServiceIds: Array<string>
};

// TO DO: rename
export default function ServicePag() {
  const params = useParams();
  const serviceId = routeToServiceIdMap.get(`${params.service}` as Routes);
  const serviceData = allServices.find(service => service.id === serviceId) as Service;
  const relatedServices = useMemo(() => {
    const rawRelatedServices = serviceData
      ? (allServices as Array<Service>).filter(service => serviceData.relatedServiceIds.includes(service.id))
      : [];
    return rawRelatedServices.map(service => ({
      ...service,
      redirectTo: `./${serviceIdToRouteMap.get(service.id)}`
    }));
  }, [serviceData]);
  return serviceData && <ServicePageComponent
    service={serviceData}
    subservices={relatedServices}
    preServiceGridContent={relatedServices.length > 0 && <h2 className={styles['related-services-title']}>Похожие услуги</h2>}
  />
}