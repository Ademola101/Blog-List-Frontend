import { useState } from 'react'
import { PropTypes } from 'prop-types'
const Blog = ({ blog, increaseLike, deleteBlog }) => {

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [showAll, setShowAll] = useState(false)

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
      </div>
      <button onClick={deleteBlog}> Remove</button></>) : (<> </>)}


    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  increaseLike: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired
}

export default Blog
