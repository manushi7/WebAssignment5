import React, { useEffect } from 'react';
import { useAuthentication } from '../views/AuthenticationContext';

const ProfilePage = () => {
  const { user } = useAuthentication();

  useEffect(() => {
    if (!user) {
      // Handle case when user is not logged in
    }
  }, [user]);

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>Email: {user.email}</p>
          {user.displayName && <p>Name: {user.displayName}</p>}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
