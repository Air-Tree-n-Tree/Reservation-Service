import moment from 'moment';

const currentDay = (state = moment().diff(moment('2000-01'), 'days')) => (
  state
);

export default currentDay;
