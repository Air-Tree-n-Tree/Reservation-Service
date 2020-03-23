import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import CalendarDayContainer from '../CalendarDay/CalendarDay';
import classes from './CalendarMonth.module.css';

const CalendarMonth = ({ month, position }) => {
  const monthMoment = moment(month);
  const startOfMonthDay = monthMoment.day();
  const startOfMonthDaysSince2000 = monthMoment.diff(moment('2000-01-01'), 'days');
  const days = [];
  for (let i = 0; i < monthMoment.daysInMonth(); i += 1) {
    days.push(startOfMonthDaysSince2000 + i);
  }

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

        { days.map((date, dayOfMonth) => (
          <CalendarDayContainer
            key={date}
            date={date}
            dayOfMonth={dayOfMonth}
          />
        ))}
      </div>
    </div>
  );
};

CalendarMonth.propTypes = {
  month: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
};

export default CalendarMonth;
