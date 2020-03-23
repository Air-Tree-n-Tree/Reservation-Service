import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import CalendarMonth from '../client/src/components/CalendarMonth/CalendarMonth';

describe('Calender Month component', () => {
  let calendarMonth;
  beforeEach(() => {
    const reservedDays = [];
    reservedDays.length = moment('2020-03').daysInMonth();
    reservedDays.fill('available');
    calendarMonth = shallow(
      <CalendarMonth
        month="2020-03"
        reservedDays={reservedDays}
        position={0}
      />,
    );
  });
  it('should render correctly', () => {
    expect(calendarMonth).toMatchSnapshot();
  });
});
