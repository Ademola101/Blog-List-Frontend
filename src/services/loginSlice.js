import store from '../store';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const loginSlice = createApi({
  reducerPath: 'login',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {

      const token = store.getState().auth.token;
      if(token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials
      })
    }),
    protected: builder.mutation({
      query: 'protected'
    })
  })

});

export const { useLoginMutation, useProtectedMutation } = loginSlice;