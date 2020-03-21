import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { Calendars } from '../client/src/components/Calendars/Calendars';

describe('Calendars component', () => {
  const calendars = shallow(<Calendars />);
  it('should render correctly', () => {
    expect(calendars).toExist();
  });
  it('should default to current month', () => {
    expect(Calendars.defaultProps).toEqual(expect.objectContaining(
      { selectedMonth: moment().format('YYYY-MM') },
    ));
  });
});
