import { combineReducers } from 'redux';
import pageData from './page-data/reducer';
import ui from './ui/reducer';

const rootReducer = combineReducers({
  pageData,
  ui
});

export default rootReducer;