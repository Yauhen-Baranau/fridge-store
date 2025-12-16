'use client';

import { useParams } from 'next/navigation';
import { Routes } from "@constants/routes";
import { useContext, useMemo } from 'react';
import subсategories from '@category-data/subcategories.json';
import allServices from '@category-data/services.json';
import ServicePageComponent from '@src/ui-kit/service-page-component/service-page-component';
import { Category } from '../page';
import { Service } from './[service]/page';
import { routeToSubcategoryIdMap } from '../routing-maps';
import { HrefContext } from '@contexts/href-context';

export interface Subcategory extends Category {
  parentCategoryId: string,
}

export default function SubcategoryPage() {
  const { getServiceHref } = useContext(HrefContext);
  const params = useParams();
  const subcategoryId = routeToSubcategoryIdMap.get(`${params.subcategory}` as Routes);
  const services = useMemo(() => {
    const rawServices = (allServices as Array<Service>).filter(subcategory => subcategory.parentCategoryId === subcategoryId);
    return rawServices.map(service => ({
      ...service,
      redirectTo: getServiceHref(service.id),
    }));
  }, [subcategoryId]);
  const subcategoryData = subсategories.find(subcategory => subcategory.id === subcategoryId);
  return subcategoryData && <ServicePageComponent service={subcategoryData} subservices={services} />
}