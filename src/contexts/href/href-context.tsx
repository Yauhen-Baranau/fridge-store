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

  const getPageHref = (route: string) => `/${route}`;
  const getCategoryHref = (id: string) =>
    getPageHref(idToCategoryRouteMap.get(id) ?? "");
  const getSubcategoryHref = (id: string) => {
    const subcategory = findEntryById(id, subcategories);
    return `${getCategoryHref(subcategory?.parentCategoryId ?? "")}/${idToSubcategoryRouteMap.get(id) ?? ""}`;
  };
  const getServiceHref = (id: string) => {
    const service = findEntryById(id, services);
    return `${getSubcategoryHref(service?.parentCategoryId ?? "")}/${idToServiceRouteMap.get(id) ?? ""}`;
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
