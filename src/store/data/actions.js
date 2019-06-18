import * as actionTypes from './actionTypes';

export const setCalendarData = (date, data) => ({
  type: actionTypes.SET_CALENDAR_DATA,
  payload: {
    [date.getTime()]: data
  }
});
