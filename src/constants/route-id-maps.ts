import invertMap from "@helpers/invert-map";
import { Routes } from "./routes";

export const categoryRouteToIdMap = new Map([[Routes.RepairsCategory, "1"]]);
export const subcategoryRouteToIdMap = new Map([
  [Routes.CoolingSubcategory, "1"],
  [Routes.ElectricSubcategory, "2"],
  [Routes.NofrostSystemSubcategory, "3"],
  [Routes.MechanicalSubcategory, "4"],
  [Routes.HullAndDoorsCubcategory, "5"],
  [Routes.OtherSubcategory, "6"],
]);
export const serviceRouteToIdMap = new Map([
  [Routes.CompressorService, "1"],
  [Routes.EvaporatorService, "2"],
  [Routes.CondensatorService, "3"],
  [Routes.CapillaryTubeService, "4"],
  [Routes.CoolantService, "5"],
  [Routes.ThermostatService, "6"],
  [Routes.ControlModuleService, "7"],
  [Routes.NofrostSystemService, "8"],
  [Routes.SealantService, "9"],
  [Routes.VentilatorService, "10"],
  [Routes.DiagnosticsService, "11"],
  [Routes.DrainageService, "12"],
  [Routes.ExtraneousNoiseService, "13"],
  [Routes.LightingService, "14"],
]);

export const idToCategoryRouteMap = invertMap(categoryRouteToIdMap);
export const idToSubcategoryRouteMap = invertMap(subcategoryRouteToIdMap);
export const idToServiceRouteMap = invertMap(serviceRouteToIdMap);
