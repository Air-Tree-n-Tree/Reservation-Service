const constraints = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'FETCH_AVAILABILITY':
      return {
        minNights: data.minNights,
        maxNights: data.maxNights,
      };
    default:
      return state;
  }
};

export default constraints;
