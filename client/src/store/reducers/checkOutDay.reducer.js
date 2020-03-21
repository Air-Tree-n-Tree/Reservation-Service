const checkOutDay = (state = null, action) => {
  switch (action.type) {
    case 'SET_CHECKOUTDAY':
      return action.day;
    case 'SET_CHECKINDAY':
      return null;
    case 'CLEAR_CHECKOUTDAY':
      return null;
    case 'CLEAR_CHECKINDAY':
      return null;
    default:
      return state;
  }
};

export default checkOutDay;
