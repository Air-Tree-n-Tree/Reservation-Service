import connection from './connection';
import Availability from './models/Availability';

connection.start();

const getRoomAvailabilitiy = (roomId) => (
  Availability.findOne({ roomId }, '-reservations._id') // This projection omits the reservation UUID
);

export default {
  getRoomAvailabilitiy,
};
