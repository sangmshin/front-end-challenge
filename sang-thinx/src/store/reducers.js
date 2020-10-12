import { combineReducers } from 'redux';
import pageData from './page-data/reducer';

const rootReducer = combineReducers({
  pageData,
});

export default rootReducer;