import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './src/store/store';

import AvailabilityContainer from './src/containers/Availability';
import PriceSummary from './src/containers/PriceSummary';

const randomRoom = Math.floor(Math.random() * 100);

const availability = (
  <Provider store={store}>
    <AvailabilityContainer roomId={randomRoom} />
  </Provider>
);
const availabilityMount = document.getElementById('availability');

const priceSummary = (
  <Provider store={store}>
    <PriceSummary roomId={randomRoom} />
  </Provider>
);
const priceSummaryMount = document.getElementById('priceSummary');

ReactDOM.render(availability, availabilityMount);
ReactDOM.render(priceSummary, priceSummaryMount);
