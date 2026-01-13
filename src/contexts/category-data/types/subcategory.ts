import { Category } from "./category";

export interface Subcategory extends Category {
  parentCategoryId: string;
}