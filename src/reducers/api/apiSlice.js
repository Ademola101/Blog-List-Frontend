import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Blog'],
  endpoints: builder => ({
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
    })
  })

});

export const { useGetBlogsQuery, useAddNewBlogMutation } = apiSlice;