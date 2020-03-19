import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

const CalendarMonth = ({ month }) => (
  <div>
    <div>{moment(month).format('MMMM')}</div>
  </div>
);

CalendarMonth.propTypes = {
  month: PropTypes.string.isRequired,
};

const mapStateToProps = ({ availability }) => ({
  minNights: availability.minNights,
  maxNights: availability.maxNights,
});

export default connect(mapStateToProps)(CalendarMonth);
