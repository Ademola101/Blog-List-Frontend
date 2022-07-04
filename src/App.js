import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Loginservices from './services/Login'
import Notification from './components/Notification'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [noti, setNoti] = useState(null)
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    url: "",
    likes: null
  })

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])


  const newBlogSubmit = async (e) => {
    e.preventDefault()
   try {
   const returnBlog = await blogService.create(newBlog)
   console.log(returnBlog);
   setBlogs(blogs.concat(returnBlog))
   console.log(blogs);
   setNewBlog({
    title: "",
    author: "",
    url: "",
    likes: null})
   }

   catch(error) {
    setNoti('serror saving')
   }
  }

  const loginSubmit = async(e) => {
    e.preventDefault()
    try{
      const user = await Loginservices.login({username, password});
      blogService.setToken(user.token)
      setUser(user)
      window.localStorage.setItem('userLoggedin', JSON.stringify(user))
      setUsername('')
      setPassword('')
    }
    catch(error){
      setNoti('invalid usrname or password')
      setTimeout(() => {
        setNoti(null)
      }, 5000);

    }
  }

  const logout = () => {
    window.localStorage.clear()
    setUser(null)
  }

  useEffect(() => {
    const loggeInUser = window.localStorage.getItem('userLoggedin');
    if (loggeInUser) {
      const user  = JSON.parse(loggeInUser)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const LoginForm = () => (
    <div>
      <Notification error={noti}/>
      <form onSubmit={loginSubmit}>

<div>
  <label htmlFor="username">Username </label> <br />
  <input type="text" name="username" value={username} onChange = {({target}) => setUsername(target.value)}/>
</div>
<div>
  <label htmlFor="password">password</label> <br />
  <input type="password" name="password" value={password} onChange = {({target}) => setPassword(target.value)}/>  <br />
  <button>
    login
  </button>
</div>
      </form>
    </div>
  )
  return (
    <div>
      <h2>blogs</h2>
      
      {user !== null ?  (<> <div> {user.username} logged in</div> <div> {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )} </div>
      <form onSubmit={newBlogSubmit}>
        <p> Add blog</p>

      <div>

      <label htmlFor="title">title</label> <br />
      <input type="text" name="title" value={newBlog.title} onChange={({target}) => setNewBlog({...newBlog, title: target.value})} />  <br />
      </div>
  
      <div>
      <label htmlFor="author">author</label> <br />
      <input type="text" name="author" value={newBlog.author} onChange={({target}) => setNewBlog({...newBlog, author: target.value})} />  <br />
      </div>
      <div>
      <label htmlFor="url">url</label> <br />
      <input type="text" name="url" value={newBlog.url} onChange={({target}) => setNewBlog({...newBlog, url: target.value})} />  <br />
      </div>
      <div>
      <label htmlFor="likes">likes</label> <br />
      <input type="number" name="likes"  value={newBlog.likes} onChange={({target}) => setNewBlog({...newBlog, likes: target.value})}/>  <br />
      </div>

      <button> add blog</button>
      </form>
      <button onClick={logout}>logout</button>
      </>)  : (LoginForm()) }
      
    </div>
  )
}

export default App
