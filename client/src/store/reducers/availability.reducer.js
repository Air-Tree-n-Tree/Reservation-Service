const availability = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_AVAILABILITY':
      return action.data;
    default: return state;
  }
};

export default availability;
