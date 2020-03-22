import { combineReducers } from 'react-redux';

import reservedDays from './reservedDays.reducer';
import selection from './selection.reducer';


const days = combineReducers({
  reservedDays,
  selection,
});

export default days;
