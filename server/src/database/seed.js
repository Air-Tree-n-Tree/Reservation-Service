const readline = require('readline');

const connection = require('./connection');
const Availability = require('./models/Availability');
const generateAvailability = require('./utils/generateAvailability');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const seedDatabase = (days) => {
  const docs = [];
  for (let i = 0; i < 100; i += 1) {
    docs.push(generateAvailability(i, days));
  }
  return Availability.create(docs);
};

connection.start()
  .then(() => {
    rl.question('How many days to seed? (120) ', (days) => {
      Availability.deleteMany({}) // Clear the database
        .then(() => (seedDatabase(Math.floor(Number(days)) || 120)))
        .then(() => {
          console.log('Successfully seeded database');
        })
        .catch(console.err)
        .then(connection.stop)
        .then(() => rl.close());
    });
  });
