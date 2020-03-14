
const randomValueInRange = (min, max) => (
  // The maximum is exclusive and the minimum is inclusive
  min + Math.floor(Math.random() * (max - min))
);

/**
 * Generates a random range within the given range.
 * @param {Number} min The minimum value of the range's lower bound, inclusive.
 * @param {Number} max The maximum value of the range's upper bound, exclusive.
 * @param {Number} [minLength] The minimum length of the range.
 * @returns {Array<Number>} Tuple: [lowerbound, upperbound, length]
 */
const generateRandomRange = (min, max, minLength = 1) => {
  const lowerBound = randomValueInRange(min, max - minLength);
  const upperBound = randomValueInRange(lowerBound + minLength, max);
  return [lowerBound, upperBound, upperBound - lowerBound];
};

module.exports = {
  generateRandomRange,
  randomValueInRange,
};
