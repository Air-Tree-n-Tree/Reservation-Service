import requestAvailability from './requestAvailability';

jest.mock('./requestAvailability');

test('Should get availabilitiy data', (done) => {
  requestAvailability(0)
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
