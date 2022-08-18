import React, { useRef } from 'react';
import Togglable from '../components/Togglable';
import BlogFormre from '../components/BlogFormre';
import BlogsList from '../components/BlogsList';
import { removeCredentials } from '../reducers/Auth/Auth';
import { useDispatch } from 'react-redux';

const BlogListPage = () => {
  const dispatch = useDispatch();

  const logout = () => {
    window.localStorage.clear();

    dispatch(removeCredentials());

  };
  const BlogFormRef = useRef();
  return (
    <div>
      <button onClick={logout}> logout </button>
      <Togglable buttonLabel="Add new Note" ref={BlogFormRef}>
        {' '}
        <BlogFormre  />{' '}
      </Togglable>
      <BlogsList />
    </div>
  );
};

export default BlogListPage;
