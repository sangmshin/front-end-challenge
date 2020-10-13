import { SET_LAST_BREAKPOINT } from 'store/actionTypes';

const uiInitialState = {
  lastBreakPoint: ''
}

export default (
  state = uiInitialState,
  { type, payload }
) => {
  switch(type) {
    case SET_LAST_BREAKPOINT: {
      return {
        ...state,
        lastBreakPoint: payload,
      };
    }

    default:
      return state;
  }
} 

