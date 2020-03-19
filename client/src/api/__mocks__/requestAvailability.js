import mockAvailability from './mockAvailability.json';

const fetchAvailability = (roomId) => (
  new Promise((resolve, reject) => {
    process.nextTick(() => {
      if (Number(roomId) < 100 && Number(roomId) >= 0) {
        resolve({ data: mockAvailability });
      } else {
        reject(new Error(`Room ID ${roomId} not found`));
      }
    });
  })
);

export default fetchAvailability;
