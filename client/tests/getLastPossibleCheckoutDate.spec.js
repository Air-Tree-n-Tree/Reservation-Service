import moment from 'moment';
import dateStatusSelectors from '../src/components/CalendarDay/dateStatusSelector';

describe('Date status selector', () => {
  const currentDate = moment().diff(moment('2000-01'), 'days');
  const offsetDate = (date) => currentDate + date;
  let datesState;
  beforeEach(() => {
    datesState = {
      // Redux state
      selection: {
        checkinDate: null,
        checkoutDate: null,
        selecting: 'checkin',
      },
      reservedDates: [],
      constraints: {
        minNights: 1,
        maxNights: 3,
      },
    };
  });

  it('should return a string', () => {
    const result = dateStatusSelectors({
      ...datesState,
    }, offsetDate(0));
    expect(result).toStrictEqual(expect.any(String));
  });

  it('should deduce selected date', () => {
    const result = dateStatusSelectors({
      ...datesState,
      selection: {
        checkinDate: offsetDate(1),
        checkoutDate: offsetDate(3),
        selecting: 'checkin',
      },
    }, offsetDate(2));
    expect(result).toBe('selected');
  });

  it('should deduce reserved date', () => {
    const reservedDates = [];
    reservedDates[offsetDate(3)] = 'unavailable';
    const result = dateStatusSelectors({
      ...datesState,
      reservedDates,
    }, offsetDate(3));
    expect(result).toBe('unavailable');
  });

  it('should deduce checkin date', () => {
    const result = dateStatusSelectors({
      ...datesState,
      selection: {
        checkinDate: offsetDate(2),
        checkoutDate: null,
        selecting: 'checkin',
      },
    }, offsetDate(2));
    expect(result).toBe('checkinDate');
  });

  it('should deduce checkout date', () => {
    const result = dateStatusSelectors({
      ...datesState,
      selection: {
        checkinDate: null,
        checkoutDate: offsetDate(3),
        selecting: 'checkin',
      },
    }, offsetDate(3));
    expect(result).toBe('checkoutDate');
  });

  it('should deduce checkoutOnly', () => {
    const reservedDates = [];
    reservedDates[offsetDate(5)] = 'checkoutOnly';
    const result = dateStatusSelectors({
      ...datesState,
      reservedDates,
    }, offsetDate(5));
    expect(result).toBe('checkoutOnly');
  });
});
