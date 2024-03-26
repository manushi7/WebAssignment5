import React, { useEffect } from 'react';
import { useAuthentication } from '../views/AuthenticationContext';

const ProfilePage = () => {
  const { user } = useAuthentication();

  useEffect(() => {
    if (!user) {
      
    }
  }, [user]);

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
