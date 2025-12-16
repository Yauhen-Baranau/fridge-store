'use client';

import { createContext, useContext } from "react"
import categories from '@category-data/categories.json';
import subcategories from '@category-data/subcategories.json';
import services from '@category-data/services.json';

interface Category {
  id: string,
  label: string,
  description: Array<
    { type: 'paragraph', content: string }
    | { type: 'list', title: string, items: Array<string> }
  >,
  imagePath: string,
}

export interface Subcategory extends Category {
  parentCategoryId: string,
}

interface Service extends Subcategory {
  price: number,
  requiredTime?: string,
  guarantee?: string,
  relatedServiceIds: Array<string>
};

interface CategoryDataContextProps {
  getAllCategories: () => Array<Category>,
  getAllSubcategories: () => Array<Subcategory>,
  getAllServices: () => Array<Service>,
  getCategoryById: (id: string) => Category | null,
  getSubcategoryById: (id: string) => Subcategory | null,
  getServiceById: (id: string) => Service | null,
  getCategorySubcategories: (categoryId: string) => Array<Subcategory> | null,
  getSubcategoryServices: (subcategoryId: string) => Array<Service> | null,
  getRelatedServices: (serviceId: string) => Array<Service> | null,
  getSubcategoryStartingPrice: (subcategoryId: string) => number | null,
  getDiagnosticsService: () => Service | null,
}

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
});

export const CategoryDataContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const diagnosticsServiceId = '11';

  const getEntryById = <T extends { id: string }>(id: string, list: Array<T>) => list.find(entry => entry.id === id);
  const getChildEntries = <T extends { parentCategoryId: string }>(id: string, childList: Array<T>): Array<T> => {
    return childList.filter(child => child.parentCategoryId === id);
  }

  const getCategoryById = (id: string) => getEntryById(id, categories) as Category ?? null;
  const getSubcategoryById = (id: string) => getEntryById(id, subcategories) as Subcategory ?? null;
  const getServiceById = (id: string) => getEntryById(id, services) as Service ?? null;

  return <CategoryDataContext.Provider value={{
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
      return service ? services.filter(relatedService => service.relatedServiceIds.includes(relatedService.id)) : null;
    },
    getSubcategoryStartingPrice: (subcategoryId: string) => {
      const subcategory = getSubcategoryById(subcategoryId);
      if (!subcategory) {
        return null;
      }
      const subcategoryServices = getChildEntries(subcategoryId, services);
      return Math.min(...subcategoryServices.map(service => service.price));
    },
    getDiagnosticsService: () => getServiceById(diagnosticsServiceId),
  }}>
    {children}
  </CategoryDataContext.Provider>
}

export const useCategoryData = () => useContext(CategoryDataContext);