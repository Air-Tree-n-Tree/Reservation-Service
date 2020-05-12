import moment from 'moment';
import random from './random';
import Availabilty from '../models/Availability';

const generateAvailability = (roomId, daysToGenerate) => {
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
  const dayZero = moment('2000-01-01');
  let day = moment().diff(dayZero, 'days');
  const end = day + daysToGenerate; // How many days in advance to seed
  while (day < end) {
    const length = random.valueInRange(minNights, maxNights + 1);
    const startDate = day + random.valueInRange(0, maxNights);
    reservations.push({
      startDate,
      length,
    });
    day = startDate + length + 1;
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

export default generateAvailability;
