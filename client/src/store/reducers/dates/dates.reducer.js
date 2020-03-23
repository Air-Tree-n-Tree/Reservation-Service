import { combineReducers } from 'redux';

import reservedDates from './reservedDates.reducer';
import selection from './selection.reducer';
import constraints from './constraints.reducer';


const days = combineReducers({
  reservedDates,
  selection,
  constraints,
});

export default days;
