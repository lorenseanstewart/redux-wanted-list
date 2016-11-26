import { GET_WANTED_LIST } from './types';
import axios from 'axios';

export default function getWantedList() {
  return dispatch => {
    axios.get('../wanted_list.json')
      .then(res => {
        console.log('Wanted list ::', res.data);
        const people = res.data.map(person => {
          person.note = 'none';
          return person;
        });
        dispatch(getWantedListAsync(people));
      });
  }
}

function getWantedListAsync(people){
  return {
    type: GET_WANTED_LIST,
    payload: people
  };
}
