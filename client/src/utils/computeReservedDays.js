import moment from 'moment';

const findFirst = (reservations, targetDate) => {
  let [low, high] = [0, reservations.length - 1];
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (mid === 0) {
      return mid;
    }
    const { startDate, length } = reservations[mid];
    const endDate = startDate + length;
    if (endDate < targetDate) {
      low = mid + 1;
    } else {
      // Grab first reservation to have dates past targetDate
      const [previousStartDate, previousLength] = [
        reservations[mid - 1].startDate,
        reservations[mid - 1].length,
      ];
      const previousEndDate = previousStartDate + previousLength;
      if (previousEndDate < targetDate) {
        return mid;
      }
      high = mid;
    }
  }
  return low;
};

/**
 * @param {Array} reservations Array of all reservations sorted by date (earliest to latest)
 * @param {String} month String formatted as YYYY-MM
 * @returns {Array} Array containing statuses for each day of the month
 */
const computeReservedDays = (reservations, month) => {
  const monthStart = moment(month).diff(moment('2000-01-01'), 'days');
  const monthLength = moment(month).daysInMonth();
  const monthEnd = monthStart + monthLength;
  // Find relevant reservations
  let reservationIndex = findFirst(reservations, monthStart);

  // Initialize day statuses as available
  const dayStatuses = [];
  dayStatuses.length = monthLength;
  dayStatuses.fill('available', 0, monthLength);

  // Set unavailable days
  while (
    reservations[reservationIndex]
    && reservations[reservationIndex].startDate < monthEnd
  ) {
    const { startDate, length } = reservations[reservationIndex];
    const endDate = startDate + length;
    dayStatuses.fill(
      'unavailable',
      Math.max(startDate - monthStart, 0),
      Math.min(endDate - monthStart, monthLength),

    );
    reservationIndex += 1;
  }
  return dayStatuses;
};

export default computeReservedDays;
