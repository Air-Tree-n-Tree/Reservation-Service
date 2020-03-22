const selection = (state = {
  checkinDate: null,
  checkoutDate: null,
  selecting: 'checkin',
}, action) => {
  const { type, checkinDate, checkoutDate } = action;
  switch (type) {
    case 'SET_CHECKINDAY':
      return {
        ...state,
        checkinDate,
        selecting: 'checkout',
      };
    case 'SET_CHECKOUTDAY':
      return {
        ...state,
        checkoutDate,
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
