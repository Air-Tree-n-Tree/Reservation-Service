const selecting = (state = 'checkin', action) => {
  switch (action.type) {
    case 'SET_CHECKINDAY':
      return 'checkout';
    default:
      return state;
  }
};

export default selecting;
