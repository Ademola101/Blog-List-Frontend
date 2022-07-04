import React from 'react';

const Notification = ({error}) => {

  if (error === null) {
    return null
  }
  return (
    
    <div>
      {error}
    </div>
  );
}

export default Notification;
