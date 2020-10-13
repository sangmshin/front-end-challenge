import { SET_LAST_BREAKPOINT } from 'store/actionTypes';

export function setLastBreakPoint(value) {
  return {
    type: SET_LAST_BREAKPOINT,
    payload: value,
  };
}