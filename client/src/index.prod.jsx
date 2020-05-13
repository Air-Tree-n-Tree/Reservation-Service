import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/prod.store';

import './styles/style.css';

import AvailabilityContainer from './containers/Availability/Availability';
import PriceSummary from './containers/PriceSummary/PriceSummary';

const { __preloadedState__ } = window;

const availability = (
  <Provider store={store(__preloadedState__)}>
    <AvailabilityContainer roomId={roomId} />
  </Provider>
);
const availabilityMount = document.getElementById('availability');

const priceSummary = (
  <Provider store={store()}>
    <PriceSummary roomId={roomId} />
  </Provider>
);
const priceSummaryMount = document.getElementById('priceSummary');

ReactDOM.hydrate(availability, availabilityMount);
ReactDOM.render(priceSummary, priceSummaryMount);
