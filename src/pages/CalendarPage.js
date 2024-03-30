import React from 'react';
import '../pages/css/Dashboard.css'; // Import the CSS file

import CalendarWidget from '../components/CalendarWidget';

const CalendarPage = () => {
    return (
            <div class="content">
                <div className="container-fluid main-content">
                    <h1 className="page-title">Calendar</h1>

                    <div className="row">
                        <div className="col">
                            <CalendarWidget />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CalendarPage;
