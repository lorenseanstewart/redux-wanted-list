import { NEW_TOAST } from './types';

export default function newToast(message) {
  return dispatch => {
    dispatch(newToastAsync(message));
  }
}

function newToastAsync(message){
  return {
    type: NEW_TOAST,
    payload: message
  };
}
