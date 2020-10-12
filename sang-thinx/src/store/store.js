import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducers from './reducers.js';

const getDebugSessionKey = () => {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}
const enhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__({ serialize: true })
    : f => f,
  persistState(getDebugSessionKey())
);
const initialState = {};

export const store = createStore(rootReducers, initialState, enhancer);
