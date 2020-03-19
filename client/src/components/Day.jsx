import React from 'react';
import PropTypes from 'prop-types';

const Day = ({ status }) => (
  <div>
    {status}
  </div>
);

Day.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Day;
