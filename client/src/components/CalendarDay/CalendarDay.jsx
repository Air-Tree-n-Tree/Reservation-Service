import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import setCheckInDay from '../../store/actions/setCheckInDay.action';
import setCheckOutDay from '../../store/actions/setCheckOutDay.action';

import classes from './CalendarDay.module.css';

const Day = ({
  status,
  dayOfMonth,
  day,
  dispatchSetCheckInDay,
  dispatchSetCheckOutDay,
  selecting,
}) => (
  <div className={[classes[status], classes.calendarDay].join(' ')}>
    <button
      className={classes.calendarDayButton}
      type="button"
      onClick={() => {
        if (selecting === 'checkin' && status === 'available') {
          dispatchSetCheckInDay(day);
        } else if (selecting === 'checkout' && status === 'available') {
          dispatchSetCheckOutDay(day);
        }
      }}
    >
      {dayOfMonth + 1}
    </button>
  </div>
);

Day.propTypes = {
  status: PropTypes.string.isRequired,
  dayOfMonth: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  dispatchSetCheckInDay: PropTypes.func.isRequired,
  dispatchSetCheckOutDay: PropTypes.func.isRequired,
  selecting: PropTypes.string.isRequired,
};

const mapStateToProps = ({
  checkInDay,
  checkOutDay,
  currentDay,
  startingDay,
  availability,
  reservedDays,
  selecting,
}, { status, day }) => {
  let realStatus = status;
  const { minNights } = availability;
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
  } else {
    if (day > checkInDay + minNights || day < checkInDay) {
      realStatus = 'unavailable';
    }
  }
  return {
    status: realStatus,
    selecting,
  };
};

const mapDispatchToProps = {
  dispatchSetCheckInDay: setCheckInDay,
  dispatchSetCheckOutDay: setCheckOutDay,
};

export default connect(mapStateToProps, mapDispatchToProps)(Day);
