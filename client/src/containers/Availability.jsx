import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Availability extends Component {
  componentDidMount() {
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

const mapDispatchToProps = {

};

export default connect(null, mapDispatchToProps)(Availability);
