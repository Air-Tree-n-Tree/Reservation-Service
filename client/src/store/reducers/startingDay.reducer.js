import moment from 'moment';

const startingDay = (state = moment().startOf('month').diff(moment('2000-01-01'), 'days')) => (
  state
);

export default startingDay;
