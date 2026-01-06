export interface Category {
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

export interface Service extends Subcategory {
  price: number,
  requiredTime?: string,
  guarantee?: string,
  relatedServiceIds: Array<string>
};

export interface CategoryDataContextProps {
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
  getDiagnosticsServiceId: () => string,
}