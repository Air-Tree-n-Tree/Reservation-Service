import reservedDates from '../src/store/reducers/dates/reservedDates.reducer';

const data = {
  minNights: 5,
  reservations: [
    { startDate: 5000, length: 5 },
  ],
};

let state;

describe('reservedDates reducer', () => {
  it('should return the default state', () => {
    expect(reservedDates(undefined, {})).toEqual(null);
  });

  beforeEach(() => {
    state = reservedDates(undefined, { data, type: 'FETCH_AVAILABILITY' });
  });

  it('should correctly mark dates', () => {
    for (let date = data.reservations.startDate; date < data.reservations.length; date += 1) {
      expect(state[date]).not.toEqual(undefined);
    }
  });

  it('should mark first date of a reservation as checkout only', () => {
    expect(state[5000]).toEqual('checkoutOnly');
  });

  it('should compute all of the checkout only dates', () => {
    for (
      let date = data.reservations.startDate;
      date > data.reservations.startDate - data.minNights;
      date -= 1) {
      expect(state[date]).toEqual('checkoutOnly');
    }
  });
});
