import * as actionTypes from './actionTypes';

export const openEditor = () => ({
  type: actionTypes.OPEN_CALENDAR_EDITOR,
  payload: {
    openModal: true
  }
});

export const closeEditor = () => ({
  type: actionTypes.CLOSE_CALENDAR_EDITOR,
  payload: {
    openModal: false
  }
});
