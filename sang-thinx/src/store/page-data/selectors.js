import idx from 'idx';

/**
 * Get page-data
 * @param state Redux state
 * @return object
 */
export function getPageData(state) {
  const pageData = idx(state, _ => _.pageData);

  if (!pageData) {
    console.log('Failed to retrieve page-data');
    return null;
  }
  return pageData;
}