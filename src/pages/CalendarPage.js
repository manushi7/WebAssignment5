import React from 'react';
import '../pages/css/Dashboard.css'; // Import the CSS file
import { Container, Card } from 'react-bootstrap';

import CalendarWidget from '../components/CalendarWidget';

const CalendarPage = () => {
    return (
        <Container className="mt-5">
          <h1 className="page-title">Calendar</h1>

          <div className="row">
            <div className="col">
              <CalendarWidget />
            </div>
          </div>
        </Container>
    );
};

export default CalendarPage;
