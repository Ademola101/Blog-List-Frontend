import React from 'react';
import { useGetBlogsQuery } from '../reducers/api/apiSlice';
import BlogExcerpt from './BlogExcept';
export default function BlogsList() {

  const {
    data:blogs,
    isLoading,
    isSuccess,
    isError,
    error

  } = useGetBlogsQuery();
  console.log(error);
  let content;

  if(isLoading) {
    content = <div>Loading</div>;
  }

  else if(isSuccess) {
    content = blogs.map(blog => <BlogExcerpt key={blog.id} blog = {blog}/>);
  }
  else if(isError) {
    content = <div>{error.error.toString()}</div>;
  }
  return ( <>
    <div>BlogsList test</div>

    {content}
  </>
  );
}
