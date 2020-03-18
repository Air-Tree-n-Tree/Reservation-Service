import React from 'react';
import { shallow } from 'enzyme';
import Availability from './Availability';

test('Component should exist', () => {
  const reservation = shallow(<Availability />);
  expect(reservation).toExist();
});
