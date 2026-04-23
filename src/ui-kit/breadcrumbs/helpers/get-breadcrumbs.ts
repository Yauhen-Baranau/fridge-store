import { Routes } from "@constants/routes";
import { Breadcrumb } from "../interfaces/breadcrumb-interface";
import { routeToLabelMap } from "../constants/route-to-label-map";

export const getBreadcrumbs = (pathname: string): Array<Breadcrumb> => {
  const breadcrumbs = [{ label: "Главная", redirectTo: "/" }];

  pathname
    .split("/")
    .filter(Boolean)
    .forEach((pathFragment, index, pathFragments) => {
      breadcrumbs.push({
        label:
          routeToLabelMap.get(pathFragment as Routes) ?? "",
        redirectTo: `/${pathFragments.slice(0, index + 1).join("/")}`,
      });
    });

  return breadcrumbs;
};
