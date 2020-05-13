import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import './styles/style.css';

import AvailabilityContainer from './containers/Availability/Availability';
import PriceSummary from './containers/PriceSummary/PriceSummary';

const randomRoom = Math.floor(Math.random() * 100);

const availability = (
  <Provider store={store()}>
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
