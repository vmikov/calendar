import MonthType from './monthType';

// const isLeapYear = year =>
//   year % 4 === 0
//     ? year % 100 === 0
//       ? year % 400 === 0
//         ? true
//         : false
//       : true
//     : false;

// const getLastDayNumber = (year, month) => {
//   switch (month) {
//     case 1:
//       return isLeapYear(year) ? 29 : 28;
//     case 3:
//     case 5:
//     case 8:
//     case 10:
//       return 30;
//     default:
//       return 31;
//   }
// };

const getLastDayNumber = (year, month) =>
  new Date(year, month + 1, 0).getDate();

const makeDay = (date, isCurrent, monthType, data) => ({
  date,
  isCurrent,
  monthType,
  data: data[date.getTime()]
});

const getCalendarFirstWeek = (year, month, currentDay, data) => {
  const week = [],
    firstDate = new Date(year, month, 1),
    firstDay = firstDate.getDay(),
    firstDayIndex = firstDay === 0 ? 6 : firstDay - 1,
    prevMonth = month === 0 ? 11 : month - 1,
    prevYear = prevMonth === 11 ? year - 1 : year;

  week[firstDayIndex] = makeDay(
    firstDate,
    1 === currentDay,
    MonthType.Current,
    data
  );

  if (firstDayIndex > 0) {
    let day = getLastDayNumber(prevYear, prevMonth),
      index = firstDayIndex;

    while (index > 0) {
      week[--index] = makeDay(
        new Date(prevYear, prevMonth, day--),
        false,
        MonthType.Previous,
        data
      );
    }
  }

  if (firstDayIndex < 6) {
    let day = 1,
      index = firstDayIndex;

    while (index < 6) {
      week[++index] = makeDay(
        new Date(year, month, ++day),
        day === currentDay,
        MonthType.Current,
        data
      );
    }
  }

  return week;
};

const getCalendarLastWeek = (year, month, currentDay, data) => {
  const week = [],
    lastDayNumber = getLastDayNumber(year, month),
    lastDate = new Date(year, month, lastDayNumber),
    lastDay = lastDate.getDay(),
    lastDayIndex = lastDay === 0 ? 6 : lastDay - 1,
    nextMonth = month === 11 ? 0 : month + 1,
    nextYear = month === 11 ? year + 1 : year;

  week[lastDayIndex] = makeDay(
    new Date(year, month, lastDayNumber),
    lastDayNumber === currentDay,
    MonthType.Current,
    data
  );

  if (lastDayIndex > 0) {
    let day = lastDayNumber,
      index = lastDayIndex;

    while (index > 0) {
      week[--index] = makeDay(
        new Date(year, month, --day),
        day === currentDay,
        MonthType.Current,
        data
      );
    }
  }

  if (lastDayIndex < 6) {
    let day = 1,
      index = lastDayIndex;

    while (index < 6) {
      week[++index] = makeDay(
        new Date(nextYear, nextMonth, day++),
        false,
        MonthType.Next,
        data
      );
    }
  }

  return week;
};

const getCalendarInterimWeeks = (
  year,
  month,
  firstDay,
  lastDay,
  currentDay,
  data
) => {
  const days = [];
  let day = firstDay,
    finalDay = lastDay;

  while (day < finalDay) {
    days.push(
      makeDay(
        new Date(year, month, day),
        day++ === currentDay,
        MonthType.Current,
        data
      )
    );
  }

  return days;
};

export const getCurrMonthDate = () => {
  const date = new Date(),
    month = date.getMonth(),
    year = date.getFullYear();

  return new Date(year, month, 1);
};

export const getPrevMonthDate = date => {
  const currMonth = date.getMonth(),
    currYear = date.getFullYear(),
    prevMonth = currMonth === 0 ? 11 : currMonth - 1,
    prevYear = currMonth === 0 ? currYear - 1 : currYear;

  return new Date(prevYear, prevMonth, 1);
};

export const getNextMonthDate = date => {
  const currMonth = date.getMonth(),
    currYear = date.getFullYear(),
    nextMonth = currMonth === 11 ? 0 : currMonth + 1,
    nextYear = currMonth === 11 ? currYear + 1 : currYear;

  return new Date(nextYear, nextMonth, 1);
};

const getCalendar = (date = new Date(), data = {}) => {
  const now = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day =
      now.getFullYear() === year && now.getMonth() === month
        ? now.getDate()
        : undefined;

  const first = getCalendarFirstWeek(year, month, day, data),
    last = getCalendarLastWeek(year, month, day, data),
    interim = getCalendarInterimWeeks(
      year,
      month,
      first[6].date.getDate() + 1,
      last[0].date.getDate(),
      day,
      data
    );

  return [...first, ...interim, ...last];
};

export default getCalendar;
