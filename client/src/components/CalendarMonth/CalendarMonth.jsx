import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import Day from '../CalendarDay/CalendarDay';
import classes from './CalendarMonth.module.css';

import computeReservedDays from '../../utils/computeReservedDays';

export const CalendarMonth = ({ month, dayStatuses }) => {
  const startOfMonthDay = moment(month).day();
  return (
    <div>
      <div>{moment(month).format('MMMM')}</div>
      <div className={classes.calendar}>
        { ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((dayName) => (
          <div key={dayName}>{ dayName }</div>
        )) }

        {
          startOfMonthDay > 0
            ? <div style={{ gridColumn: `1 / ${startOfMonthDay + 1}` }} />
            : null
        }

        { dayStatuses.map((dayStatus, day) => (
          <Day
            key={moment(month).day(day).format()}
            dayOfMonth={day}
            status={dayStatus}
          />
        ))}
      </div>
    </div>
  );
};

CalendarMonth.propTypes = {
  month: PropTypes.string.isRequired,
  dayStatuses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ availability }, { month }) => {
  const { reservations, minNights } = availability;
  return {
    dayStatuses: computeReservedDays(reservations, month),
    minNights,
  };
};

export default connect(mapStateToProps)(CalendarMonth);
