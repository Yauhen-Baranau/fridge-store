'use client';

import { useParams } from 'next/navigation';
import { Routes } from "@constants/routes";
import { useMemo } from 'react';
import categories from '@category-data/categories.json';
import allSubсategories from '@category-data/subcategories.json';
import allServices from '@category-data/services.json';
import ServicePageComponent from '@src/ui-kit/service-page-component/service-page-component';
import { Subcategory } from './[subcategory]/page';
import { routeToCategoryIdMap } from './routing-maps';
import { useHrefHelper } from '@contexts/href-context';

export interface Category {
  id: string,
  label: string,
  description: Array<
    { type: 'paragraph', content: string }
    | { type: 'list', title: string, items: Array<string> }
  >,
  imagePath: string,
}

export default function CategoryPage() {
  const params = useParams();
  const { getSubcategoryHref } = useHrefHelper();
  const categoryId = routeToCategoryIdMap.get(`${params.category}` as Routes);
  // this is unoptimized, but the website will be static anyway
  const getSubcategoryStartingPrice = (subcategoryId: string) => {
    const subcategoryServices = allServices.filter(service => service.parentCategoryId === subcategoryId);
    return subcategoryServices.length > 0
      ? Math.min(...subcategoryServices.map(({ price }) => price))
      : undefined;
  };
  const subcategories = useMemo(() => {
    const rawSubcategories = (allSubсategories as Array<Subcategory>).filter(subcategory => subcategory.parentCategoryId === categoryId);
    return rawSubcategories.map(subcategory => ({
      ...subcategory,
      redirectTo: getSubcategoryHref(subcategory.id),
      price: getSubcategoryStartingPrice(subcategory.id),
    }));
  }, [categoryId, getSubcategoryHref]);
  const categoryData = categories.find(category => category.id === categoryId) as Category;
  return categoryData && <ServicePageComponent service={categoryData} subservices={subcategories} />
}