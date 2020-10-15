/**
 * Get the last breakpoint of browser's width
 * @param state Redux state
 * @returns {string}
 */
export function getLastBreakPoint(state) {
  return state.ui.lastBreakPoint;
}

/**
 * Is the Zoom open?
 * @param state Redux state
 * @returns {bool}
 */
export function isZoomOpen(state) {
  return state.ui.isZoomOpen;
}

/**
 * Get the images to display in the Zoom component
 * @param state Redux state
 * @returns {array}
 */
export function getZoomImages(state) {
  return state.ui.zoomImages;
}

/**
 * Is the scroll currently blocked?
 * @param state Redux state
 * @return {bool}
 */
export function getScrollBlocked(state) {
  return state.ui.scrollBlocked;
}