import {
  OPEN_ZOOM,
  CLOSE_ZOOM,
  SCROLL_BLOCKED,
  SET_LAST_BREAKPOINT
} from 'store/actionTypes';

export function setLastBreakPoint(value) {
  return {
    type: SET_LAST_BREAKPOINT,
    value,
  };
}

/**
 * Open a Zoom
 * @param {Array} images The images/nodes to render inside the Zoom component
 * @returns {{type, images}}
 */
export function openZoom(images) {
  return {
    type: OPEN_ZOOM,
    images
  };
}

/**
 * Close a Zoom
 * @returns {{type}}
 */
export function closeZoom() {
  return {
    type: CLOSE_ZOOM
  };
}

/**
 * Toggle scrolling content behind zoomed images
 * @param {bool} value Should scrolling be blocked
 * @returns {{type, value}}
 */
export function blockScroll(value) {
  return {
    type: SCROLL_BLOCKED,
    value
  };
}