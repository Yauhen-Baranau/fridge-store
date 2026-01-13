import { Routes } from "@constants/routes";

export type NavigationConfig = Array<{
  label: string,
  categoryId?: string,
  subcategoryId?: string,
  route?: Routes,
  subItems?: NavigationConfig,
}>;