import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './reducers/api/apiSlice';
import AuthReducer from './reducers/api/Auth';
export const store = configureStore({
  reducer: {

    [apiSlice.reducerPath] : apiSlice.reducer,
    auth: AuthReducer,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware, )
});

export const  storeState = store.getState();
