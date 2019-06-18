import * as actionTypes from './actionTypes';

export const openEditor = (date, data) => ({
  type: actionTypes.OPEN_CALENDAR_EDITOR,
  payload: {
    isOpen: true,
    date,
    data
  }
});

export const closeEditor = () => ({
  type: actionTypes.CLOSE_CALENDAR_EDITOR,
  payload: {
    isOpen: false,
    date: null,
    data: null
  }
});
