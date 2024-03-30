import React, { useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useAuthentication } from '../context/auth/AuthenticationContext';

const ProfilePage = () => {
    const { user } = useAuthentication();

    useEffect(() => {
        if (!user) {
            // Handle case when user is not logged in
        }
    }, [user]);

    return (
        <div className="content">
          <h1 className="page-title">Profile</h1>

          <div className="row">
            <div className="col">
              {user && (
                  <div>
                    <p>Email: {user.email}</p>
                  </div>
              )}
            </div>
          </div>
          </div>
    );
};

export default ProfilePage;
