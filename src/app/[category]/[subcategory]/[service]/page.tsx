'use client';

import { useParams } from 'next/navigation';
import { Routes } from "@constants/routes";
import { useMemo } from 'react';
import allServices from '../../category-structure/services.json';
import ServicePage from '@ui-kit/service-page/service-page';
import { Subcategory } from '../page';

const routeToServiceIdMap: Map<Routes, string> = new Map([
  [Routes.CompressorReplacement, '1-1-1'],
]);

export interface Service extends Subcategory {
  relatedServiceIds: Array<string>
};

// TO DO: rename
export default function ServicePag() {
  const params = useParams();
  const serviceId = routeToServiceIdMap.get(`${params.service}` as Routes);
  const relatedServices = useMemo(() => {
    return serviceId
      ? (allServices as Array<Service>).filter(service => service.relatedServiceIds.includes(serviceId))
      : [];
  }, [serviceId]);
  const serviceData = allServices.find(service => service.id === serviceId);
  return serviceData && <ServicePage service={serviceData} subservices={relatedServices} />
}