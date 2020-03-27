import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap';

interface VenueProps {
  name: string;
  rating: number;
  image: string;
  key: number;
  category: string;
}

function Venue(props: VenueProps) {
  return (
    <div className="Venue" key={props.key}>
      <br></br>
      <Row>
        <Col>
            <Card>
              <Card.Img variant="top" src={props.image} alt="Image not found" />
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.rating} out of 5 stars</Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </div>
  );
}
export type {VenueProps};
export { Venue };
