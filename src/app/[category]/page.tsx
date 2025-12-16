'use client';

import { useParams } from 'next/navigation';
import { Routes } from "@constants/routes";
import ServicePageComponent from '@src/ui-kit/service-page-component/service-page-component';
import { routeToCategoryIdMap } from './routing-maps';
import { useHrefHelper } from '@contexts/href-context';
import { useCategoryData } from '@contexts/category-data-context';

export default function CategoryPage() {
  const params = useParams();
  const { getCategoryById, getCategorySubcategories, getSubcategoryStartingPrice } = useCategoryData();
  const { getSubcategoryHref } = useHrefHelper();
  const categoryId = routeToCategoryIdMap.get(`${params.category}` as Routes) ?? '';
  const categoryData = getCategoryById(categoryId);
  const subcategories = getCategorySubcategories(categoryId);
  return categoryData && <ServicePageComponent
    service={categoryData}
    subservices={subcategories!.map(subcategory => ({
      ...subcategory,
      redirectTo: getSubcategoryHref(subcategory.id),
      price: getSubcategoryStartingPrice(subcategory.id) || 0,
    }))}
  />
}