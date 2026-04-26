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
  //subcategory 1 (cooling)
  [Routes.CompressorService, "1"],
  [Routes.EvaporatorService, "2"],
  [Routes.CondensatorService, "3"],
  [Routes.CapillaryTubeService, "4"],
  [Routes.CoolantService, "5"],
  [Routes.CoolantFoamService, "6"],
  [Routes.CapillaryClogService, "7"],
  [Routes.RefrigerantTopupService, "8"],
  [Routes.FilterDryerService, "9"],
  [Routes.SchraderValveService, "10"],
  [Routes.PipelineService, "11"],
  [Routes.EvaporatorSolderService, "12"],
  [Routes.ThermostatService, "14"],
  //subcategory 2 (electric)
  [Routes.StartRelayService, "16"],
  [Routes.SensorService, "17"],
  [Routes.TemperatureSensorService, "18"],
  [Routes.ControlModuleService, "19"],
  [Routes.ControlModuleCableService, "20"],
  [Routes.ElectricalCircuitService, "21"],
  [Routes.ControlModuleRepairService, "22"],
  [Routes.ControlBoardRepairService, "23"],
  [Routes.ControlModuleSwapService, "24"],
  [Routes.ElectricalCircuitRepairService, "25"],
  [Routes.FirmwareUpdateService, "26"],
  [Routes.TimerService, "27"],
  [Routes.DisplayCableService, "28"],
  [Routes.PowerCableService, "29"],
  [Routes.LedPowerSupplyService, "30"],
  [Routes.FreezerTempSensorService, "31"],
  [Routes.DoorSensorService, "32"],
  [Routes.HumiditySensorService, "33"],
  //subcategory 3 (nofrost)
  [Routes.HeatingElementService, "34"],
  [Routes.DefrostHeaterService, "35"],
  [Routes.EvaporatorHeaterService, "36"],
  [Routes.DefrostTimerService, "37"],
  [Routes.NofrostFanService, "38"],
  [Routes.EvaporatorSensorService, "39"],
  [Routes.DefrosterService, "40"],
  [Routes.FuseService, "41"],
  [Routes.NofrostDefrostService, "42"],
  //subcategory 4 (mechanical)
  [Routes.FanService, "43"],
  [Routes.FanInstallService, "44"],
  [Routes.AirDamperService, "45"],
  [Routes.DamperDriveService, "46"],
  [Routes.DrainagePumpService, "47"],
  //subcategory 5 (hull and doors)
  [Routes.DoorRehingingService, "48"],
  [Routes.DoorReplacementService, "49"],
  [Routes.DoorRepairService, "50"],
  [Routes.DoorAdjustService, "51"],
  [Routes.DoorSealService, "52"],
  [Routes.DoorHandleService, "53"],
  //subcategory 6 (other)
  [Routes.DiagnosticsService, "54"],
  [Routes.DrainageService, "55"],
  [Routes.ExtraneousNoiseService, "56"],
  [Routes.LowTempBlockService, "57"],
  [Routes.LightingService, "58"],
  [Routes.OdorRemovalService, "59"],
  [Routes.WaterIceDispenserService, "60"],
  [Routes.PreventiveMaintenanceService, "61"],
  [Routes.ReprogrammingService, "62"],
  [Routes.ConsultationService, "63"],
  [Routes.InstallationService, "64"],
  [Routes.ModernizationService, "65"],
]);

export const idToCategoryRouteMap = invertMap(categoryRouteToIdMap);
export const idToSubcategoryRouteMap = invertMap(subcategoryRouteToIdMap);
export const idToServiceRouteMap = invertMap(serviceRouteToIdMap);
