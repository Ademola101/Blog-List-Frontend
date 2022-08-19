import { useEffect } from 'react';
import Notification from './components/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { setCredentials } from './reducers/Auth/Auth';
import Menu from './components/Menu';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import BlogListPage from './Pages/BlogListPage';
import User from './Pages/User';
import LoginForm from './components/LoginForm';
import UserDetails from './Pages/UserDetails';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const loggeInUser = window.localStorage.getItem('loggedinUser');
    if (loggeInUser) {
      console.log('loggeInUser', loggeInUser);

      dispatch(setCredentials(JSON.parse(loggeInUser)));

    }
  }, []);
  const user = useSelector(state => state.auth.user);
  console.log(Boolean(user));




  return (
    <div>
      <Menu/>
      <Notification />
      <h2>blogs</h2>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/blogs' element = {user !== null || user === undefined || user ?  <BlogListPage/> :
          <Navigate replace to = '/login'/>}/>
        <Route path='/login' element = {<LoginForm/>}/>
        <Route path='/users' element = { user ? <User/> : <Navigate replace to = '/login'/>}/>
        <Route path={'/users/:id'} element = {<UserDetails/>}/>

      </Routes>

    </div>
  );
};

export default App;
