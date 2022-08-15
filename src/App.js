import { useState, useEffect, useRef } from 'react';
import blogService from './services/blogs';
import Loginservices from './services/Login';
import Notification from './components/Notification';
import Togglable from './components/Togglable';
import LoginForm from './components/LoginForm';
import BlogsList from './components/BlogsList';
import BlogForm from './components/BlogForm';
const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [noti, setNoti] = useState(null);

  useEffect(() => {
    const loggeInUser = window.localStorage.getItem('userLoggedin');
    if (loggeInUser) {
      const user = JSON.parse(loggeInUser);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);
  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
    console.log(user);
    console.log(blogs);
  }, []);

  const BlogFormRef = useRef();

  // const deleteBlog = async (id) => {
  //   const blog = blogs.find((blog) => blog.id === id);
  //   if (window.confirm(`Remove blog  ${blog.title}! by ${blog.author}`)) {
  //     try {
  //       await blogService.remove(id);
  //       const updatedBlog = blogs.filter((blog) => blog.id !== id);
  //       setBlogs(updatedBlog);
  //     } catch (e) {
  //       setNoti('Unauthorize');

  //       setTimeout(() => {
  //         setNoti(null);
  //       }, 5000);
  //     }
  //   }
  // };

  // const increaseLike = async (id) => {
  //   const blog = blogs.find((blog) => blog.id === id);

  //   const blogLike = blog.likes;
  //   const changeBlog = { ...blog, likes: blogLike + 1 };
  //   const returnedBlog = await blogService.update(id, changeBlog);
  //   setBlogs(blogs.map((blog) => (blog.id !== id ? blog : returnedBlog)));
  // };
  // // const newBlogSubmit = async (title, author, url, likes) => {
  //   try {
  //     const returnBlog = await blogService.create({
  //       title,
  //       author,
  //       url,
  //       likes
  //     });
  //     console.log(returnBlog);
  //     setBlogs(blogs.concat(returnBlog));
  //     BlogFormRef.current.toggleVisibility();
  //     setNoti(`a new blog ${returnBlog.title} was added`);
  //     setTimeout(() => {
  //       setNoti(null);
  //     }, 5000);
  //   } catch (error) {
  //     setNoti('serror saving');
  //   }
  // };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await Loginservices.login({ username, password });
      blogService.setToken(user.token);
      setUser(user);
      window.localStorage.setItem('userLoggedin', JSON.stringify(user));
      setUsername('');
      setPassword('');
    } catch (error) {
      setNoti('invalid usrname or password');
      setTimeout(() => {
        setNoti(null);
      }, 5000);
    }
  };

  const logout = () => {
    window.localStorage.clear();
    setUser(null);
  };

  return (
    <div>
      <h2>blogs</h2>
      <Notification error={noti} />
      {user === null ? (
        <LoginForm onSubmit={loginSubmit} username = {username} setPassword = {setPassword} setUsername = {setUsername}/>
      ) : (
        <>
          {' '}
          <div> {user.username} logged in</div> <button onClick={logout}> Logout </button>
          <Togglable buttonLabel="Add new Note" ref={BlogFormRef}>
            {' '}
            <BlogForm  />{' '}
          </Togglable>
          <div>
            {' '}
            <BlogsList/>
            {' '}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
