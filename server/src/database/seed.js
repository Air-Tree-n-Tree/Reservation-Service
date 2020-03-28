const connection = require('./connection');
const Availability = require('./models/Availability');
const generateAvailability = require('./utils/generateAvailability');

connection.start();

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
  .then(connection.stop);
