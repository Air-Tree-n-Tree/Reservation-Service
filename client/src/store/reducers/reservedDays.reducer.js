import moment from 'moment';

const computeReservedDays = (reservations, startingDay) => {
  const dayStatuses = [];
  reservations.forEach(({ startDate, length }) => {
    for (let i = 0; i < length; i += 1) {
      dayStatuses[startDate - startingDay + i] = 'unavailable';
    }
  });
  // Fill the rest with available
  for (let i = 0; i < dayStatuses.length; i += 1) {
    dayStatuses[i] = dayStatuses[i] || 'available';
  }
  return dayStatuses;
};

const reservedDays = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_AVAILABILITY':
      return computeReservedDays(
        action.data.reservations,
        moment().startOf('month').diff(moment('2000-01-01'), 'days'),
      );
    default:
      return state;
  }
};

export default reservedDays;
