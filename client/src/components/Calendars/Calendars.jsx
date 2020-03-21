import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import CalendarMonthContainer from '../CalendarMonth/CalendarMonth';
import classes from './Calendars.module.css';

export class Calendars extends Component {
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
      <div className={classes.calendars}>
        {[0, 1].map((offset) => {
          const month = moment(currentMonth).add(offset, 'month').format('YYYY-MM');
          return (
            <CalendarMonthContainer
              key={month}
              month={month}
            />
          );
        })}

        <button className={classes.clearDates} type="button">Clear dates</button>

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

const mapStateToProps = ({ checkinDay }) => ({
  selectedMonth: moment(checkinDay).format('YYYY-MM'),
});

export default connect(mapStateToProps)(Calendars);
