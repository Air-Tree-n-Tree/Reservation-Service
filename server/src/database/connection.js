const mongoose = require('mongoose');

const domain = process.env.NODE_ENV === 'development' ? 'localhost' : 'database';

const start = () => (
  mongoose.connect(`mongodb://${domain}:27017/room-reservations`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to mongo database: room-reservations');
    })
    .catch((reason) => {
      console.log(reason);
      throw new Error('Failed to connect to mongo database: room-reservations');
    })
);

const stop = () => (
  mongoose.disconnect()
);

module.exports = {
  start,
  stop,
};
