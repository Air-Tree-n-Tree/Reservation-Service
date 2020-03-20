const checkInDay = (state = null, action) => {
  switch (action.type) {
    case 'SET_CHECKINDAY':
      return action.day;
    case 'CLEAR_CHECKINDAY':
      return null;
    default:
      return state;
  }
};

export default checkInDay;
