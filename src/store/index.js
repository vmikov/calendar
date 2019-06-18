import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import dateReducer from './calendar/reducer';
import dataReducer from './data/reducer';
import dataEditorReducer from './dataEditor/reducer';

const reducer = combineReducers({
  date: dateReducer,
  data: dataReducer,
  dataEditor: dataEditorReducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;
