import moment from 'moment';
import computeReservedDays from './computeReservedDays';

describe('Compute Reserved Days utility', () => {
  let month;
  beforeEach(() => {
    month = moment('2020-03');
  });
  it('should show no reserved days for no reservations', () => {
    const result = computeReservedDays([], month.format('YYYY-MM'));
    const expected = [];
    expected.length = month.daysInMonth();
    expected.fill('available', 0, expected.length);
    expect(result).toStrictEqual(expected);
  });
  it('should return an array with exactly the amount of days in month', () => {
    const result = computeReservedDays([], month.format('YYYY-MM'));
    expect(result.length).toBe(month.daysInMonth());
  });
  it('should accurately compute reserved days', () => {
    const monthStart = month.diff(moment('2000-01-01'), 'days');
    const result = computeReservedDays([
      {
        startDate: monthStart + 5,
        length: 2,
      },
      {
        startDate: monthStart + 27,
        length: 5,
      },
    ], month.format('YYYY-MM'));
    console.log(monthStart);
    console.log(result);
    expect(result).toEqual(expect.objectContaining({
      5: 'unavailable',
      6: 'unavailable',
      27: 'unavailable',
      28: 'unavailable',
      29: 'unavailable',
      30: 'unavailable',
    }));
  });
});
