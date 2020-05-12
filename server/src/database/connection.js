import mongoose from 'mongoose';

const start = () => (
  mongoose.connect(
    `mongodb://${process.env.NODE_ENV === 'development' ? 'localhost' : 'database'}:27017/room-reservations`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
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

export default {
  start,
  stop,
};
