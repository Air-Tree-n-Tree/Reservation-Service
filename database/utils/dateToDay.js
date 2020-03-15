const startTime = new Date('01/01/2000');

/**
 * @param {Date} date
 * @returns {Number} Number of days since 2000/1/1
 */
const dateToDay = (date) => (
  Math.floor(
    (date.getTime() - startTime.getTime())
    / (1000 * 60 * 60 * 24),
  )
);

module.exports = dateToDay;
