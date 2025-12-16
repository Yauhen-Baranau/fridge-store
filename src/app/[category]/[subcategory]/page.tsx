import { Routes } from "@constants/routes";
import SubcategoryPageClientComponent from '@ui-kit/service-page-component/subcategory/subcategory-page-client-component';
import { routeToSubcategoryIdMap } from "../routing-maps";

export default async function SubcategoryPage({
  params
}: {
  params: Promise<{ subcategory: Routes }>
}) {
  const subcategory = (await params).subcategory;
  return <SubcategoryPageClientComponent subcategoryId={routeToSubcategoryIdMap.get(subcategory) ?? ''} />
}

export async function generateStaticParams() {
  return [
    { category: Routes.FridgeRepairServices, subcategory: Routes.CoolingSystemComponentReplacementAndRepairs },
    { category: Routes.FridgeRepairServices, subcategory: Routes.ElectricComponentRepairsAndReplacement },
    { category: Routes.FridgeRepairServices, subcategory: Routes.NofrostSystemElementReplacement },
    { category: Routes.FridgeRepairServices, subcategory: Routes.MechanicalNodesReplacementAndRepairs },
    { category: Routes.FridgeRepairServices, subcategory: Routes.DoorAndHullRepairs },
    { category: Routes.FridgeRepairServices, subcategory: Routes.OtherServices },
  ];
}