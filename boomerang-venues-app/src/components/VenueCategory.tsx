import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Button } from 'react-bootstrap';
import { VenueList } from './VenueList';
import {VenueProps} from './Venue';

interface VenueCategoryProps {
  name: string;
  venueList: VenueProps[];
}

function VenueCategory(props: VenueCategoryProps) {
  function categoryDisplay(venueList: VenueProps[]) {
    if (venueList.length === 0) {
      return (<p>Nothing to see here &#128531;</p>);
    }
    return VenueList({ venues: venueList});
  }
  return (
    <div className="VenueCategory" key={props.name}>
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            {props.name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{categoryDisplay(props.venueList)}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    </div>
  );
}

export type {VenueCategoryProps};
export {VenueCategory};
