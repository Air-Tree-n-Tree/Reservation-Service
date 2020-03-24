import axios from 'axios';

const domain = process.env.development ? 'http://localhost:3002' : '';

const requestAvailability = (roomId) => (
  axios.get(`${domain}/api/reservations/${roomId}`)
);

export default requestAvailability;
