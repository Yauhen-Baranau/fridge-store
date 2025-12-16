import { Routes } from "@constants/routes";
import CategoryPageClientComponent from "@ui-kit/service-page-component/category/category-page-client-component";
import { routeToCategoryIdMap } from "./routing-maps";

export default async function CategoryPage({
  params
}: {
  params: Promise<{ category: Routes }>
}) {
  const category = (await params).category;
  return <CategoryPageClientComponent categoryId={routeToCategoryIdMap.get(category) ?? ''} />
}

export async function generateStaticParams() {
  return [
    { category: Routes.FridgeRepairServices }
  ];
}