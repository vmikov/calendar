import * as actionTypes from './actionTypes';

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CALENDAR_DATA:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
