import ServicePageClientComponent from "@ui-kit/service-page-component/service/service-page-client-component";
import { getIdByRoute } from "../../helpers/get-id-by-route";
import { Routes } from "@constants/routes";
import { serviceRouteStructure } from "@constants/service-route-structure";
import type { Metadata } from "next";
import services from "@category-data/services.json";


type Props = {
  params: Promise<{ subcategoryRoute: string; categoryRoute: string, serviceRoute: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subcategoryRoute, categoryRoute, serviceRoute } = await params;
  const serviceId = getIdByRoute(serviceRoute as Routes) ?? "";
  const service = services.find(({ id }) => id === serviceId);

  return {
    title: service?.seoTitle,
    description: service?.seoDescription,
    alternates: {
      canonical: `https://icefix.by/${categoryRoute}/${subcategoryRoute}/${serviceRoute}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceRoute: string }>;
}) {
  const serviceId = getIdByRoute((await params).serviceRoute as Routes) ?? "";
  return <ServicePageClientComponent serviceId={serviceId} />;
}

export async function generateStaticParams() {
  const staticParams: Array<{
    categoryRoute: string;
    subcategoryRoute: string;
    serviceRoute: string;
  }> = [];

  for (const categoryRoute in serviceRouteStructure) {
    for (const subcategoryRoute in serviceRouteStructure[categoryRoute]) {
      serviceRouteStructure[categoryRoute][subcategoryRoute].forEach(
        (serviceRoute) => {
          staticParams.push({ categoryRoute, subcategoryRoute, serviceRoute });
        },
      );
    }
  }

  return staticParams;
}
