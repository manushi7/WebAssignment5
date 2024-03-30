import React from 'react';
import '../pages/css/Dashboard.css'; // Import the CSS file
import { Container, Card } from 'react-bootstrap';

import ParkWidget from '../components/ParkWidget';

function ThingsTodoPage() {
    return (
        <div className="content">
          <h1 className="page-title">Things to do in US parks</h1>

          <div className="row">
            <div className="col">
              <ParkWidget />
            </div>
          </div>
        </div>
    );
};

export default ThingsTodoPage;
