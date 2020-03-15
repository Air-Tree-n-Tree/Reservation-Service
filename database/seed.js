const mongoose = require('mongoose');
const Availability = require('./models/Availability');
const generateAvailability = require('./utils/generateAvailability');

mongoose.connect('mongodb://localhost/room-reservations', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    throw new Error('Failed to connect to mongo database: room-reservations');
  }
  console.log('Connected to mongo database: room-reservations');
});

const seedDatabase = () => {
  const docs = [];
  for (let i = 0; i < 100; i += 1) {
    docs.push(generateAvailability(i));
  }
  return Availability.create(docs);
};

Availability.deleteMany({}) // Clear the database
  .then(seedDatabase)
  .then(() => {
    console.log('Successfully seeded database');
  })
  .catch(console.err)
  .then(mongoose.disconnect);
