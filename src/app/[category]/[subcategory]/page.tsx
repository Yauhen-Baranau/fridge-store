'use client';

import { useParams } from 'next/navigation';
import { Routes } from "@constants/routes";
import { useMemo } from 'react';
import subсategories from '../category-structure/subcategories.json';
import allServices from '../category-structure/services.json';
import ServicePage from '@ui-kit/service-page/service-page';
import { Category, Subcategory } from '../page';

const routeToSubcategoryIdMap: Map<Routes, string> = new Map([
  [Routes.CoolingSystemComponentReplacementAndRepairs, '1-1'],
]);

export interface Service extends Subcategory {};

export default function SubcategoryPage() {
  const params = useParams();
  const subcategoryId = routeToSubcategoryIdMap.get(`${params.subcategory}` as Routes);
  const services = useMemo(() => {
    return (allServices as Array<Service>).filter(subcategory => subcategory.parentCategoryId === subcategoryId);
  }, [subcategoryId]);
  const subcategoryData = subсategories.find(subcategory => subcategory.id === subcategoryId);
  return subcategoryData && <ServicePage service={subcategoryData} subservices={services} />
}