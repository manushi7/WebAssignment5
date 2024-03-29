import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useWeather } from '../hooks'

const WeatherWidget = () => {
    const { weatherInfo, refreshWeatherInfo, errorMessage } = useWeather("barrie")
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    refreshWeatherInfo(city);
  };

  return (
<Container className="mt-5">
      <h2 className="mb-4 text-center">Weather Widget</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-end justify-content-center">
          <Col xs={12} md={6}>
            <Form.Control type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} required />
          </Col>
          <Col xs={12} md={3} className="mt-3 mt-md-0">
            <Button type="submit" className="w-100"><FontAwesomeIcon icon={faSearch} /> Search</Button>
          </Col>
        </Row>
      </Form>
      {weatherInfo && (
        <Card className="mt-4">
          <Card.Body>
            <h3 className="mb-3"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />{weatherInfo.name}</h3>
            <h5 className="mb-3">{weatherInfo.weather[0].main}</h5>
            <p className="mb-1">Temperature: {weatherInfo.main.temp}°C</p>
            <p className="mb-1">Humidity: {weatherInfo.main.humidity}%</p>
          </Card.Body>
        </Card>
      )}
      {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
    </Container>
  );
};

export default WeatherWidget;
