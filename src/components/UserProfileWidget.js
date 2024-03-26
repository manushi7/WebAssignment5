// components/UserProfileWidget.js
import React from 'react';

const UserProfileWidget = ({ user }) => {
  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfileWidget;
