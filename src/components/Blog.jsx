import {useState} from 'react';

const Blog = ({blog, increaseLike}) => {
  
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

const [showAll, setShowAll] = useState(false);

const onClick = () => {
setShowAll(!showAll)
}

  return (
    <div style={blogStyle}>
      <div> Title: 
      {blog.title} <button onClick={onClick} > {showAll ? 'hide' : 'view'} </button>
      </div>
      {showAll ? (<><div> url :
      {blog.url} 
      </div>
      <div>
        likes:
      {blog.likes}  <button onClick={increaseLike}> like</button>
      </div>
      <div>
        Author: 
      {blog.author} 
      </div> </>) : (<> </>)}

      
    </div>
  );
}

export default Blog;
