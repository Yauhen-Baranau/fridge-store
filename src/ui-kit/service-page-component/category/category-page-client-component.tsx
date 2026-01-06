"use client";

import { useCategoryData } from "@contexts/category-data/category-data-context";
import { useHrefHelper } from "@contexts/href/href-context";
import ServicePageComponent from "../service-page-component";

export default function CategoryPageClientComponent({
  categoryId,
}: {
  categoryId: string;
}) {
  const {
    getCategoryById,
    getCategorySubcategories,
    getSubcategoryStartingPrice,
  } = useCategoryData();
  const { getSubcategoryHref } = useHrefHelper();
  const categoryData = getCategoryById(categoryId);
  const subcategories = getCategorySubcategories(categoryId);
  return (
    categoryData && (
      <ServicePageComponent
        service={categoryData}
        subservices={subcategories!.map((subcategory) => ({
          ...subcategory,
          redirectTo: getSubcategoryHref(subcategory.id),
          price: getSubcategoryStartingPrice(subcategory.id) || undefined,
        }))}
      />
    )
  );
}
