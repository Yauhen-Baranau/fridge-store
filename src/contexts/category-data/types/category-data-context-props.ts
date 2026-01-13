import { Category } from "./category";
import { Service } from "./service";
import { Subcategory } from "./subcategory";

export interface CategoryDataContextProps {
  getAllCategories: () => Array<Category>;
  getAllSubcategories: () => Array<Subcategory>;
  getAllServices: () => Array<Service>;
  getCategoryById: (id: string) => Category | null;
  getSubcategoryById: (id: string) => Subcategory | null;
  getServiceById: (id: string) => Service | null;
  getCategorySubcategories: (categoryId: string) => Array<Subcategory> | null;
  getSubcategoryServices: (subcategoryId: string) => Array<Service> | null;
  getRelatedServices: (serviceId: string) => Array<Service> | null;
  getSubcategoryStartingPrice: (subcategoryId: string) => number | null;
  getDiagnosticsService: () => Service | null;
  getDiagnosticsServiceId: () => string;
  getFreeWithRepairsServiceIds: () => Array<string>,
  getServiceWithPriceIncludingPartsIds: () => Array<string>,
  getPopularServiceIds: () => Array<string>,
}
