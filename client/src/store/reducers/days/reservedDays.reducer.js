import moment from 'moment';

const computeReservedDates = (reservations, startingDate) => {
  const dateStatuses = [];
  reservations.forEach(({ startDate, length }) => {
    for (let i = 0; i < length; i += 1) {
      dateStatuses[startDate - startingDate + i] = 'unavailable';
    }
  });
  // Fill the rest with available
  for (let i = 0; i < dateStatuses.length; i += 1) {
    dateStatuses[i] = dateStatuses[i] || 'available';
  }
  return dateStatuses;
};

const reservedDates = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_AVAILABILITY':
      return computeReservedDates(
        action.data.reservations,
        moment().startOf('month').diff(moment('2000-01-01'), 'days'),
      );
    default:
      return state;
  }
};

export default reservedDates;
