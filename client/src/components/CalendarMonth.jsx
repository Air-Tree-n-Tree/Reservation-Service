import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import Day from './Day';

import computeReservedDays from '../utils/computeReservedDays';

const CalendarMonth = ({ month, dayStatuses }) => (
  <div>
    <div>{moment(month).format('MMMM')}</div>
    <div>
      { dayStatuses.map((dayStatus, day) => (
        <Day
          status={dayStatus}
          key={moment(month).day(day).format()}
        />
      ))}
    </div>
  </div>
);

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
