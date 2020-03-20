import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import Day from '../CalendarDay/CalendarDay';
import classes from './CalendarMonth.module.css';

export const CalendarMonth = ({ month, reservedDays }) => {
  const startOfMonthDay = moment(month).day();
  const startOfMonthDaysSince2000 = moment(month).diff(moment('2000-01-01'), 'days');
  return (
    <div className={classes.calendarContainer}>
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
            <Day
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
};

const mapStateToProps = ({ reservedDays, startingDay }, { month }) => {
  const startingIndex = moment(month).diff(moment('2000-01-01'), 'days') - startingDay;
  const endingIndex = startingIndex + moment(month).daysInMonth();
  return {
    startingIndex,
    reservedDays: reservedDays.slice(startingIndex, endingIndex),
  };
};

export default connect(mapStateToProps)(CalendarMonth);
