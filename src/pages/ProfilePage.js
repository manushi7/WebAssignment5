import React, { useEffect } from 'react';
import { useAuthentication } from '../context/auth/AuthenticationContext';

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
          {/* {user.displayName && <p>Name: {user.displayName}</p>} */}
        <ul>
          <li>Name: Manushi Khadka</li>
          <li>Role: Administrator</li>
          <li>Joined Date: January 1, 2023</li>
          <li>Last Login: March 15, 2023</li>
          <li>Status: Active</li>
        </ul>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
