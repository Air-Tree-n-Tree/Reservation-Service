import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchAvailability from '../api/fetchAvailability';

class Availability extends Component {
  componentDidMount() {
    const { roomId } = this.props;
    fetchAvailability(roomId)
      .then();
  }

  render() {
    return (
      <div>Availability</div>
    );
  }
}

Availability.propTypes = {
  roomId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Availability;
