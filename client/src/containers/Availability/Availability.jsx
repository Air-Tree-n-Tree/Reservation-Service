import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CalendarsContainer from '../../components/Calendars/Calendars';
import Title from '../../components/Title/Title';
import Caption from '../../components/Caption/Caption';
import fetchAvailability from '../../store/actions/fetchAvailability.action';

import classes from './Availability.module.css';

export class Availability extends Component {
  componentDidMount() {
    const { dispatchFetchAvailability, roomId } = this.props;
    dispatchFetchAvailability(roomId);
  }

  render() {
    const { loading } = this.props;
    return (
      <div className={classes.Availability}>
        <Title />
        <Caption />
        { loading ? 'Loading' : <CalendarsContainer />}
      </div>
    );
  }
}

Availability.propTypes = {
  roomId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  dispatchFetchAvailability: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ dates }) => ({
  loading: dates.reservedDates === null,
});

const mapDispatchToProps = {
  dispatchFetchAvailability: fetchAvailability,
};

export default connect(mapStateToProps, mapDispatchToProps)(Availability);
