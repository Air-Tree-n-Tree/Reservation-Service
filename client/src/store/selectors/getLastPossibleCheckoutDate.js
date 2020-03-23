import { createSelector } from 'reselect';

const getReservedDates = (dates) => dates.reservedDates;
const getCheckinDate = (dates) => dates.selection.checkinDate;
const getMinNights = (dates) => dates.constraints.minNights;
const getMaxNights = (dates) => dates.constraints.maxNights;

const getLastPossibleCheckoutDate = createSelector(
  [getCheckinDate, getReservedDates, getMinNights, getMaxNights],
  (checkinDate, reservedDates, minNights, maxNights) => {
    for (let i = minNights; i < maxNights; i += 1) {
      if (reservedDates[checkinDate + i] === 'unavailable') {
        return checkinDate + i;
      }
    }
    return checkinDate + maxNights;
  },
);

export default getLastPossibleCheckoutDate;
