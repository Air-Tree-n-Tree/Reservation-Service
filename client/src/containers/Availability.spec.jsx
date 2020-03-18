import React from 'react';
import { shallow } from 'enzyme';
import Availability from './Availability';

test('Component should exist', () => {
  const reservation = shallow(<Availability roomId={0} />);
  expect(reservation).toExist();
});
