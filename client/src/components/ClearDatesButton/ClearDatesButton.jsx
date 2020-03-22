import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import clearSelectedDates from '../../store/actions/clearSelectedDates.action';

import classes from './ClearDatesButton.module.css';

const clearDatesButton = ({ checkinDate, checkoutDate, dispatchclearSelectedDates }) => (
  <button
    type="button"
    className={classes.clearDatesButton}
    disabled={!checkinDate && !checkoutDate}
    onClick={dispatchclearSelectedDates}
  >
    Clear dates
  </button>
);

clearDatesButton.propTypes = {
  checkinDate: PropTypes.number,
  checkoutDate: PropTypes.number,
  dispatchclearSelectedDates: PropTypes.func.isRequired,
};

clearDatesButton.defaultProps = {
  checkinDate: null,
  checkoutDate: null,
};

const mapStateToProps = ({ dates }) => {
  const { checkinDate, checkoutDate } = dates.selection;
  return {
    checkinDate,
    checkoutDate,
  };
};

const mapDispatchToProps = {
  dispatchclearSelectedDates: clearSelectedDates,
};

export default connect(mapStateToProps, mapDispatchToProps)(clearDatesButton);
