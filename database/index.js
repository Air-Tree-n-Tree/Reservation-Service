const connection = require('./connection');

connection.start();

const Availability = require('./models/Availability');

const getRoomAvailabilitiy = (roomId) => (
  Availability.findOne({ roomId }, '-reservations._id') // This projection omits the reservation UUID
);

module.exports = {
  getRoomAvailabilitiy,
};
