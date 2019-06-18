import { OPEN_CALENDAR_EDITOR, CLOSE_CALENDAR_EDITOR } from './actionTypes';
import { SET_CALENDAR_DATA } from '../data/actionTypes';

const INIT_STATE = {
  isOpen: false,
  date: null,
  data: null
};

export default (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case OPEN_CALENDAR_EDITOR:
    case CLOSE_CALENDAR_EDITOR:
      return payload;
    case SET_CALENDAR_DATA:
      return {
        isOpen: false,
        date: null,
        data: null
      };
    default:
      return state;
  }
};
