import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/Dashboard.css'; // Import the CSS file
import WeatherWidget from '../components/WeatherWidget';

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

      {/* Main Content */}
      <div className="container-fluid main-content">
        {/* Page Title */}
        <h1 className="page-title">Dashboard</h1>

        {/* Container Cards */}
        <div className="row">
            <WeatherWidget />
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">First Container</h5>
                <p className="card-text">This is the content of the first container.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Second Container</h5>
                <p className="card-text">This is the content of the second container.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Third Container</h5>
                <p className="card-text">This is the content of the third container.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
