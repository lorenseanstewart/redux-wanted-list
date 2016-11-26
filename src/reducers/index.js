import { combineReducers } from 'redux';
import WantedPeopleReducer from './reducer_wanted_list';
import ToastReducer from './reducer_toast';

const rootReducer = combineReducers({
  wantedPeople: WantedPeopleReducer,
  toast: ToastReducer
});

export default rootReducer;
