import * as actionTypes from './actionTypes';

export default (state = false, { type, payload }) => {
  switch (type) {
    case actionTypes.OPEN_CALENDAR_EDITOR:
      return true;
    case actionTypes.CLOSE_CALENDAR_EDITOR:
      return false;
    default:
      return state;
  }
};
