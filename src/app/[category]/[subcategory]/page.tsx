'use client';

import { useParams } from 'next/navigation';
import { Routes } from "@constants/routes";
import ServicePageComponent from '@src/ui-kit/service-page-component/service-page-component';
import { routeToSubcategoryIdMap } from '../routing-maps';
import { useHrefHelper } from '@contexts/href-context';
import { useCategoryData } from '@contexts/category-data-context';

export default function SubcategoryPage() {
  const { getSubcategoryById, getSubcategoryServices } = useCategoryData();
  const { getServiceHref } = useHrefHelper();
  const params = useParams();
  const subcategoryId = routeToSubcategoryIdMap.get(`${params.subcategory}` as Routes) ?? '';
  const subcategoryData = getSubcategoryById(subcategoryId);
  const services = getSubcategoryServices(subcategoryId);
  return subcategoryData && <ServicePageComponent
    service={subcategoryData}
    subservices={services!.map(service => ({ ...service, redirectTo: getServiceHref(service.id) }))}
  />
}