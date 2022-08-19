import React from 'react';
import { useGetUserQuery } from '../reducers/api/apiSlice';
import { useParams } from 'react-router-dom';


export default function UserDetails() {
  const { isLoading, isError, error, data:users,isSuccess } = useGetUserQuery();

  const { id } = useParams();
  const user = users?.find(data => data.id === id);

  let content;
  if (isLoading) {
    content = <div>Loading</div>;
  }

  if (isSuccess) {
    content = user.blogs.map(blog => <li key={blog.id}>{blog.title}</li>);
  }

  if(!user) {
    content = null;
  }

  if (isError) {
    content = <div>{error.error.toString()}</div>;
  }
  return ( <div>
    <p>Added blogs</p>
    <section>
      <ul>
        {content}
      </ul>

    </section>
  </div>
  );
}