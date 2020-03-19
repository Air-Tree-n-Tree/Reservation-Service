import React from 'react';
import { shallow } from 'enzyme';
import PriceSummary from './PriceSummary';

test('Component should exist', () => {
  const reservation = shallow(<PriceSummary roomId={0} />);
  expect(reservation).toExist();
});
