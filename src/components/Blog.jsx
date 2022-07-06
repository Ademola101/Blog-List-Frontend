import {useState} from 'react';

const Blog = ({blog}) => {

const [showAll, setShowAll] = useState(false);

const onClick = () => {
setShowAll(!showAll)
}

  return (
    <div>
      <div> Title: 
      {blog.title} <button onClick={onClick} > Show {showAll ? 'less' : 'details'} </button>
      </div>
      {showAll ? (<><div> url :
      {blog.url} 
      </div>
      <div>
        likes:
      {blog.likes} 
      </div>
      <div>
        Author: 
      {blog.author} 
      </div> </>) : (<> </>)}

      
    </div>
  );
}

export default Blog;
