import moment from 'moment';

const currentDay = (state = moment().startOf('day').format()) => (
  state
);

export default currentDay;
