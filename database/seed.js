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
  const seeds = [];
  for (let i = 0; i < 100; i += 1) {
    seeds.push(new Promise((resolve, reject) => {
      generateAvailability(i).save()
        .then(resolve)
        .catch(reject);
    }));
  }
  return Promise.all(seeds);
};

Availability.deleteMany({}) // Clear the database
  .then(seedDatabase)
  .then(() => {
    console.log('Successfully seeded database');
  })
  .catch(console.err)
  .then(mongoose.disconnect);
