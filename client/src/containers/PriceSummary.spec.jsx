import React from 'react';
import { shallow } from 'enzyme';
import Reservation from './Reservation';

test('Component should exist', () => {
  const reservation = shallow(<Reservation />);
  expect(reservation).toExist();
});
