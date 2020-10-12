import { GET_PAGE_DATA } from 'store/actionTypes';

const pageDataInitialState = {
  name: 'Hi-Waist'
}

export default (
  state = pageDataInitialState,
  { type, payload }
) => {
  switch(type) {
    case GET_PAGE_DATA:
      return payload;

    default:
      return state;
  }
} 
