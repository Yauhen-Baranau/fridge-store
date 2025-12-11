import { Routes } from "@src/constants/routes";
import invertMap from "@src/helpers/invert-map";

export const routeToCategoryIdMap: Map<Routes, string> = new Map([
  [Routes.FridgeRepairServices, '1'],
]);
export const routeToSubcategoryIdMap: Map<Routes, string> = new Map([
  [Routes.CoolingSystemComponentReplacementAndRepairs, '1-1'],
]);
export const routeToServiceIdMap: Map<Routes, string> = new Map([
  [Routes.CompressorReplacement, '1-1-1'],
]);

export const categoryIdToRouteMap = invertMap(routeToCategoryIdMap);
export const subcategoryIdToRouteMap = invertMap(routeToSubcategoryIdMap);
export const serviceIdToRouteMap = invertMap(routeToServiceIdMap);