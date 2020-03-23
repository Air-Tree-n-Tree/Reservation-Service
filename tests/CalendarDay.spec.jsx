import React from 'react';
import { shallow } from 'enzyme';
import { CalendarDay } from '../client/src/components/CalendarDay/CalendarDay';

describe('Calendar Day component', () => {
  let mockDipsatchSelectDate;
  let calendarDay;

  beforeEach(() => {
    mockDipsatchSelectDate = jest.fn();
    calendarDay = shallow(
      <CalendarDay
        status="available"
        dayOfMonth={0}
        date={7000}
        dispatchSelectDate={mockDipsatchSelectDate}
      />,
    );
  });

  it('should render correctly', () => {
    expect(calendarDay).toMatchSnapshot();
  });
  it('should dispatch actions on click', () => {
    calendarDay.find('button').simulate('click');
    expect(mockDipsatchSelectDate).toHaveBeenCalledWith(7000);
  });
});
