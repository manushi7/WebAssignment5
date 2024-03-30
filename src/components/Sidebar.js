import React from 'react';

import WeatherWidget from '../components/WeatherWidget';
import DogWidget from '../components/DogWidget';
import ParkWidget from '../components/ParkWidget';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    
    return (
        <div>
            <div class="sidebar">
                <Link className="nav-link" to="/calendar">Calendar</Link>
                <Link className="nav-link" to="/calculator">Calculator</Link>
                <Link className="nav-link" to="#todolist">Todo List</Link>
                <Link className="nav-link" to="#weather">Weather</Link>
                <Link className="nav-link" to="#logout">LogOut</Link>
            </div>

            <div class="content">
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
        </div>
    );
};

export default Sidebar;