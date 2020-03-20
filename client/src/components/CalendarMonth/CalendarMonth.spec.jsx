import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { CalendarMonth } from './CalendarMonth';

describe('Calender Month component', () => {
  let calendarMonth;
  beforeEach(() => {
    const dayStatuses = [];
    dayStatuses.length = moment('2020-03').daysInMonth();
    dayStatuses.fill('available');
    calendarMonth = shallow(
      <CalendarMonth
        month="2020-03"
        dayStatuses={dayStatuses}
      />,
    );
  });
  it('should render correctly', () => {
    expect(calendarMonth).toMatchSnapshot();
  });
});
