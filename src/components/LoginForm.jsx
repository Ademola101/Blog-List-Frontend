import React from 'react';

const LoginForm = ({ username, setUsername, password, setPassword, onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>

      <div>
        <label htmlFor="username">Username </label> <br />
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">password</label> <br />
        <input
          type="password"
          name="password"
          value={password}
          id="password"
          onChange={({ target }) => setPassword(target.value)}
        />{' '}
        <br />
        <button>login</button>
      </div>

    </form>
  );
};

export default LoginForm;
