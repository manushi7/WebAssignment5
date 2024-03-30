import React from 'react';
import '../pages/css/Dashboard.css'; // Import the CSS file

import WeatherWidget from '../components/WeatherWidget';
import DogWidget from '../components/DogWidget';
import ParkWidget from '../components/ParkWidget';

const DashboardPage = () => {
    return (
            <div className="content">
                <div className="container-fluid main-content">
                    <h1 className="page-title">Dashboard</h1>

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
                </div>
            </div>
    );
};

export default DashboardPage;
