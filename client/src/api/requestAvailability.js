import axios from 'axios';

const requestAvailability = (roomId) => {
  const domain = window.env === 'development' ? 'http://localhost:3002' : '';
  return axios.get(`${domain}/api/reservations/${roomId}`);
};

export default requestAvailability;
