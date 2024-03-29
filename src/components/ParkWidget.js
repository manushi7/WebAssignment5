import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../components/css/ParkWidget.css'; // Import custom CSS file
import { usePark } from '../hooks'

const ParkWidget = () => {
    const { thingsToDo, refreshParkInfo, errorMessage } = usePark()
    const [stateCode, setStateCode] = useState('AL');

    useEffect(() => {
        if (stateCode) {
            refreshParkInfo(stateCode);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        refreshParkInfo(stateCode);
    };

    return (
        <Container className="park--widget-container mt-5">
          <h2 className="park--widget-title text-center">Things to do at US State Parks</h2>
          <Form onSubmit={handleSubmit} className="mb-3">
            <Form.Group>
              <Form.Control type="text" placeholder="Enter state code" value={stateCode} onChange={(e) => setStateCode(e.target.value.toUpperCase())} required />
            </Form.Group>
            <Button variant="primary" type="submit">Search</Button>
          </Form>
          {thingsToDo.length > 0 && (
              <div>
                {thingsToDo.map(activity => (
                    <Card key={activity.id} className="mb-3">
                      <Card.Body>
                        <Card.Title>{activity.title}</Card.Title>
                        <Card.Text>{activity.shortDescription}</Card.Text>
                      </Card.Body>
                    </Card>
                ))}
              </div>
          )}
          {errorMessage && <p className="park--error-message text-danger">{errorMessage}</p>}
        </Container>
    );
};

export default ParkWidget;
