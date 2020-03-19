import moment from 'moment';

const findFirst = (reservations, targetDate) => {
  let [low, high] = [0, reservations.length];
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    const { startDate } = reservations[mid];
    if (startDate > targetDate) {
      high = mid;
    } else {
      // Grab first reservation with start date just before month start
      if (mid === reservations.length - 1 || reservations[mid + 1].startDate > targetDate) {
        return mid;
      }
      low = mid;
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
    dayStatuses.fill(
      'unavailable',
      Math.max(startDate - monthStart, 0),
      Math.min(startDate + length - monthStart, monthLength),
    );
    reservationIndex += 1;
  }
  return dayStatuses;
};

export default computeReservedDays;
