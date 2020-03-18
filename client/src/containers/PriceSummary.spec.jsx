import React from 'react';
import { shallow } from 'enzyme';
import PriceSummary from './PriceSummary';

test('Component should exist', () => {
  const reservation = shallow(<PriceSummary />);
  expect(reservation).toExist();
});
