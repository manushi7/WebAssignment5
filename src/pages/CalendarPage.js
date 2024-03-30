import React from 'react';
import '../pages/css/Dashboard.css'; // Import the CSS file
import { Container, Card } from 'react-bootstrap';

import CalendarWidget from '../components/CalendarWidget';

const CalendarPage = () => {
    return (
        // <div className="content">
        //     <div className="container-fluid main-content">
        //         <h1 className="page-title">Calendar</h1>

        //         <div className="row">
        //             <div className="col">
        //                 <CalendarWidget />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="content">
            <CalendarWidget />    
        </div>
    );
};

export default CalendarPage;
