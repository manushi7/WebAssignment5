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
          <Link className="nav-link" to="/calendar">Calendar</Link>
          <Link className="nav-link" to="/calculator">Calculator</Link>
          <Link className="nav-link" to="/things-to-do">Things to do</Link>
          <Link className="nav-link" to="/weather">Weather</Link>
          <Link className="nav-link" to="/profile">Profile</Link>
          <Link className="nav-link" to="/users">Users</Link>
          <Link className="nav-link" to="/login">LogOut</Link>
        </div>
    );
};

export default Sidebar;
