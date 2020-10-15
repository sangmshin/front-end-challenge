import {
  OPEN_ZOOM,
  CLOSE_ZOOM,
  SCROLL_BLOCKED,
  SET_LAST_BREAKPOINT
} from 'store/actionTypes';

const uiInitialState = {
  lastBreakPoint: '',
  isZoomOpen: false,
  scrollBlocked: false,
  zoomImages: []
}

export default (
  state = uiInitialState,
  { images, type, value }
) => {
  switch(type) {

    case OPEN_ZOOM: {
      return {
        ...state,
        isZoomOpen: true,
        zoomImages: images
      };
    }

    case CLOSE_ZOOM: {
      return {
        ...state,
        isZoomOpen: false,
        zoomImages: uiInitialState.zoomImages
      };
    }

    case SCROLL_BLOCKED: {
      return {
        ...state,
        scrollBlocked: value
      };
    }

    case SET_LAST_BREAKPOINT: {
      return {
        ...state,
        lastBreakPoint: value,
      };
    }

    default:
      return state;
  }
} 

