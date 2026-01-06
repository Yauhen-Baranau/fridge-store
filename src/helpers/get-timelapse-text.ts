enum TimeUnit {
  Second = "second",
  Minute = "minute",
  Hour = "hour",
  Day = "day",
  Week = "week",
  Month = "month",
  Year = "year",
}

const timeUnitForms: Record<
  TimeUnit,
  { many: string; several: string; singular: string }
> = {
  [TimeUnit.Second]: {
    many: "секунд",
    several: "секунды",
    singular: "секунду",
  },
  [TimeUnit.Minute]: {
    many: "минут",
    several: "минуты",
    singular: "минуту",
  },
  [TimeUnit.Hour]: {
    many: "часов",
    several: "часа",
    singular: "час",
  },
  [TimeUnit.Day]: {
    many: "дней",
    several: "дня",
    singular: "день",
  },
  [TimeUnit.Week]: {
    many: "недель",
    several: "недели",
    singular: "неделю",
  },
  [TimeUnit.Month]: {
    many: "месяцев",
    several: "месяца",
    singular: "месяц",
  },
  [TimeUnit.Year]: {
    many: "лет",
    several: "года",
    singular: "год",
  },
};

function getTimeUnitFormKey(quantity: number): "many" | "several" | "singular" {
  const lastDigit = quantity % 10;
  const lastTwoDigits = quantity % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "many";
  }

  if (lastDigit === 1) {
    return "singular";
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "several";
  }

  return "many";
}

function getTimeUnitLapsedText(timeUnit: TimeUnit, quantity: number): string {
  return `${quantity} ${timeUnitForms[timeUnit][getTimeUnitFormKey(quantity)]} назад`;
}

export default function getTimelapseText(
  fromDate: Date,
  toDate: Date = new Date(),
): string {
  const timeUnits = [
    { unit: TimeUnit.Second, nextUnitDivisor: 60 },
    { unit: TimeUnit.Minute, nextUnitDivisor: 60 },
    { unit: TimeUnit.Hour, nextUnitDivisor: 24 },
    { unit: TimeUnit.Day, nextUnitDivisor: 7 },
    { unit: TimeUnit.Week, nextUnitDivisor: 4.5 },
    { unit: TimeUnit.Month, nextUnitDivisor: 12 },
    { unit: TimeUnit.Year, nextUnitDivisor: null },
  ];

  let prevUnit = null;
  let prevUnitLapsed = 0;
  let currUnitLapsed = Math.floor((+toDate - +fromDate) / 1000);
  for (const { unit, nextUnitDivisor } of timeUnits) {
    if (currUnitLapsed === 0) {
      if (prevUnitLapsed === 0) {
        return "только что";
      }

      return getTimeUnitLapsedText(prevUnit!, prevUnitLapsed);
    }
    if (nextUnitDivisor === null) {
      return getTimeUnitLapsedText(unit, currUnitLapsed);
    }
    prevUnit = unit;
    prevUnitLapsed = currUnitLapsed;
    currUnitLapsed = Math.floor(prevUnitLapsed / nextUnitDivisor);
  }
  return "";
}
