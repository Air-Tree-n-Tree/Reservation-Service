import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CalendarsContainer from '../../components/Calendars/Calendars';
import fetchAvailability from '../../store/actions/fetchAvailability.action';

export class Availability extends Component {
  componentDidMount() {
    const { dispatchFetchAvailability, roomId } = this.props;
    dispatchFetchAvailability(roomId);
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
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
