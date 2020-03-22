const selection = (state = {
  checkinDate: null,
  checkoutDate: null,
  selecting: 'checkin',
}, action) => {
  const { type, date } = action;
  switch (type) {
    case 'SET_CHECKINDATE':
      return {
        ...state,
        checkinDate: date,
        selecting: 'checkout',
      };
    case 'SET_CHECKOUTDATE':
      return {
        ...state,
        checkoutDate: date,
        selecting: 'checkin',
      };
    case 'CLEAR_DATES':
      return {
        checkinDate: null,
        checkoutDate: null,
        selecting: 'checkin',
      };
    default:
      return state;
  }
};

export default selection;
