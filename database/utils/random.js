
/**
 * 
 * @param {Number} min Lower bound, inclusive
 * @param {Number} max Upper bound, inclusive
 */
const valueInRange = (min, max) => (
  // The maximum is exclusive and the minimum is inclusive
  min + Math.floor(Math.random() * (max - min))
);

module.exports = {
  valueInRange,
};
