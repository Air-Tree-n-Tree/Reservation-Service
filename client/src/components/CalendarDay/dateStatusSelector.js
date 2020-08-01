import moment from 'moment';
import getLastPossibleCheckoutDate from '../../store/selectors/getLastPossibleCheckoutDate';

const dateIsReserved = (date, reservedDates) => (
  reservedDates[date] === 'unavailable' && reservedDates[date - 1] === 'unavailable'
);

const dateHasPassed = (date) => (
  date < moment().diff(moment('2000-01'), 'days')
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

const dateExceedsLastPossibleCheckoutDate = (date, dates) => {
  const lastPossibleCheckoutDate = getLastPossibleCheckoutDate(dates);
  return lastPossibleCheckoutDate && date > lastPossibleCheckoutDate;
};

const dateStatusSelector = (dates, date) => {
  const { reservedDates, constraints, selection } = dates;
  if (dateHasPassed(date) || dateIsReserved(date, reservedDates)) {
    return 'unavailable';
  }

  const { checkoutDate, checkinDate } = selection;
  if (date === checkoutDate) {
    return 'checkoutDate';
  }
  if (date === checkinDate) {
    return 'checkinDate';
  }
  if (checkinDate < date && date < checkoutDate) {
    return 'selected';
  }

  const { selecting } = selection;
  const { minNights } = constraints;
  if (selecting === 'checkin' && dateIsCheckoutOnly(date, reservedDates, minNights)) {
    return 'checkoutOnly';
  }

  if (selecting === 'checkout') {
    if (date < checkinDate) {
      return 'unavailable';
    }
    if (dateDoesNotMeetMinNights(date, checkinDate, minNights)) {
      return 'minNights';
    }
    if (dateExceedsLastPossibleCheckoutDate(date, dates)) {
      return 'unavailable';
    }
  }

  return 'available';
};

export default dateStatusSelector;
