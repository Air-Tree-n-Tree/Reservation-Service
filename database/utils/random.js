
/**
 * @param {Number} min Lower bound, inclusive
 * @param {Number} max Upper bound, inclusive
 */
const valueInRange = (min, max) => (
  min + Math.floor(Math.random() * (max - min))
);

module.exports = {
  valueInRange,
};
