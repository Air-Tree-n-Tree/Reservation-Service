import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './src/store/store';

import './src/styles/style.css';

import AvailabilityContainer from './src/containers/Availability/Availability';
import PriceSummary from './src/containers/PriceSummary/PriceSummary';

const params = new URLSearchParams(window.location.search);
const roomId = params.get('room') || 0;

const availability = (
  <Provider store={store}>
    <AvailabilityContainer roomId={roomId} />
  </Provider>
);
const availabilityMount = document.getElementById('availability');

const priceSummary = (
  <Provider store={store}>
    <PriceSummary roomId={roomId} />
  </Provider>
);
const priceSummaryMount = document.getElementById('priceSummary');

ReactDOM.render(availability, availabilityMount);
ReactDOM.render(priceSummary, priceSummaryMount);
