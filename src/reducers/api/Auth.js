import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null
  },

  reducers: {
    setCredentials: (state, { payload: { username, token } }) => {
      state.user = username,
      state.token = token;
    },
    removeCredentials(state) {
      state.user = null;
      state.token = null;

    },
  },

});

export default authSlice.reducer;
export const { setCredentials, removeCredentials } = authSlice.actions;
export const { actions } = authSlice;