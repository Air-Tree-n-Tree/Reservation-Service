import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import CalendarDayContainer from '../CalendarDay/CalendarDay';
import classes from './CalendarMonth.module.css';

export const CalendarMonth = ({ month, reservedDays, position }) => {
  const startOfMonthDay = moment(month).day();
  const startOfMonthDaysSince2000 = moment(month).diff(moment('2000-01-01'), 'days');
  return (
    <div
      className={classes.calendarContainer}
      style={{ transform: `translateX(${100 * position}%)` }}
    >
      <div className={classes.monthLabel}>{moment(month).format('MMMM')}</div>
      <div className={classes.calendar}>
        { ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((dayName) => (
          <div key={dayName}>{ dayName }</div>
        )) }

        {
          startOfMonthDay > 0
            ? <div style={{ gridColumn: `1 / ${startOfMonthDay + 1}` }} />
            : null
        }

        { reservedDays.map((dayStatus, dayOfMonth) => {
          const day = startOfMonthDaysSince2000 + dayOfMonth;
          return (
            <CalendarDayContainer
              key={day}
              day={day}
              dayOfMonth={dayOfMonth}
              status={dayStatus}
            />
          );
        })}
      </div>
    </div>
  );
};

CalendarMonth.propTypes = {
  month: PropTypes.string.isRequired,
  reservedDays: PropTypes.arrayOf(PropTypes.string).isRequired,
  position: PropTypes.number.isRequired,
};

const mapStateToProps = ({ reservedDays, startingDay }, { month }) => {
  const startingIndex = moment(month).diff(moment('2000-01-01'), 'days') - startingDay;
  const endingIndex = startingIndex + moment(month).daysInMonth();
  return {
    startingIndex,
    reservedDays: moment(month).isSameOrAfter(moment().startOf('month'))
      ? reservedDays.slice(startingIndex, endingIndex)
      : new Array(moment(month).daysInMonth()).fill('unavailable'),
  };
};

export default connect(mapStateToProps)(CalendarMonth);
