import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import clearCheckInDay from '../../store/actions/clearCheckInDay.action';
import clearCheckOutDay from '../../store/actions/clearCheckOutDay.action';

import classes from './ClearDatesButton.module.css';

const clearDatesButton = ({ checkInDay, checkOutDay, clearDates }) => {
  return (
    <button
      type="button"
      className={classes.clearDatesButton}
      disabled={!checkInDay && !checkOutDay}
      onClick={clearDates}
    >
      Clear dates
    </button>
  );
};

clearDatesButton.propTypes = {
  checkInDay: PropTypes.number,
  checkOutDay: PropTypes.number,
  clearDates: PropTypes.func.isRequired,
};

clearDatesButton.defaultProps = {
  checkInDay: null,
  checkOutDay: null,
};

const mapStateToProps = ({ checkInDay, checkOutDay }) => ({
  checkInDay,
  checkOutDay,
});

const mapDispatchToProps = (dispatch) => ({
  clearDates: () => {
    dispatch(clearCheckInDay());
    dispatch(clearCheckOutDay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(clearDatesButton);
