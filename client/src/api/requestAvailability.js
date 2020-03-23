import axios from 'axios';

const domain = process.env.production ? '' : 'http://localhost:3002';

const requestAvailability = (roomId) => (
  axios.get(`${domain}/api/reservations/${roomId}`)
);

export default requestAvailability;
