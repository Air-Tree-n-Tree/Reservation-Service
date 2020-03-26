const mongoose = require('mongoose');
const Availability = require('./models/Availability');

mongoose.connect('mongodb://database:27017/room-reservations', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    console.log(err);
    throw new Error('Failed to connect to mongo database: room-reservations');
  }
  console.log('Connected to mongo database: room-reservations');
});

const getRoomAvailabilitiy = (roomId) => (
  Availability.findOne({ roomId }, '-reservations._id') // This projection omits the reservation UUID
);

module.exports = {
  getRoomAvailabilitiy,
};
