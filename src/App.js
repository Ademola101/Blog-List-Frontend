import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Loginservices from './services/Login'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [noti, setNoti] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    url: "",
    likes: ""
  })

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
      
    )  
    console.log(user);
  }, [])
console.log(user);

  const newBlogSubmit = async (e) => {
    e.preventDefault()
   try {
   const returnBlog = await blogService.create(newBlog)
   console.log(returnBlog);
   setBlogs(blogs.concat(returnBlog))
   setNoti(`a new blog ${returnBlog.title} was added`);
   setTimeout(() => {
    setNoti(null)
   }, 5000)
   setNewBlog({
    title: "",
    author: "",
    url: "",
    likes: ""})
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
    setLoading(true)
    const loggeInUser = window.localStorage.getItem('userLoggedin');
    if (loggeInUser) {
      const user  = JSON.parse(loggeInUser)
      setUser(user)
      blogService.setToken(user.token)
    }
    setLoading(false)
  }, [])

  const LoginForm = () => (
    <div>
      

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
      <Notification error={noti}/>
      {user !== null ? (<> <div> {user.username} logged in</div> <div> {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )} </div>
      <BlogForm newBlog={newBlog}/> </>): (LoginForm())  }  
    </div>
  )
}

export default App
