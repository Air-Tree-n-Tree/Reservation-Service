const computeReservedDates = (reservations, minNights) => {
  const dateStatuses = [];
  reservations.forEach(({ startDate, length }) => {
    for (let i = 0; i < length; i += 1) {
      dateStatuses[startDate + i] = 'unavailable';
    }
  });

  let nextMinNights = minNights;
  for (let i = dateStatuses.length - 1; i >= 0; i -= 1) {
    if (dateStatuses[i] === undefined || dateStatuses[i - 1] === undefined) {
      if (nextMinNights > 0) {
        nextMinNights -= 1;
        dateStatuses[i] = 'checkoutOnly';
      }
    } else if (dateStatuses[i] === 'unavailable') {
      nextMinNights = minNights;
    }
  }

  return dateStatuses;
};

const reservedDates = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_AVAILABILITY':
      return computeReservedDates(
        action.data.reservations,
        action.data.minNights,
      );
    default:
      return state;
  }
};

export default reservedDates;
