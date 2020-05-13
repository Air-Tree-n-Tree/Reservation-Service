import React from 'react';

import CalendarsContainer from '../../components/Calendars/Calendars';
import Title from '../../components/Title/Title';
import Caption from '../../components/Caption/Caption';

import classes from './Availability.module.css';

const Availability = () => (
  <div className={classes.Availability}>
    <Title />
    <Caption />
    <CalendarsContainer />
  </div>
);

export default Availability;
