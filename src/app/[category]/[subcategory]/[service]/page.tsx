'use client';

import { useParams } from 'next/navigation';
import { Routes } from "@constants/routes";
import { useMemo } from 'react';
import allServices from '../../category-structure/services.json';
import ServicePage from '@ui-kit/service-page/service-page';
import { Subcategory } from '../page';
import { routeToServiceIdMap, serviceIdToRouteMap } from '../../routing-maps';

export interface Service extends Subcategory {
  relatedServiceIds: Array<string>
};

// TO DO: rename
export default function ServicePag() {
  const params = useParams();
  const serviceId = routeToServiceIdMap.get(`${params.service}` as Routes);
  const relatedServices = useMemo(() => {
    const rawRelatedServices = serviceId
      ? (allServices as Array<Service>).filter(service => service.relatedServiceIds.includes(serviceId))
      : [];
    return rawRelatedServices.map(service => ({
      ...service,
      redirectTo: `${params.category}/${params.subcategory}/${serviceIdToRouteMap.get(service.id)}`
    }));
  }, [serviceId]);
  const serviceData = allServices.find(service => service.id === serviceId);
  return serviceData && <ServicePage service={serviceData} subservices={relatedServices} />
}