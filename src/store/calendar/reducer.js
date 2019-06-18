import * as actionTypes from './actionTypes';

const now = new Date();
const INIT_STATE = new Date(now.getFullYear(), now.getMonth(), 1);

const reducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CALENDAR_MONTH:
      return payload.date;
    default:
      return state;
  }
};

export default reducer;
