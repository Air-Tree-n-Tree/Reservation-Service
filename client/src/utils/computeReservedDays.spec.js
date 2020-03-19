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
        startDate: monthStart + 22,
        length: 4,
      },
    ], month.format('YYYY-MM'));
    expect(result).toEqual(expect.objectContaining({
      5: 'unavailable',
      6: 'unavailable',
      22: 'unavailable',
      23: 'unavailable',
      24: 'unavailable',
      25: 'unavailable',
    }));
  });

  it('should compute inter-month reservations', () => {
    const monthStart = month.diff(moment('2000-01-01'), 'days');
    const result = computeReservedDays([
      {
        startDate: monthStart - 3,
        length: 5,
      },
      {
        startDate: monthStart + 29,
        length: 4,
      },
    ], month.format('YYYY-MM'));
    expect(result).toEqual(expect.objectContaining({
      0: 'unavailable',
      1: 'unavailable',
      29: 'unavailable',
      30: 'unavailable',
    }));
    expect(result).not.toHaveProperty('-1', expect.anything());
    expect(result).not.toHaveProperty('31', expect.anything());
  });

  it('should ignore irrelevant reservations', () => {
    const monthStart = month.diff(moment('2000-01-01'), 'days');
    const result = computeReservedDays([
      {
        startDate: monthStart - 20,
        length: 2,
      },
      {
        startDate: monthStart - 15,
        length: 2,
      },
      {
        startDate: monthStart - 10,
        length: 2,
      },
      {
        startDate: monthStart - 2,
        length: 1,
      },
      {
        startDate: monthStart + month.daysInMonth(),
        length: 5,
      },
    ], month.format('YYYY-MM'));
    expect(result).toEqual(expect.not.arrayContaining(['unavailable']));
  });
});
