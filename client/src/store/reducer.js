import { combineReducers } from 'redux';
import availability from './reducers/availability.reducer';
import reservedDays from './reducers/reservedDays.reducer';
import checkInDay from './reducers/checkInDay.reducer';
import currentDay from './reducers/currentDay.reducer';
import startingDay from './reducers/startingDay.reducer';
import selecting from './reducers/selecting.reducer';

export default combineReducers({
  availability,
  reservedDays,
  checkInDay,
  currentDay,
  startingDay,
  selecting,
});
