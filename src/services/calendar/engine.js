import MonthPosition from './monthPosition';

const isLeapYear = year =>
  year % 4 === 0
    ? year % 100 === 0
      ? year % 400 === 0
        ? true
        : false
      : true
    : false;

const getLastDayNumber = (year, month) => {
  switch (month) {
    case 1:
      return isLeapYear(year) ? 29 : 28;
    case 3:
    case 5:
    case 8:
    case 10:
      return 30;
    default:
      return 31;
  }
};

const makeDay = (day, isCurrent, monthPosition) => ({
  day,
  isCurrent,
  monthPosition
});

const getCalendarFirstWeek = (year, month, currentDay) => {
  const week = [],
    firstDate = new Date(year, month, 1),
    firstDay = firstDate.getDay(),
    firstDayIndex = firstDay === 0 ? 6 : firstDay - 1,
    prevMonth = month === 0 ? 11 : month - 1,
    prevYear = prevMonth === 11 ? year - 1 : year;

  week[firstDayIndex] = makeDay(1, 1 === currentDay, MonthPosition.Current);

  if (firstDayIndex > 0) {
    let day = getLastDayNumber(prevYear, prevMonth),
      index = firstDayIndex;

    while (index > 0) {
      week[--index] = makeDay(day--, false, MonthPosition.Previous);
    }
  }

  if (firstDayIndex < 6) {
    let day = 1,
      index = firstDayIndex;

    while (index < 6) {
      week[++index] = makeDay(++day, day === currentDay, MonthPosition.Current);
    }
  }

  return week;
};

const getCalendarLastWeek = (year, month, currentDay) => {
  const week = [],
    lastDayNumber = getLastDayNumber(year, month),
    lastDate = new Date(year, month, lastDayNumber),
    lastDay = lastDate.getDay(),
    lastDayIndex = lastDay === 0 ? 6 : lastDay - 1;

  week[lastDayIndex] = makeDay(
    lastDayNumber,
    lastDayNumber === currentDay,
    MonthPosition.Current
  );

  if (lastDayIndex > 0) {
    let day = lastDayNumber,
      index = lastDayIndex;

    while (index > 0) {
      week[--index] = makeDay(--day, day === currentDay, MonthPosition.Current);
    }
  }

  if (lastDayIndex < 6) {
    let day = 1,
      index = lastDayIndex;

    while (index < 6) {
      week[++index] = makeDay(day++, false, MonthPosition.Next);
    }
  }

  return week;
};

const getCalendarInterimWeeks = (firstDay, lastDay, currentDay) => {
  const days = [];
  let day = firstDay,
    finalDay = lastDay - 1;

  while (day < finalDay) {
    days.push(makeDay(++day, day === currentDay, MonthPosition.Current));
  }

  return days;
};

const getCalendar = (date = new Date()) => {
  const now = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day =
      now.getFullYear() === year && now.getMonth() === month
        ? date.getDate()
        : undefined;

  const first = getCalendarFirstWeek(year, month, day),
    last = getCalendarLastWeek(year, month, day),
    interim = getCalendarInterimWeeks(first[6].day + 1, last[0].day - 1, day);

  return [...first, ...interim, ...last];
};

export default getCalendar;
