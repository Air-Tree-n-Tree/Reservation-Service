import React from 'react';
import { shallow } from 'enzyme';

import Availability from './Availability';

jest.mock('../api/fetchAvailability');

describe('Availibiltiy Container Component', () => {
  const availability = shallow(<Availability roomId={0} />);
  it('should exist', () => {
    expect(availability).toExist();
  });
});
