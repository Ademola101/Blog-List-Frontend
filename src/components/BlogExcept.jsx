import { useState } from 'react';
const BlogExcerpt = ({ blog }) => {
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
          <button > Remove</button>
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
};



export default BlogExcerpt;
