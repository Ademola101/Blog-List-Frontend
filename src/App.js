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

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const loginSubmit = async(e) => {
    e.preventDefault()
    try{
      const user = await Loginservices.login({username, password});
      setUser(user)
      window.localStorage.setItem('userLoggedin', JSON.stringify(user))
      setUsername('')
      setPassword('')
    }
    catch(error){
      setNoti('invalid usrname or password')
      

    }
  }

  useEffect(() => {
    const loggeInUser = window.localStorage.getItem('userLoggedin');
    if (loggeInUser) {
      const user  = JSON.parse(loggeInUser)
      setUser(user)
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
      
      {user !== null ?  ( <div> <div> {user.username} logged in</div>{blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )} </div>) : (LoginForm()) }
      
    </div>
  )
}

export default App
