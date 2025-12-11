'use client';

import { useParams, usePathname } from 'next/navigation';
import { Routes } from "@constants/routes";
import { useMemo } from 'react';
import subсategories from '@category-data/subcategories.json';
import allServices from '@category-data/services.json';
import ServicePageComponent from '@src/ui-kit/service-page-component/service-page-component';
import { Category } from '../page';
import { Service } from './[service]/page';
import { routeToSubcategoryIdMap, serviceIdToRouteMap } from '../routing-maps';

export interface Subcategory extends Category {
  parentCategoryId: string,
}

export default function SubcategoryPage() {
  const params = useParams();
  const pathname = usePathname();
  const subcategoryId = routeToSubcategoryIdMap.get(`${params.subcategory}` as Routes);
  const services = useMemo(() => {
    const rawServices = (allServices as Array<Service>).filter(subcategory => subcategory.parentCategoryId === subcategoryId);
    return rawServices.map(service => ({
      ...service,
      redirectTo: `${pathname}/${serviceIdToRouteMap.get(service.id)}`,
    }));
  }, [subcategoryId]);
  const subcategoryData = subсategories.find(subcategory => subcategory.id === subcategoryId);
  return subcategoryData && <ServicePageComponent service={subcategoryData} subservices={services} />
}