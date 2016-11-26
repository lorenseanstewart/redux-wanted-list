import { CLEAR_TOAST } from './types';

export default function clearToast() {
  return dispatch => {
    dispatch(clearToastAsync());
  }
}

function clearToastAsync(){
  return {
    type: CLEAR_TOAST,
    payload: null
  };
}
