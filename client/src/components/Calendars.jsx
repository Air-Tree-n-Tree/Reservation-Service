import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

class Calendars extends Component {
  constructor(props) {
    super(props);
    const { selectedMonth } = this.props;
    this.state = {
      currentMonth: selectedMonth,
    };
  }

  render() {
    const { currentMonth } = this.state;
    return (
      <div>
        CalendarMonth:
        { currentMonth }
        CalendarMonth:
        { moment(currentMonth).add(1, 'month').format('YYYY-MM') }
      </div>
    );
  }
}

Calendars.propTypes = {
  selectedMonth: PropTypes.string,
};

Calendars.defaultProps = {
  selectedMonth: moment().startOf('month').format('YYYY-MM'), // Default to real life month
};

const mapStateToProps = ({ selectedMonth }) => ({
  selectedMonth,
});

export default connect(mapStateToProps)(Calendars);
