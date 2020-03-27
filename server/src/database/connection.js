const mongoose = require('mongoose');

const start = () => {
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
};

const stop = () => {
  mongoose.disconnect();
};

module.exports = {
  start,
  stop,
};
