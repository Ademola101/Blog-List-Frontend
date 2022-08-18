import React, { useState } from 'react';
import { useLoginMutation } from '../reducers/api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials,removeCredentials } from '../reducers/api/Auth';



const LoginForm = () => {

  const dispatch = useDispatch();
  const authstate = useSelector(state => state.auth);
  console.log(authstate);
  const [login, { isLoading }] = useLoginMutation();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const userstate = await login(user).unwrap();
      console.log(userstate);
      dispatch(setCredentials(userstate));
    }
    catch (err) {
      console.log(err);
    }

  };
  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="username">Username </label> <br />
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">password</label> <br />
        <input
          type="password"
          name="password"
          value={user.password}
          id="password"
          onChange={handleInputChange}
        />{' '}
        <br />
        <button>login</button>
      </div>

    </form>
  );
};

export default LoginForm;
