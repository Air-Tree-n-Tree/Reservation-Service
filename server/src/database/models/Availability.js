const mongoose = require('mongoose');

const { Schema } = mongoose;

const availabilitySchema = new Schema({
  roomId: String,
  minNights: { type: Number, default: 1 },
  maxNights: Number,
  minGuests: { type: Number, default: 1 },
  maxGuests: Number,
  maxInfants: Number,
  pricesPerGuests: [Number],
  reservations: [
    {
      startDate: Number,
      length: Number,
    },
  ],
});

const Availability = mongoose.model('availability', availabilitySchema);

module.exports = Availability;
