import requestAvailability from '../../api/requestAvailability';

const fetchAvailability = (roomId) => (
  (dispatch) => {
    requestAvailability(roomId)
      .then(({ data }) => {
        dispatch({
          type: 'FETCH_AVAILABILITY',
          data,
        });
      })
      .catch(console.err);
  }
);

export default fetchAvailability;
