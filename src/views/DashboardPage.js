import React, { useEffect } from 'react';
import { useAuthentication } from '../views/AuthenticationContext';

const DashboardPage = () => {
  const { user } = useAuthentication();

  useEffect(() => {
    if (!user) {
      
    }
  }, [user]);

  return (
    <div>
      <h2>Dashboard</h2>
      {user && (
        <div>
          <p>Welcome, {user.email}!</p>
          
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
