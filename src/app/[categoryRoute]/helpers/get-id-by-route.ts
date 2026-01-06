import { categoryRouteToIdMap, serviceRouteToIdMap, subcategoryRouteToIdMap } from "@constants/route-id-maps";
import { Routes } from "@constants/routes";

export function getIdByRoute(route: Routes): string | null {
  return categoryRouteToIdMap.get(route) ||
    subcategoryRouteToIdMap.get(route) ||
    serviceRouteToIdMap.get(route) ||
    null;
}