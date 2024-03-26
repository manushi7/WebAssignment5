// components/UserListComponent.js
import React from 'react';

const UserListComponent = ({ users }) => {
  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserListComponent;
