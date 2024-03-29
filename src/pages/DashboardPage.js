import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/Dashboard.css'; // Import the CSS file
import WeatherWidget from '../components/WeatherWidget';
import DogWidget from '../components/DogWidget';
import ParkWidget from '../components/ParkWidget';
import CalculatorWidget from '../components/CalculatorWidget';
import CalendarWidget from '../components/CalendarWidget';

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
              <div className="col">
                <WeatherWidget />
              </div>
              <div className="col">
                <DogWidget />
              </div>
              <div className="col">
                <ParkWidget />
              </div>
            </div>
            <div className="col">
              <CalculatorWidget />
            </div>
            <div className="col">
              <CalendarWidget />
            </div>
          </div>
        </div>
    );
};

export default DashboardPage;
