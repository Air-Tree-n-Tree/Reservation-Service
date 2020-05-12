import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/prod.store';

import './styles/style.css';

import AvailabilityContainer from './containers/Availability/Availability';
import PriceSummary from './containers/PriceSummary/PriceSummary';

const params = new URLSearchParams(window.location.search);
const roomId = params.get('roomId') || 0;

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
