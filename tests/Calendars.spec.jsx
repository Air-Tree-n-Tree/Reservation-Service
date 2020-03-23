import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { Calendars } from '../client/src/components/Calendars/Calendars';

describe('Calendars component', () => {
  const calendars = shallow(
    <Calendars
      selectedMonth={moment().format('YYYY-MM')}
    />,
  );
  it('should render correctly', () => {
    expect(calendars).toExist();
  });
});
