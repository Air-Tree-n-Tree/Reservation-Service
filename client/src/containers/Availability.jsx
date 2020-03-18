import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchAvailability from '../store/actions/fetchAvailability.action';

class Availability extends Component {
  componentDidMount() {
    const { fetch, roomId } = this.props;
    fetch(roomId);
  }

  render() {
    return (
      <div>Availability</div>
    );
  }
}

Availability.propTypes = {
  roomId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  fetch: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetch: fetchAvailability,
};

export default connect(null, mapDispatchToProps)(Availability);
