import { Routes } from "@constants/routes";
import { routeToServiceIdMap } from "../../routing-maps";
import ServicePageClientComponent from "@ui-kit/service-page-component/service/service-page-client-component";

export default async function ServicePage({
  params
}: {
  params: Promise<{ service: Routes }>
}) {
  const service = (await params).service;
  return <ServicePageClientComponent serviceId={routeToServiceIdMap.get(service) ?? ''} />
}

export async function generateStaticParams() {
  return [
    {
      category: Routes.FridgeRepairServices,
      subcategory: Routes.CoolingSystemComponentReplacementAndRepairs,
      service: Routes.CompressorReplacement,
    },
  ];
}