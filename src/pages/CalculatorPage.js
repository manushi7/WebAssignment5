import React from 'react';
import '../pages/css/Dashboard.css'; // Import the CSS file

import CalculatorWidget from '../components/CalculatorWidget';

const CalculatorPage = () => {
    return (
            <div class="content">
                <div className="container-fluid main-content">
                    <h1 className="page-title">Calendar</h1>

                    <div className="row">
                        <div className="col">
                            <CalculatorWidget />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CalculatorPage;
