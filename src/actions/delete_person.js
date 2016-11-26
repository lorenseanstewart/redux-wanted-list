import { DELETE_PERSON } from './types';
import newToast from './new_toast';

export default function deletePerson(person) {
  const message = `You've just captured ${person.name}. Go collect your reward!`;
  return dispatch => {
    dispatch(deletePersonAsync(person));
    dispatch(newToast(message))
  }
}

function deletePersonAsync(person){
  return {
    type: DELETE_PERSON,
    payload: person // assuming every person has a unique name (which you should never do!), this will work.
  };
}
