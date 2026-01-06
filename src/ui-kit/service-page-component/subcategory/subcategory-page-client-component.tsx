'use client';

import ServicePageComponent from '@src/ui-kit/service-page-component/service-page-component';
import { useHrefHelper } from '@contexts/href/href-context';
import { useCategoryData } from '@contexts/category-data/category-data-context';

export default function SubcategoryPageClientComponent({ subcategoryId }: { subcategoryId: string }) {
  const { getSubcategoryById, getSubcategoryServices } = useCategoryData();
  const { getServiceHref } = useHrefHelper();
  const subcategoryData = getSubcategoryById(subcategoryId);
  const services = getSubcategoryServices(subcategoryId);
  return subcategoryData && <ServicePageComponent
    service={subcategoryData}
    subservices={services!.map(service => ({ ...service, redirectTo: getServiceHref(service.id) }))}
  />
}