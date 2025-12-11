'use client';

import { useParams } from 'next/navigation';
import { Routes } from "@constants/routes";
import { useMemo } from 'react';
import categories from './category-structure/categories.json';
import allSubсategories from './category-structure/subcategories.json';
import ServicePage from '@ui-kit/service-page/service-page';
import { Subcategory } from './[subcategory]/page';

const routeToCategoryIdMap: Map<Routes, string> = new Map([
  [Routes.FridgeRepairServices, '1'],
]);

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
  const categoryId = routeToCategoryIdMap.get(`${params.category}` as Routes);
  const subcategories = useMemo(() => {
    return (allSubсategories as Array<Subcategory>).filter(subcategory => subcategory.parentCategoryId === categoryId);
  }, [categoryId]);
  const categoryData = categories.find(category => category.id === categoryId) as Category;
  return categoryData && <ServicePage service={categoryData} subservices={subcategories} />
}