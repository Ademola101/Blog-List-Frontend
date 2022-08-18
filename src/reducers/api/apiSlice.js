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
    deleteBlog: builder.mutation({
      query: id => ({
        url: `/blog/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Blog']

    }),
    addNewBlog: builder.mutation({
      query: initialBlog => ({
        url: '/blog',
        method: 'POST',
        body: initialBlog
      }),
      invalidatesTags: ['Blog']
    }),

    updateBlog: builder.mutation({
      query: (id, newObject) => ({
        url: `/blog/${id}`,
        method: 'PUT',
        body: newObject
      }),
    })
  })

});



export const { useLoginMutation, useGetBlogsQuery, useAddNewBlogMutation, useDeleteBlogMutation,useUpdateBlogMutation }  = apiSlice;