import { serviceRouteStructure } from "@constants/service-route-structure";
import SubcategoryPageClientComponent from "@ui-kit/service-page-component/subcategory/subcategory-page-client-component";
import { getIdByRoute } from "../helpers/get-id-by-route";
import { Routes } from "@constants/routes";
import subcategories from "@category-data/subcategories.json";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ subcategoryRoute: string; categoryRoute: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subcategoryRoute, categoryRoute } = await params;
  const subcategoryId = getIdByRoute(subcategoryRoute as Routes) ?? "";
  const subcategory = subcategories.find(({ id }) => id === subcategoryId);

  return {
    title: subcategory?.seoTitle,
    description: subcategory?.seoDescription,
    alternates: {
      canonical: `https://holodcentr.by/${categoryRoute}/${subcategoryRoute}`,
    },
  };
}

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
