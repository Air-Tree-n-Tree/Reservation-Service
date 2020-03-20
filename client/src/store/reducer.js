import { combineReducers } from 'redux';
import availability from './reducers/availability.reducer';
import checkInDay from './reducers/checkInDay.reducer';
import currentDay from './reducers/currentDay.reducer';

export default combineReducers({
  availability,
  checkInDay,
  currentDay,
});
