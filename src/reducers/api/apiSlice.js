import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),

  endpoints: builder => ({
    getBlogs: builder.query({
      query: () => '/blog',

    }),
    addNewBlog: builder.mutation({
      query: initialBlog => ({
        url: '/blog',
        method: 'POST',
        body: initialBlog
      }),

    })
  })

});

export const { useGetBlogsQuery, useAddNewBlogMutation } = apiSlice;