import { Routes } from "@constants/routes";

export const serviceRouteStructure: Record<
  string,
  Record<string, Array<string>>
> = {
  [Routes.RepairsCategory]: {
    [Routes.CoolingSubcategory]: [
      Routes.CompressorService,
      Routes.EvaporatorService,
      Routes.CondensatorService,
      Routes.CapillaryTubeService,
      Routes.CoolantService,
      Routes.ThermostatService,
    ],
    [Routes.ElectricSubcategory]: [Routes.ControlModuleService],
    [Routes.NofrostSystemSubcategory]: [Routes.NofrostSystemService],
    [Routes.MechanicalSubcategory]: [
      Routes.SealantService,
      Routes.VentilatorService,
    ],
    [Routes.HullAndDoorsCubcategory]: [],
    [Routes.OtherSubcategory]: [
      Routes.DiagnosticsService,
      Routes.DrainageService,
      Routes.ExtraneousNoiseService,
      Routes.LightingService,
    ],
  },
};
