import { serviceRouteStructure } from "@constants/service-route-structure";
import CategoryPageClientComponent from "@ui-kit/service-page-component/category/category-page-client-component";
import { getIdByRoute } from "./helpers/get-id-by-route";
import { Routes } from "@constants/routes";
import categories from "@category-data/categories.json";

import type { Metadata } from "next";

type Props = {
  params: Promise<{ categoryRoute: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryRoute } = await params;
  const categoryId = getIdByRoute(categoryRoute as Routes) ?? "";
  const category = categories.find(({ id }) => id === categoryId);

  return {
    title: category?.seoTitle,
    description: category?.seoDescription,
    alternates: {
      canonical: `https://holodcentr.by/${categoryRoute}/`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryRoute: Routes }>;
}) {
  const categoryId = getIdByRoute((await params).categoryRoute) ?? "";
  return <CategoryPageClientComponent categoryId={categoryId} />;
}

export async function generateStaticParams() {
  const staticParams: Array<{ categoryRoute: Routes }> = [];

  for (const categoryRoute in serviceRouteStructure) {
    staticParams.push({ categoryRoute: categoryRoute as Routes });
  }

  return staticParams;
}
