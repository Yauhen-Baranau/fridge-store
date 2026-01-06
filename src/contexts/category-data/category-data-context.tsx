"use client";

import { createContext, useContext } from "react";
import categories from "@category-data/categories.json";
import subcategories from "@category-data/subcategories.json";
import services from "@category-data/services.json";
import {
  Category,
  CategoryDataContextProps,
  Service,
  Subcategory,
} from "./interfaces";

const CategoryDataContext = createContext<CategoryDataContextProps>({
  getAllCategories: () => [],
  getAllSubcategories: () => [],
  getAllServices: () => [],
  getCategoryById: () => null,
  getSubcategoryById: () => null,
  getServiceById: () => null,
  getCategorySubcategories: () => null,
  getSubcategoryServices: () => null,
  getRelatedServices: () => null,
  getSubcategoryStartingPrice: () => null,
  getDiagnosticsService: () => null,
  getDiagnosticsServiceId: () => "",
});

export const CategoryDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const diagnosticsServiceId = "11";

  const getEntryById = <T extends { id: string }>(id: string, list: Array<T>) =>
    list.find((entry) => entry.id === id);
  const getChildEntries = <T extends { parentCategoryId: string }>(
    id: string,
    childList: Array<T>,
  ): Array<T> => {
    return childList.filter((child) => child.parentCategoryId === id);
  };

  const getCategoryById = (id: string) =>
    (getEntryById(id, categories) as Category) ?? null;
  const getSubcategoryById = (id: string) =>
    (getEntryById(id, subcategories) as Subcategory) ?? null;
  const getServiceById = (id: string) =>
    (getEntryById(id, services) as Service) ?? null;

  return (
    <CategoryDataContext.Provider
      value={{
        getAllCategories: () => categories.slice() as Array<Category>,
        getAllSubcategories: () => subcategories.slice() as Array<Subcategory>,
        getAllServices: () => services.slice() as Array<Service>,
        getCategoryById,
        getSubcategoryById,
        getServiceById,
        getCategorySubcategories: (categoryId: string) => {
          const category = getCategoryById(categoryId);
          return category ? getChildEntries(categoryId, subcategories) : null;
        },
        getSubcategoryServices: (subcategoryId: string) => {
          const subcategory = getSubcategoryById(subcategoryId);
          return subcategory ? getChildEntries(subcategoryId, services) : null;
        },
        getRelatedServices: (serviceId: string) => {
          const service = getServiceById(serviceId);
          return service
            ? services.filter((relatedService) =>
                service.relatedServiceIds.includes(relatedService.id),
              )
            : null;
        },
        getSubcategoryStartingPrice: (subcategoryId: string) => {
          const subcategory = getSubcategoryById(subcategoryId);
          if (!subcategory) {
            return null;
          }
          const subcategoryServices = getChildEntries(subcategoryId, services);
          if (subcategoryServices.length === 0) {
            return null;
          }
          return Math.min(
            ...subcategoryServices.map((service) => service.price),
          );
        },
        getDiagnosticsService: () => getServiceById(diagnosticsServiceId),
        getDiagnosticsServiceId: () => diagnosticsServiceId,
      }}
    >
      {children}
    </CategoryDataContext.Provider>
  );
};

export const useCategoryData = () => useContext(CategoryDataContext);
