import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

interface VenueProps {
  name: string;
  rating: number;
  key: number;
}

function Venue(props: VenueProps) {
  return (
    <div key={props.key}>
      <br></br>
      <div className="row">
        <div className="col">
          <div className="Venue">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.rating} out of 5 stars</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export type {VenueProps};
export { Venue };
