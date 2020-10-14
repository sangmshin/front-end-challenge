const SMALL = 768; /* Small screen / tablet */
const MEDIUM = 1024; /* Medium screen / desktop */
const LARGE = 1200; /* Large screen / wide desktop */
let BREAKPOINT;

/**
 * Finds the current matched media query breakpoint
 *
 * @returns {String} matched media query breakpoint [large, medium, small, xsmall]
 */
export function getCurrentBreakPoint() {
  if (!BREAKPOINT) {
    BREAKPOINT = {
      large: window.matchMedia(`(min-width: ${LARGE}px)`),
      medium: window.matchMedia(`(min-width: ${MEDIUM}px)`),
      small: window.matchMedia(`(min-width: ${SMALL}px)`),
      xsmall: window.matchMedia(`(max-width: ${SMALL - 1}px)`)
    };
  }

  return Object.keys(BREAKPOINT).find(breakpoint => BREAKPOINT[breakpoint].matches);
}

/**
 * Determines if the data is array and has at least one or more items
 * @return {boolean}
 */
export const isArrayWithLength = arr => Array.isArray(arr) && arr.length > 0;

/**
 * A function with no operation. (for testing)
 */
export const noop = () => null;
