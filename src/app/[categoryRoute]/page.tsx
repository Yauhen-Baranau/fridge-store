import { serviceRouteStructure } from "@constants/service-route-structure";
import CategoryPageClientComponent from "@ui-kit/service-page-component/category/category-page-client-component";
import { getIdByRoute } from "./helpers/get-id-by-route";
import { Routes } from "@constants/routes";

export default async function CategoryPage({
  params
}: {
  params: Promise<{ categoryRoute: Routes }>
}) {
  const categoryId = getIdByRoute((await params).categoryRoute) ?? '';
  return <CategoryPageClientComponent categoryId={categoryId} />
}

export async function generateStaticParams() {
  const staticParams: Array<{ categoryRoute: Routes }> = [];

  for (const categoryRoute in serviceRouteStructure) {
    staticParams.push({ categoryRoute: categoryRoute as Routes });
  }

  return staticParams;
}