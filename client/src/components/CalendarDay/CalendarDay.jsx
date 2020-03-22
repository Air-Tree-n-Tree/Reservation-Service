import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import setCheckInDate from '../../store/actions/setCheckInDate.action';
import setCheckOutDate from '../../store/actions/setCheckOutDate.action';

import dateStatusSelector from './dateStatusSelector';

import classes from './CalendarDay.module.css';

export const CalendarDay = ({
  status,
  dayOfMonth,
  date,
  dispatchSetCheckInDate,
  dispatchSetCheckOutDate,
  selecting,
}) => (
  <div className={[classes[status], classes.calendarDay].join(' ')}>
    <button
      className={classes.calendarDayButton}
      type="button"
      onClick={() => {
        if (selecting === 'checkin' && status === 'available') {
          dispatchSetCheckInDate(date);
        } else if (selecting === 'checkout' && status === 'available') {
          dispatchSetCheckOutDate(date);
        }
      }}
    >
      {dayOfMonth + 1}
    </button>
  </div>
);

CalendarDay.propTypes = {
  status: PropTypes.string.isRequired,
  dayOfMonth: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  dispatchSetCheckInDate: PropTypes.func.isRequired,
  dispatchSetCheckOutDate: PropTypes.func.isRequired,
  selecting: PropTypes.string.isRequired,
};

export const mapStateToProps = ({
  checkInDay,
  checkOutDay,
  currentDay,
  startingDay,
  availability,
  reservedDays,
  selecting,
}, { status, day }) => {
  let realStatus = status;
  const { maxNights, minNights } = availability;
  if (day < currentDay) {
    realStatus = 'unavailable';
  } else if (day === checkOutDay) {
    realStatus = 'checkoutDay';
  } else if (day === checkInDay) {
    realStatus = 'checkinDay';
  } else if (selecting === 'checkin' && realStatus === 'available') {
    for (let i = 1; i <= minNights; i += 1) {
      if (reservedDays[day - startingDay + i] === 'unavailable') {
        realStatus = 'checkoutOnly';
        break;
      }
    }
  } else if (selecting === 'checkout') {
    if (day > checkInDay + maxNights || day < checkInDay) {
      realStatus = 'unavailable';
    }
  }
  if (day > checkInDay && day < checkOutDay) {
    realStatus = 'selected';
  }
  return {
    status: realStatus,
    selecting,
  };
};

const mapDispatchToProps = {
  dispatchSetCheckInDate: setCheckInDate,
  dispatchSetCheckOutDate: setCheckOutDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay);
