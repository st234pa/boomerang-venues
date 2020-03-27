import React from 'react';
import '../App.css';
import {VenueCategory} from './VenueCategory';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import { VenueProps } from './Venue';


interface CategoryDataSet {
  [key: string]: VenueProps[];
}

interface LocationDetailsProps {
  image: string;
  lat: number;
  long: number;
  name: string;
  venues: CategoryDataSet;
}

function LocationDetails(props: LocationDetailsProps) { 
  return (
    <div className="LocationDetails">
        <Row>
          <Col>
          {VenueCategory({ name: 'Food', venueList: props.venues["trending"]})}
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
          {VenueCategory({ name: 'Drink', venueList: props.venues["food"]})}
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
          {VenueCategory({ name: 'Sights', venueList: props.venues["sights"]})}
          </Col>
        </Row>
      <br></br>
    </div>
  );
}
export type {CategoryDataSet, LocationDetailsProps};
export { LocationDetails };
