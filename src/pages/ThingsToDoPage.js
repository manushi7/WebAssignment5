import React from 'react';
import '../pages/css/Dashboard.css'; // Import the CSS file
import { Container, Card } from 'react-bootstrap';

import ParkWidget from '../components/ParkWidget';

function ThingsTodoPage() {
    return (
        <Container className="mt-5">
          <h1 className="page-title">Things to do in US parks</h1>

          <div className="row">
            <div className="col">
              <ParkWidget />
            </div>
          </div>
        </Container>
    );
};

export default ThingsTodoPage;
