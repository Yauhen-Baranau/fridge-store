import { Subcategory } from "./subcategory";

export interface Service extends Subcategory {
  price: number;
  requiredTime?: string;
  guarantee?: string;
  relatedServiceIds: Array<string>;
}