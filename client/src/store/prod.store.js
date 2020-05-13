import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = (initialState) => (
  createStore(
    reducer,
    initialState,
    applyMiddleware(thunk),
  )
);

export default store;
