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
        <Container className="mt-5">
          <h1 className="page-title">Profile</h1>

          <div className="row">
            <div className="col">
              {user && (
                  <div>
                    <p>Email: {user.email}</p>
                    <ul>
                      <li>Role: Administrator</li>
                      <li>Joined Date: March 25, 2023</li>
                      <li>Last Login: March 29, 2023</li>
                      <li>Status: Active</li>
                    </ul>
                  </div>
              )}
            </div>
          </div>
        </Container>
    );
};

export default ProfilePage;
