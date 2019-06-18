import * as actionTypes from './actionTypes';

export const setCalendarMonth = (date = new Date()) => ({
  type: actionTypes.SET_CALENDAR_MONTH,
  payload: {
    date
  }
});
