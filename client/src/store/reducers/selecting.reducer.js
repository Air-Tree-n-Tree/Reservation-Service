const selecting = (state = 'checkin', action) => {
  switch (action.type) {
    case 'SET_CHECKINDAY':
      return 'checkout';
    case 'SET_CHECKOUTDAY':
      return 'checkin';
    default:
      return state;
  }
};

export default selecting;
