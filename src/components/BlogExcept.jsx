import { useState } from 'react';
import { useDeleteBlogMutation, useUpdateBlogMutation } from '../reducers/api/apiSlice';
const BlogExcerpt = ({ blog }) => {

  const [updatePost, { isLoading: isUpdating }] = useUpdateBlogMutation();

  const increaseLike = (id) => {
    updatePost({
      variables: {

        id,
        likes: blog.likes + 1

      }
    }, {
      refetchQueries: [{ query: useGetBlogsQuery }]
    });

  };

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  };

  const [showAll, setShowAll] = useState(false);

  const onClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div style={blogStyle}>
      <div className="title">
        {' '}
        Title:
        {blog.title} <button onClick={onClick}> {showAll ? 'hide' : 'view'} </button>
      </div>
      {showAll ? (
        <div className="rest">
          <div> url :{blog.url}</div>
          <div>
            likes:
            {blog.likes} <button > like</button>
          </div>

          <div>
            Author:
            {blog.author}
          </div>
          <button onClick={() => deleteBlog(blog.id)}> Remove</button>
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
};



export default BlogExcerpt;
