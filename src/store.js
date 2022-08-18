import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './reducers/api/apiSlice';
import AuthReducer, { actions } from './reducers/api/Auth';

export const store = configureStore({
  reducer: {

    [apiSlice.reducerPath] : apiSlice.reducer,
    auth: AuthReducer,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware, )
});

export const  storeState = store.getState();
console.log(storeState);
console.log(actions);

