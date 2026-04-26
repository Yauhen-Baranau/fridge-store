import { Routes } from "@constants/routes";

export const routeToLabelMap = new Map([
  //common routes
  [Routes.Prices, "Цены"],
  [Routes.Payment, "Оплата"],
  [Routes.AboutUs, "О компании"],
  [Routes.Contacts, "Контакты"],
  [Routes.CommonFridgeProblems, "Частые проблемы с холодильником"],
  [Routes.Reviews, "Отзывы"],
  [Routes.FAQ, "Популярные вопросы"],
  [Routes.RepairsCategory, "Услуги по ремонту холодильников"],

  //subcategories
  [Routes.CoolingSubcategory, "Замена и ремонт компонентов системы охлаждения"],
  [Routes.ElectricSubcategory, "Ремонт и замена электрических компонентов"],
  [Routes.NofrostSystemSubcategory, "Замена элементов системы No Frost"],
  [Routes.MechanicalSubcategory, "Замена и ремонт механических узлов"],
  [Routes.HullAndDoorsCubcategory, "Ремонт дверей и корпуса"],
  [Routes.OtherSubcategory, "Прочие услуги"],

  //services - subcategory 1 (cooling)
  [Routes.CompressorService, "Замена компрессора"],
  [Routes.EvaporatorService, "Замена испарителя"],
  [Routes.CondensatorService, "Замена конденсатора"],
  [Routes.CapillaryTubeService, "Замена капиллярной трубы"],
  [Routes.CoolantService, "Устранение утечки хладагента"],
  [Routes.CoolantFoamService, "Устранение утечки хладагента в запененной части"],
  [Routes.CapillaryClogService, "Устранение засора капиллярной трубы"],
  [Routes.RefrigerantTopupService, "Заправка фреоном"],
  [Routes.FilterDryerService, "Замена фильтра-осушителя"],
  [Routes.SchraderValveService, "Замена (пайка) клапана Шредера"],
  [Routes.PipelineService, "Замена трубопровода"],
  [Routes.EvaporatorSolderService, "Ремонт испарителя (пайка)"],
  [Routes.ThermostatService, "Замена термостата"],

  //services - subcategory 2 (electric)
  [Routes.StartRelayService, "Замена пускозащитного реле"],
  [Routes.SensorService, "Замена сенсорного датчика"],
  [Routes.TemperatureSensorService, "Замена электронного датчика температуры"],
  [Routes.ControlModuleService, "Замена блока управления (электронного модуля)"],
  [Routes.ControlModuleCableService, "Замена шлейфа блока управления"],
  [Routes.ElectricalCircuitService, "Замена электросхемы"],
  [Routes.ControlModuleRepairService, "Ремонт блока управления (электронного модуля)"],
  [Routes.ControlBoardRepairService, "Ремонт платы управления"],
  [Routes.ControlModuleSwapService, "Замена модуля управления"],
  [Routes.ElectricalCircuitRepairService, "Ремонт электросхемы"],
  [Routes.FirmwareUpdateService, "Прошивка или обновление ПО блока управления"],
  [Routes.TimerService, "Замена таймера"],
  [Routes.DisplayCableService, "Замена шлейфа дисплея"],
  [Routes.PowerCableService, "Замена сетевого кабеля"],
  [Routes.LedPowerSupplyService, "Замена блока питания LED-подсветки"],
  [Routes.FreezerTempSensorService, "Ремонт датчика температуры морозильного отделения"],
  [Routes.DoorSensorService, "Ремонт датчика открытия двери"],
  [Routes.HumiditySensorService, "Ремонт датчика влажности"],

  //services - subcategory 3 (nofrost)
  [Routes.HeatingElementService, "Замена ТЭНа"],
  [Routes.DefrostHeaterService, "Замена нагревателя оттайки"],
  [Routes.EvaporatorHeaterService, "Замена нагревателя испарителя"],
  [Routes.DefrostTimerService, "Замена таймера оттайки"],
  [Routes.NofrostFanService, "Замена вентилятора системы No Frost"],
  [Routes.EvaporatorSensorService, "Замена датчиков испарителя"],
  [Routes.DefrosterService, "Замена дефростера"],
  [Routes.FuseService, "Замена плавких предохранителей"],
  [Routes.NofrostDefrostService, "Разморозка системы No Frost"],

  //services - subcategory 4 (mechanical)
  [Routes.FanService, "Замена вентилятора"],
  [Routes.FanInstallService, "Установка вентилятора"],
  [Routes.AirDamperService, "Замена воздушной заслонки"],
  [Routes.DamperDriveService, "Замена привода заслонки"],
  [Routes.DrainagePumpService, "Замена дренажного насоса"],

  //services - subcategory 5 (hull and doors)
  [Routes.DoorRehingingService, "Перенавес дверей холодильника"],
  [Routes.DoorReplacementService, "Замена двери холодильника"],
  [Routes.DoorRepairService, "Ремонт двери холодильника"],
  [Routes.DoorAdjustService, "Регулировка дверей"],
  [Routes.DoorSealService, "Замена уплотнителя двери"],
  [Routes.DoorHandleService, "Ремонт или замена ручки двери"],

  //services - subcategory 6 (other)
  [Routes.DiagnosticsService, "Диагностика холодильника"],
  [Routes.DrainageService, "Прочистка дренажной системы"],
  [Routes.ExtraneousNoiseService, "Устранение посторонних шумов"],
  [Routes.LowTempBlockService, "Ремонт низкотемпературного блока"],
  [Routes.LightingService, "Замена подсветки холодильника"],
  [Routes.OdorRemovalService, "Устранение запаха в холодильнике"],
  [Routes.WaterIceDispenserService, "Ремонт системы автоматического дозирования воды и льда"],
  [Routes.PreventiveMaintenanceService, "Профилактическое обслуживание"],
  [Routes.ReprogrammingService, "Перепрограммирование электронных блоков управления"],
  [Routes.ConsultationService, "Консультации по выбору и эксплуатации холодильного оборудования"],
  [Routes.InstallationService, "Установка и запуск холодильных систем"],
  [Routes.ModernizationService, "Модернизация холодильного оборудования"],
]);