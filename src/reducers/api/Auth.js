import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null
  },

  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user,
      state.token = token;
    } },
});

export default authSlice.reducer;
export const { setCredentials } = authSlice.actions;