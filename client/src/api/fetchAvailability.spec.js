import fetchAvailability from './fetchAvailability';

jest.mock('./fetchAvailability');

test('Should fetch availabilitiy data', (done) => {
  fetchAvailability(0)
    .then(({ data }) => {
      expect(data).toBeDefined();
      expect(data).toStrictEqual(
        expect.objectContaining({
          minNights: expect.any(Number),
          maxNights: expect.any(Number),
          minGuests: expect.any(Number),
          maxGuests: expect.any(Number),
          maxInfants: expect.any(Number),
          reservations: expect.any(Array),
          pricesPerGuests: expect.any(Array),
        }),
      );
      done();
    })
    .catch((error) => {
      done(error);
    });
});
