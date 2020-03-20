import React from 'react';
import PropTypes from 'prop-types';

import classes from './CalendarDay.module.css';

const Day = ({ status, dayOfMonth }) => (
  <div className={[classes[status], classes.calendarDay].join(' ')}>
    {dayOfMonth + 1}
  </div>
);

Day.propTypes = {
  status: PropTypes.string.isRequired,
  dayOfMonth: PropTypes.number.isRequired,
};

export default Day;