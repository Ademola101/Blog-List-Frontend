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
    } },
});

export default authSlice.reducer;
export const { setCredentials } = authSlice.actions;