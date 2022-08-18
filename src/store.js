import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './reducers/api/apiSlice';
import AuthReducer from './reducers/Auth/Auth';
import NotificationReducer from './reducers/Notification';

export const store = configureStore({
  reducer: {

    [apiSlice.reducerPath] : apiSlice.reducer,
    auth: AuthReducer,
    notification: NotificationReducer

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware, )
});

export const  storeState = store.getState();

