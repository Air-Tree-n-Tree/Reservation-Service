import axios from 'axios';

const domain = process.env.production ? '' : 'http://localhost:3000';

const fetchAvailability = (roomId) => (
  axios.get(`${domain}/api/reservations/${roomId}`)
);

export default fetchAvailability;
