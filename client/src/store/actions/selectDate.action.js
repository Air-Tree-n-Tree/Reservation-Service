const selectDate = (date) => (
  (dispatch, getState) => {
    const { selecting } = getState().dates.selection;
    dispatch({
      type: selecting === 'checkin' ? 'SET_CHECKINDATE' : 'SET_CHECKOUTDATE',
      date,
    });
  }
);

export default selectDate;
