import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import CalendarMonthContainer from '../CalendarMonth/CalendarMonth';
import ClearDatesButton from '../ClearDatesButton/ClearDatesButton';
import classes from './Calendars.module.css';

export class Calendars extends Component {
  constructor(props) {
    super(props);
    const { selectedMonth } = this.props;
    this.state = {
      currentMonth: selectedMonth,
    };
    this.slideLeft = this.slide.bind(this, -1);
    this.slideRight = this.slide.bind(this, 1);
  }

  slide(direction) {
    this.setState(({ currentMonth }) => ({
      currentMonth: moment(currentMonth).add(direction, 'month').format('YYYY-MM'),
    }));
  }

  render() {
    const { currentMonth } = this.state;
    return (
      <div className={classes.calendars}>

        <button type="button" className={classes.leftButton} onClick={this.slideLeft}>
          {'<'}
        </button>
        <button type="button" className={classes.rightButton} onClick={this.slideRight}>
          {'>'}
        </button>

        {[-1, 0, 1, 2].map((offset) => {
          const month = moment(currentMonth).add(offset, 'month').format('YYYY-MM');
          return (
            <CalendarMonthContainer
              position={offset}
              key={month}
              month={month}
            />
          );
        })}

        <ClearDatesButton />

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

export default connect(mapStateToProps, null)(Calendars);
