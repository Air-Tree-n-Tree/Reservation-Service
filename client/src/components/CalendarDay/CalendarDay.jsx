import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import selectDate from '../../store/actions/selectDate.action';

import dateStatusSelector from './dateStatusSelector';

import classes from './CalendarDay.module.css';

export const CalendarDay = ({
  status,
  dayOfMonth,
  date,
  dispatchSelectDate,
}) => (
  <div className={[classes[status], classes.calendarDay].join(' ')}>
    <button
      className={classes.calendarDayButton}
      type="button"
      onClick={() => {
        if (status === 'available') {
          dispatchSelectDate(date);
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
  dispatchSelectDate: PropTypes.func.isRequired,
};

const mapStateToProps = ({ dates }, { date }) => ({
  status: dateStatusSelector(dates, date),
  selecting: dates.selection.selecting,
});

const mapDispatchToProps = {
  dispatchSelectDate: selectDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay);
