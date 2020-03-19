import fetchAvailability from './fetchAvailability.action';

jest.mock('../../api/requestAvailability');

describe('Fetch Availability action creator', () => {
  it('should return a function', () => {
    expect(fetchAvailability()).toStrictEqual(expect.any(Function));
  });
  it('should fetch availabilities', (done) => {
    const dispatch = jest.fn();
    fetchAvailability(0)(dispatch);
    // TODO: async/await function requires babel-polyfill
    // Set-timeout is a temporary solution
    setTimeout(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: 'FETCH_AVAILABILITY',
        data: expect.any(Object),
      });
      done();
    }, 1000);
  });
});
