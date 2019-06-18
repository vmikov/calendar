import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import dateReducer from './calendar/reducer';
import dataReducer from './data/reducer';
import modalReducer from './modal/reducer';

const reducer = combineReducers({
  date: dateReducer,
  data: dataReducer,
  modal: modalReducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;
