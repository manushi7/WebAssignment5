import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../components/css/WeatherWidget.css'; // Import custom CSS file
import { useWeather } from '../hooks'

const WeatherWidget = () => {
    const { weatherInfo, refreshWeatherInfo, errorMessage } = useWeather()
    const [city, setCity] = useState("Barrie");

    useEffect(() => {
        if (city) {
            refreshWeatherInfo(city);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        refreshWeatherInfo(city);
    };

    return (
        <Container className="widget-container mt-5">
          <h2 className="widget-title text-center">Weather Widget</h2>
          <Form onSubmit={handleSubmit} className="mb-3">
            <Form.Group>
              <Form.Control type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">Search</Button>
          </Form>
          {weatherInfo && (
              <Card>
                <Card.Body>
                  <Card.Title>{weatherInfo.location.name}</Card.Title>
                  <Card.Text>Weather: {weatherInfo.current.condition.text}</Card.Text>
                  <Card.Text>Temperature: {weatherInfo.current.temp_c}°C</Card.Text>
                  <Card.Text>Humidity: {weatherInfo.current.humidity}%</Card.Text>
                </Card.Body>
              </Card>
          )}
          {errorMessage && <p className="error-message text-danger">{errorMessage}</p>}
        </Container>
    );
};

export default WeatherWidget;
