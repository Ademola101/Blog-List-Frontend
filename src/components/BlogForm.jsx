import React from 'react';

const BlogForm = ({newBlog, onSubmit, handleTitleChange,
   handleAuthorChange, handleUrlChange, logout, handleLikeChange}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <p> Add blog</p>

      <div>

      <label htmlFor="title">title</label> <br />
      <input type="text" name="title" value={newBlog.title} onChange={handleTitleChange} />  <br />
      </div>
  
      <div>
      <label htmlFor="author">author</label> <br />
      <input type="text" name="author" value={newBlog.author} onChange={handleAuthorChange} />  <br />
      </div>
      <div>
      <label htmlFor="url">url</label> <br />
      <input type="text" name="url" value={newBlog.url} onChange={handleUrlChange} />  <br />
      </div>
      <div>
      <label htmlFor="likes">likes</label> <br />
      <input type="number" name="likes"  value={newBlog.likes} onChange={handleLikeChange}/>  <br />
      </div>

      <button> add blog</button>
      </form>
      <button onClick={logout}>logout</button>
      
    </div>
  );
}

export default BlogForm;
