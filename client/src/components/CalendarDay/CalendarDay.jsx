import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import setCheckInDay from '../../store/actions/setCheckInDay.action';

import classes from './CalendarDay.module.css';

const Day = ({
  status,
  dayOfMonth,
  day,
  dispatchSetCheckInDay,
}) => (
  <div className={[classes[status], classes.calendarDay].join(' ')}>
    <button
      className={classes.calendarDayButton}
      type="button"
      onClick={() => !['unavailable', 'checkoutOnly'].includes(status) && dispatchSetCheckInDay(day)}
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
};

const mapStateToProps = ({ checkInDay, currentDay }, { status, day }) => {
  let realStatus = status;
  if (day < currentDay) {
    realStatus = 'unavailable';
  }
  if (day === checkInDay) {
    realStatus = 'checkinDay';
  }
  return {
    status: realStatus,
  };
};

const mapDispatchToProps = {
  dispatchSetCheckInDay: setCheckInDay,
};

export default connect(mapStateToProps, mapDispatchToProps)(Day);
