import { UPDATE_PERSON } from './types';

export default function updatePerson(person) {
  return dispatch => {
    dispatch(updatePersonAsync(person));
  }
}

function updatePersonAsync(person){
  return {
    type: UPDATE_PERSON,
    payload: person
  };
}
