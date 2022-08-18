import { useEffect, useRef } from 'react';
import Notification from './components/Notification';
import Togglable from './components/Togglable';
import LoginForm from './components/LoginForm';
import BlogsList from './components/BlogsList';
import BlogFormre from './components/BlogFormre';
import { useSelector, useDispatch } from 'react-redux';
import { removeCredentials, setCredentials } from './reducers/Auth/Auth';
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
  const BlogFormRef = useRef();


  const logout = () => {
    window.localStorage.clear();

    dispatch(removeCredentials());

  };

  return (
    <div>
      <h2>blogs</h2>
      <Notification />
      {user === null ? (
        <LoginForm />
      ) : (
        <>
          {' '}
          <div> {user.username} logged in</div> <button onClick={logout}> logout </button>
          <Togglable buttonLabel="Add new Note" ref={BlogFormRef}>
            {' '}
            <BlogFormre  />{' '}
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
