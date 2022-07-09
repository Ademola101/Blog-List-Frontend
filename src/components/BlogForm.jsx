import { useState } from 'react'


const BlogForm = ({ createBlog }) => {

  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: '',
    likes: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewBlog({ ...newBlog, [name]: value })
  }

  const handleCreateBlog = (e) => {
    e.preventDefault()
    createBlog(newBlog.title, newBlog.author, newBlog.url, newBlog.likes)
    setNewBlog({ title: '',
      author: '',
      url: '',
      likes: '' })

  }
  return (
    <div>
      <form onSubmit={handleCreateBlog}>
        <p> Add blog</p>

        <div>

          <label htmlFor="title">title</label> <br />
          <input type="text" name="title" value={newBlog.title} onChange={handleInputChange} id = 'title-input'/>  <br />
        </div>

        <div>
          <label htmlFor="author">author</label> <br />
          <input type="text" name="author" value={newBlog.author} onChange={handleInputChange} id = 'author-input' />  <br />
        </div>
        <div>
          <label htmlFor="url">url</label> <br />
          <input type="text" name="url" value={newBlog.url} onChange={handleInputChange} id = 'url-input'/>  <br />
        </div>
        <div>
          <label htmlFor="likes">likes</label> <br />
          <input type="number" name="likes"  value={newBlog.likes} onChange={handleInputChange} id = 'likes-input'/>  <br />
        </div>

        <button> add blog</button>
      </form>


    </div>
  )
}

export default BlogForm
