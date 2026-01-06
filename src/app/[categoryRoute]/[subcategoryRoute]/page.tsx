import { serviceRouteStructure } from "@constants/service-route-structure";
import SubcategoryPageClientComponent from "@ui-kit/service-page-component/subcategory/subcategory-page-client-component";
import { getIdByRoute } from "../helpers/get-id-by-route";
import { Routes } from "@constants/routes";

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ subcategoryRoute: Routes }>;
}) {
  const subcategoryId = getIdByRoute((await params).subcategoryRoute) ?? "";
  return <SubcategoryPageClientComponent subcategoryId={subcategoryId} />;
}

export async function generateStaticParams() {
  const staticParams: Array<{
    categoryRoute: string;
    subcategoryRoute: string;
  }> = [];

  for (const categoryRoute in serviceRouteStructure) {
    for (const subcategoryRoute in serviceRouteStructure[categoryRoute]) {
      staticParams.push({ categoryRoute, subcategoryRoute });
    }
  }

  return staticParams;
}
