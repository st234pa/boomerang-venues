import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Button } from 'react-bootstrap';
import { VenueList } from './VenueList';
import {VenueProps} from './Venue';

interface VenueCategoryProps {
  name: string;
  venues: VenueProps[];
}

function VenueCategory(props: VenueCategoryProps) {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            {props.name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{VenueList({ venues: props.venues })}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export type {VenueCategoryProps};
export {VenueCategory};
