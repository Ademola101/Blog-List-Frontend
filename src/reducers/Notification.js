import { createSlice } from '@reduxjs/toolkit';

const NotificationSlice = createSlice({

  name: 'notification',
  initialState: {
    message: null,
  },
  reducers: {
    setNotification: (state, action) => {
      state.message = action.payload;
    },

    removeNotification: (state) => {
      state.message = null;

    }

  }
});


export const { setNotification, removeNotification } = NotificationSlice.actions;
export default NotificationSlice.reducer;


export const createNotification = (message) => {
  return async dispatch => {
    dispatch(setNotification(message));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000); // 5 seconds
  };
};