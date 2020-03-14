const random = require('./random');
const Availabilty = require('../models/Availability');
const dateToDay = require('./dateToDay');

const generateAvailability = (roomId) => {
  const minNights = random.valueInRange(1, 4);
  const maxNights = random.valueInRange(minNights + 1, 30);
  const minGuests = random.valueInRange(1, 4);
  const maxGuests = random.valueInRange(minGuests + 1, 15);
  const maxInfants = random.valueInRange(1, 5);

  const pricesPerGuests = [random.valueInRange(40, 200)];
  for (let i = 1; i < maxGuests; i += 1) {
    pricesPerGuests.push(pricesPerGuests[i - 1] + random.valueInRange(20, 40));
  }

  const reservations = [];
  let day = dateToDay(new Date());
  const end = day + 120;
  while (day < end) {
    const length = random.valueInRange(minNights, maxNights + 1);
    const startDate = day + random.valueInRange(0, maxNights);
    reservations.push({
      startDate,
      length,
    });
    day += startDate + length + 1;
  }

  return new Availabilty({
    roomId,
    minNights,
    maxNights,
    minGuests,
    maxGuests,
    maxInfants,
    pricesPerGuests,
    reservations,
  });
};

module.exports = generateAvailability;
