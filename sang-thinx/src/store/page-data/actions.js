import { GET_PAGE_DATA } from 'store/actionTypes';
import pageData from 'data/pageData.json';

export function getPageData() {
  return {
    type: GET_PAGE_DATA,
    payload: pageData,
  }
}