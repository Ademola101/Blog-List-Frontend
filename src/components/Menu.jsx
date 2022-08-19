import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="/blogs"> Blogs</Link>
      <Link to= '/users'> User </Link>
    </div>


  );
};

export default Menu;
