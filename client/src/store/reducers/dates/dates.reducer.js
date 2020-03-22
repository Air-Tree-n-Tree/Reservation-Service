import { combineReducers } from 'redux';

import reservedDates from './reservedDates.reducer';
import selection from './selection.reducer';


const days = combineReducers({
  reservedDates,
  selection,
});

export default days;
