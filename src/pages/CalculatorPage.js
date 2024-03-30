import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../pages/css/Dashboard.css'; // Import the CSS file

import CalculatorWidget from '../components/CalculatorWidget';

const CalculatorPage = () => {
    return (
        <Container className="mt-5">
          <h1 className="page-title">Calculator</h1>

          <div className="row">
            <div className="col">
              <CalculatorWidget />
            </div>
          </div>
        </Container>
    );
};

export default CalculatorPage;
