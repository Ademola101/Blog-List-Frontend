import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers, { getState }) => {

      const token = (getState()).auth.token;
      if(token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    } }),
  tagTypes: ['Blog'],
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials
      })
    }),
    getBlogs: builder.query({
      query: () => '/blog',
      providesTags: ['Blog']
    }),
    addNewBlog: builder.mutation({
      query: initialBlog => ({
        url: '/blog',
        method: 'POST',
        body: initialBlog
      }),
      invalidatesTags: ['Blog']
    }),

    protected: builder.mutation({
      query: 'protected'
    })
  })

});

export const { useLoginMutation, useGetBlogsQuery, useAddNewBlogMutation }  = apiSlice;