import React from 'react';
import { shallow } from 'enzyme';
import { CalendarDay, mapStateToProps } from '../client/src/components/CalendarDay/CalendarDay';

describe('Calendar Day component', () => {
  let mockCheckInAction;
  let mockCheckOutAction;
  let calendarDay;

  beforeEach(() => {
    mockCheckInAction = jest.fn();
    mockCheckOutAction = jest.fn();
    calendarDay = shallow(
      <CalendarDay
        status="available"
        dayOfMonth={0}
        day={7000}
        dispatchSetCheckInDay={mockCheckInAction}
        dispatchSetCheckOutDay={mockCheckOutAction}
        selecting="checkin"
      />,
    );
  });

  it('should render correctly', () => {
    expect(calendarDay).toMatchSnapshot();
  });
  it('should dispatch actions on click', () => {
    calendarDay.find('button').simulate('click');
    expect(mockCheckInAction).toHaveBeenCalled();
    calendarDay.setProps({ selecting: 'checkout' });
    calendarDay.find('button').simulate('click');
    expect(mockCheckOutAction).toHaveBeenCalled();
  });
});

describe('Calendar Day component state/props', () => {
  it('should correctly map state to props', () => {
    const result = mapStateToProps({
      // Redux state
      checkInDay: null,
      checkOutDay: null,
      currentDay: 1,
      startingDay: 1,
      availability: {},
      reservedDays: [],
      selecting: 'checkin',
    },
    {
      // Own props
      status: 'available',
      day: 1,
    });
    expect(result).toStrictEqual(expect.objectContaining({
      status: expect.any(String),
      selecting: expect.any(String),
    }));
  });

  it('should deduce selected date', () => {
    const result = mapStateToProps({
      // Redux state
      checkInDay: 1,
      checkOutDay: 3,
      currentDay: 1,
      startingDay: 1,
      availability: {},
      reservedDays: [],
      selecting: 'checkin',
    },
    {
      // Own props
      status: 'available',
      day: 2,
    });
    expect(result.status).toBe('selected');
  });

  it('should deduce unavailable date', () => {
    const result = mapStateToProps({
      // Redux state
      checkInDay: null,
      checkOutDay: null,
      currentDay: 1,
      startingDay: 1,
      availability: {},
      reservedDays: [],
      selecting: 'checkin',
    },
    {
      // Own props
      status: 'available',
      day: 0,
    });
    expect(result.status).toBe('unavailable');
  });

  it('should deduce checkin date', () => {
    const result = mapStateToProps({
      // Redux state
      checkInDay: 1,
      checkOutDay: 3,
      currentDay: 1,
      startingDay: 1,
      availability: {},
      reservedDays: [],
      selecting: 'checkin',
    },
    {
      // Own props
      status: 'available',
      day: 1,
    });
    expect(result.status).toBe('checkinDay');
  });

  it('should deduce checkout date', () => {
    const result = mapStateToProps({
      // Redux state
      checkInDay: 1,
      checkOutDay: 3,
      currentDay: 1,
      startingDay: 1,
      availability: {},
      reservedDays: [],
      selecting: 'checkin',
    },
    {
      // Own props
      status: 'available',
      day: 3,
    });
    expect(result.status).toBe('checkoutDay');
  });

  it('should deduce checkoutOnly', () => {
    const result = mapStateToProps({
      // Redux state
      checkInDay: null,
      checkOutDay: null,
      currentDay: 0,
      startingDay: 0,
      availability: { minNights: 3 },
      reservedDays: ['available', 'unavailable'],
      selecting: 'checkin',
    },
    {
      // Own props
      status: 'available',
      day: 0,
    });
    expect(result.status).toBe('checkoutOnly');
  });
});
