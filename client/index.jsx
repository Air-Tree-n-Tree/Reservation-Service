import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './src/store/store';

import Reservation from './src/containers/Reservation';
import PriceSummary from './src/containers/PriceSummary';

const reservation = (
  <Provider store={store}>
    <Reservation />
  </Provider>
);
const reservationMount = document.getElementById('reservation');

const priceSummary = (
  <Provider store={store}>
    <PriceSummary />
  </Provider>
);
const priceSummaryMount = document.getElementById('priceSummary');

ReactDOM.render(reservation, reservationMount);
ReactDOM.render(priceSummary, priceSummaryMount);
