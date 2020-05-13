import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CalendarsContainer from '../../components/Calendars/Calendars';
import Title from '../../components/Title/Title';
import Caption from '../../components/Caption/Caption';
import fetchAvailability from '../../store/actions/fetchAvailability.action';

import classes from './Availability.module.css';

export const Availability = () => (
  <div className={classes.Availability}>
    <Title />
    <Caption />
    <CalendarsContainer />
  </div>
);

const mapStateToProps = ({ dates }) => ({
  loading: dates.reservedDates === null,
});

const mapDispatchToProps = {
  dispatchFetchAvailability: fetchAvailability,
};

export default connect(mapStateToProps, mapDispatchToProps)(Availability);
