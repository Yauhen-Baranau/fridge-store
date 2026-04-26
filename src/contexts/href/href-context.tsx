"use client";

import { createContext, useContext, useMemo } from "react";
import { useCategoryData } from "../category-data/category-data-context";
import { HrefContextProps } from "./href-context-props";
import {
  idToCategoryRouteMap,
  idToServiceRouteMap,
  idToSubcategoryRouteMap,
} from "@constants/route-id-maps";

const HrefContext = createContext<HrefContextProps>({
  getPageHref: () => "",
  getCategoryHref: () => "",
  getSubcategoryHref: () => "",
  getServiceHref: () => "",
});

interface Entry {
  id: string;
  parentCategoryId: string;
}

export const HrefContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { getAllSubcategories, getAllServices } = useCategoryData();
  const [subcategories, services] = useMemo(
    () => [getAllSubcategories(), getAllServices()],
    [getAllSubcategories, getAllServices],
  );

  const findEntryById = (id: string, list: Array<Entry>): Entry | null => {
    return list.find((entry) => entry.id === id) ?? null;
  };

  const getCategoryRouteFragment = (id: string) => idToCategoryRouteMap.get(id);
  const getSubcategoryRouteFragment = (id: string) => idToSubcategoryRouteMap.get(id);
  const getServiceRouteFragment = (id: string) => idToServiceRouteMap.get(id);

  const getHref = (fragments: (string | undefined)[]) => {
    const path = fragments.filter(Boolean).join("/");
    return path ? `/${path}` : "/";
  };
  const getPageHref = (route: string) => getHref([route]);
  const getCategoryHref = (id: string) => getHref([getCategoryRouteFragment(id)]);
  const getSubcategoryHref = (id: string) => {
    const subcategory = findEntryById(id, subcategories);
    return getHref([
      subcategory?.parentCategoryId && getCategoryRouteFragment(subcategory.parentCategoryId),
      getSubcategoryRouteFragment(id)
    ]);
  };
  const getServiceHref = (id: string) => {
    const service = findEntryById(id, services);
    const subcategory = service && findEntryById(service.parentCategoryId, subcategories);
    return getHref([
      subcategory?.parentCategoryId && getCategoryRouteFragment(subcategory.parentCategoryId),
      service?.parentCategoryId && getSubcategoryRouteFragment(service.parentCategoryId),
      getServiceRouteFragment(id)
    ]);
  };

  return (
    <HrefContext.Provider
      value={{
        getPageHref,
        getCategoryHref,
        getSubcategoryHref,
        getServiceHref,
      }}
    >
      {children}
    </HrefContext.Provider>
  );
};

export const useHrefHelper = () => useContext(HrefContext);
