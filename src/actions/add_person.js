import { ADD_PERSON } from './types';
import newToast from './new_toast';

export default function addPerson(person) {
  const message = `You've just added ${person.name} to the Most Wanted List.`;
  return dispatch => {
    dispatch(addPersonAsync(person));
    dispatch(newToast(message))
  }
}

function addPersonAsync(person){
  return {
    type: ADD_PERSON,
    payload: person
  };
}
