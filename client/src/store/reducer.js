import { combineReducers } from 'redux';
import availability from './reducers/availability.reducer';
import checkInDay from './reducers/checkInDay.reducer';

export default combineReducers({
  availability,
  checkInDay,
});
