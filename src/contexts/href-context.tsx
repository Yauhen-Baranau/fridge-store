'use client';

import { Routes } from "@constants/routes";
import { categoryIdToRouteMap, serviceIdToRouteMap, subcategoryIdToRouteMap } from "@src/app/[category]/routing-maps";
import { createContext } from "react";
import subcategories from '@category-data/subcategories.json';
import services from '@category-data/services.json';

interface HrefContextProps {
  getPageHref: (route: Routes) => string,
  getCategoryHref: (id: string) => string,
  getSubcategoryHref: (id: string) => string,
  getServiceHref: (id: string) => string,
};

export const HrefContext = createContext<HrefContextProps>({
  getPageHref: () => '',
  getCategoryHref: () => '',
  getSubcategoryHref: () => '',
  getServiceHref: () => '',
});

interface Entry {
  id: string,
  parentCategoryId: string,
}

export const HrefContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const findEntryById = (id: string, list: Array<Entry>): Entry | null => {
    return list.find(entry => entry.id === id) ?? null;
  }

  const getPageHref = (route: string) => `/${route}`;
  const getCategoryHref = (id: string) => getPageHref(categoryIdToRouteMap.get(id) ?? '');
  const getSubcategoryHref = (id: string) => {
    const subcategory = findEntryById(id, subcategories);
    return `${getCategoryHref(subcategory?.parentCategoryId ?? '')}/${subcategoryIdToRouteMap.get(id)}`;
  };
  const getServiceHref = (id: string) => {
    const service = findEntryById(id, services);
    return `${getSubcategoryHref(service?.parentCategoryId ?? '')}/${serviceIdToRouteMap.get(id)}`;
  }

  return <HrefContext.Provider value={{
    getPageHref,
    getCategoryHref,
    getSubcategoryHref,
    getServiceHref
  }}>
    {children}
  </HrefContext.Provider>
}