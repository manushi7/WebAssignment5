import React from 'react';
import '../pages/css/Dashboard.css'; // Import the CSS file
import { Container, Card } from 'react-bootstrap';

import CalendarWidget from '../components/CalendarWidget';

const CalendarPage = () => {
    return (
        <div className="content">
            <CalendarWidget />    
        </div>
    );
};

export default CalendarPage;
