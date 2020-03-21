import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CalendarsContainer from '../../components/Calendars/Calendars';
import fetchAvailability from '../../store/actions/fetchAvailability.action';

export class Availability extends Component {
  componentDidMount() {
    const { fetch, roomId } = this.props;
    fetch(roomId);
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
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ availability }) => ({
  loading: Object.keys(availability).length === 0,
});

const mapDispatchToProps = {
  fetch: fetchAvailability,
};

export default connect(mapStateToProps, mapDispatchToProps)(Availability);
