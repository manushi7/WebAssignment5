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
            <div class="content">
              <div className="container-fluid main-content">
                <h1 className="page-title">Profile</h1>

                <div className="row">
                  <div className="col">
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
                </div>
              </div>
            </div>
    );
};

export default ProfilePage;
