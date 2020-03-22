const computeReservedDates = (reservations) => {
  const dateStatuses = [];
  reservations.forEach(({ startDate, length }) => {
    for (let i = 0; i < length; i += 1) {
      dateStatuses[startDate + i] = 'unavailable';
    }
  });
  return dateStatuses;
};

const reservedDates = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_AVAILABILITY':
      return computeReservedDates(
        action.data.reservations,
      );
    default:
      return state;
  }
};

export default reservedDates;
