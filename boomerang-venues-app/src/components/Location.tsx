import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import { LocationDetailsProps, LocationDetails } from './LocationDetails';

function Location(props: LocationDetailsProps) {
  return (
    <div className="Location">
      <br></br>
      <Row>
        <Col>
          <Accordion>
            <Card>
              <Card.Img variant="top" src={props.image} alt="Image not found" />
              <br></br>
              <Card.Title>{props.name}</Card.Title>
              <Card.Body>
                <Accordion.Toggle as={Button} variant="button" eventKey="0">
                  <h3>&#129488;</h3>
                </Accordion.Toggle>
              </Card.Body>
              <Accordion.Collapse eventKey="0">
                <div className="venuesNearHere">
                  <h6>What's there to do around here?</h6>
                  <Card.Body>
                    {LocationDetails({
                      name: props.name,
                      image: props.image,
                      lat: props.lat,
                      long: props.long,
                      venues: props.venues,
                    })}
                  </Card.Body>
                </div>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
      <br></br>
    </div>
  );
}
export { Location };
