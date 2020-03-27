import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import { LocationDetails } from './LocationDetails';
import { VenueProps } from './Venue';

interface LocationProps {
  name: string;
  image: string;
  lat: number;
  long: number;
  id: string;
  venues: VenueProps[];
}

function Location(props: LocationProps) {
  
  return (
    <div className="Location">
      <br></br>
      
          <Accordion>
            <Card>
              <Card.Img variant="top" src={props.image} alt="Image not found" />
              <br></br>
              <Card.Title>{props.name}</Card.Title>
              <Card.Body>
                <Card.Text>({props.lat}, {props.long})</Card.Text>
                <Accordion.Toggle as={Button} variant="button" eventKey="0">
                  <h3>&#129488;</h3>
                </Accordion.Toggle>
              </Card.Body>
              <Accordion.Collapse eventKey="0">
                <div className="venuesNearHere">
                  {props.venues.length === 0? <h6>Nothing to see here &#128531;</h6> : <h6>What's there to do around here &#128520;?</h6>}
                  <Card.Body>
                    {LocationDetails({
                      name: props.name,
                      image: props.image,
                      lat: props.lat,
                      long: props.long,
                      venues: props.venues,
                      id: props.id
                    })}
                  </Card.Body>
                </div>
              </Accordion.Collapse>
            </Card>
          </Accordion>
       
      <br></br>
    </div>
  );
}
export type {LocationProps};
export { Location };
