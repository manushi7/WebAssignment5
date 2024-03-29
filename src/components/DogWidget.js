import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../components/css/DogWidget.css'; // Import custom CSS file
import { useDogBreed } from '../hooks'

const API_KEY = "live_9FzuR02PQTRO7Z3HIRzOstLHwrQQlil95jsWSJchKbnxutUnKgSfnu5mRfFkh1oX"

const DogWidget = () => {
    const { dogInfo, refreshDogInfo, errorMessage } = useDogBreed()
    const [breed, setBreed] = useState("Basset Hound");

    useEffect(() => {
        if (breed) {
            refreshDogInfo(breed);
        }
    }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    refreshDogInfo(breed);
  };

  return (
    <Container className="widget-container mt-5">
      <h2 className="widget-title text-center">Dog Widget</h2>
      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group>
          <Form.Control type="text" placeholder="Enter breed" value={breed} onChange={(e) => setBreed(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">Search</Button>
      </Form>
      {dogInfo && (
        <Card>
          <Card.Img variant="top" src={dogInfo.url} alt={breed} />
          <Card.Body>
            <Card.Title>{breed}</Card.Title>
          </Card.Body>
        </Card>
      )}
      {errorMessage && <p className="error-message text-danger">{errorMessage}</p>}
    </Container>
  );
};

export default DogWidget;
