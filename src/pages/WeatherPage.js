import React from 'react';
import '../pages/css/Dashboard.css'; // Import the CSS file

import WeatherWidget from '../components/WeatherWidget';

const WeatherPage = () => {
    return (
        <div class="content">
            <WeatherWidget />
        </div>
    );
};

export default WeatherPage;
