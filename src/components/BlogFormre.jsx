import React, { useState } from 'react';
import { useAddNewBlogMutation } from '../reducers/api/apiSlice';

export default function BlogFormre() {



  const [addNewBlog, { isLoading }] = useAddNewBlogMutation();

  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: '',
    likes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('helloworld');
    try {
      if (Object.keys(newBlog).every(key => key !== '' && !isLoading)) {
        await addNewBlog(newBlog).unwrap();
      }
    }
    catch(err) {
      console.log(err);}

  };
  return (

    <form onSubmit={handleSubmit}>

      <p> Add blog</p>

      <div>
        <label htmlFor="title">title</label> <br />
        <input
          type="text"
          name="title"
          value={newBlog.title}
          onChange={handleInputChange}
          id="title-input"
        />{' '}
        <br />
      </div>

      <div>
        <label htmlFor="author">author</label> <br />
        <input
          type="text"
          name="author"
          value={newBlog.author}
          onChange={handleInputChange}
          id="author-input"
        />{' '}
        <br />
      </div>
      <div>
        <label htmlFor="url">url</label> <br />
        <input
          type="text"
          name="url"
          value={newBlog.url}
          onChange={handleInputChange}
          id="url-input"
        />{' '}
        <br />
      </div>
      <div>
        <label htmlFor="likes">likes</label> <br />
        <input
          type="number"
          name="likes"
          value={newBlog.likes}
          onChange={handleInputChange}
          id="likes-input"
        />{' '}
        <br />
      </div>

      <button> submit </button>
    </form>
  );
}