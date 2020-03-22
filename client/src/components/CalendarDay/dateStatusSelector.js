import moment from 'moment';

const dateIsReserved = (date, reservedDates) => (
  reservedDates[date] === 'unavailable'
);

const dateHasPassed = (date) => (
  date < moment().diff(moment('2000-01'), 'days')
);

const dateIsFutureToAllReservations = (date, reservedDates) => (
  date > reservedDates.length
);

const dateIsCheckoutOnly = (date, reservedDates, minNights) => {
  for (let i = 1; i <= minNights; i += 1) {
    if (reservedDates[date + i] === 'unavailable') {
      return true;
    }
  }
  return false;
};

const dateDoesNotMeetMinNights = (date, checkinDate, minNights) => (
  date > checkinDate && date - checkinDate < minNights
);

const dateExceedsMaxNights = (date, checkinDate, maxNights) => (
  date - checkinDate > maxNights
);

const dateExceedsNextReservation = (date, checkinDate, reservedDates, minNights, maxNights) => {
  let nextReservationDate = checkinDate + maxNights;
  for (let i = minNights; i < maxNights; i += 1) {
    if (reservedDates[checkinDate + i] === 'unavailable') {
      nextReservationDate = checkinDate + i;
      break;
    }
  }
  return date >= nextReservationDate;
};

const dateStatusSelector = ({ reservedDates, constraints, selection }, date) => {
  if (dateHasPassed(date) || dateIsReserved(date, reservedDates)) {
    return 'unavailable';
  }

  const { selecting } = selection;
  if (selecting === 'checkin' && dateIsFutureToAllReservations(date, reservedDates)) {
    return 'available';
  }

  const { checkoutDate, checkinDate } = selection;
  if (date === checkoutDate) {
    return 'checkoutDate';
  }
  if (date === checkinDate) {
    return 'checkinDate';
  }

  const { minNights } = constraints;
  if (selecting === 'checkin' && dateIsCheckoutOnly(date, reservedDates, minNights)) {
    return 'checkoutOnly';
  }

  const { maxNights } = constraints;
  if (selecting === 'checkout') {
    if (dateExceedsMaxNights(date, checkinDate, maxNights)) {
      return 'unavailable';
    }
    if (date < checkinDate) {
      return 'unavailable';
    }
    if (dateExceedsNextReservation(date, checkinDate, reservedDates, minNights, maxNights)) {
      return 'unavailable';
    }
    if (dateDoesNotMeetMinNights(date, checkinDate, minNights)) {
      return 'minNights';
    }
  }

  return 'available';
};

export default dateStatusSelector;
