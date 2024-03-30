import React from 'react';

import { Link } from 'react-router-dom';
import { useAuthentication } from '../context/auth/AuthenticationContext';

function Sidebar() {
    const { logout } = useAuthentication();
    
    function signOutUser() {
        logout()
    }
    
    return (
        <div className="sidebar">
          <Link className="nav-link" to="/profile">Profile</Link>
          <Link className="nav-link" to="/users">Users</Link>
          <Link className="nav-link" to="/calendar">Calendar</Link>
          <Link className="nav-link" to="/calculator">Calculator</Link>
          <Link className="nav-link" to="/things-to-do">Things to do</Link>
          <div className="nav-item">
            <button className="btn btn-link" onClick={signOutUser}>Log Out</button>
          </div>
        </div>
    );
};

export default Sidebar;
