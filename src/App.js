import { useEffect } from 'react';
import Notification from './components/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { setCredentials } from './reducers/Auth/Auth';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BlogListPage from './Pages/BlogListPage';
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




  return (
    <div>
      <Menu/>
      <Notification />
      <h2>blogs</h2>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/blogs' element = {<BlogListPage/>}/>
      </Routes>

    </div>
  );
};

export default App;
