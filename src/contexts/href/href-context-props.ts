import { Routes } from "@constants/routes";

export interface HrefContextProps {
  getPageHref: (route: Routes) => string;
  getCategoryHref: (id: string) => string;
  getSubcategoryHref: (id: string) => string;
  getServiceHref: (id: string) => string;
}
