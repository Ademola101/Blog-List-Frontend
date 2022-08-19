import React from 'react';
import { Link } from 'react-router-dom';

export default function UserNames({ name, data }) {
  return (


    <div>
      <Link to= {`/users/${data}`}>
        {name}
      </Link>
    </div>

  );
}
