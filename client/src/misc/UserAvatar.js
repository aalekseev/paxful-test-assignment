import React from 'react';
import './UserAvatar.scss';

const UserAvatar = ({src}) => {
  return (
    <div className="avatar">
      <img src={src} alt="User avatar" />
    </div>
  )
};

export default UserAvatar;
