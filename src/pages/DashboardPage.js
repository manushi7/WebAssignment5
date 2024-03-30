import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/Dashboard.css'; // Import the CSS file
import Sidebar from '../components/Sidebar';

const DashboardPage = () => {
    return (
        <div>
          {/* Navigation Bar */}
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <Link className="navbar-brand" to="/">Dashboard</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Sidebar />
        </div>
    );
};

export default DashboardPage;
