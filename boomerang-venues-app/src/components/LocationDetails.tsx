import React from 'react';
import '../App.css';
import {VenueCategory} from './VenueCategory';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap'
import { VenueProps } from './Venue';


interface LocationDetailsProps {
  image: string;
  lat: number;
  long: number;
  name: string;
  id: string;
  venues: VenueProps[];
}

interface VenueCategoryMap {
  [id: string]: VenueProps[];
}

function LocationDetails(props: LocationDetailsProps) {
  var categorizedVenues: VenueCategoryMap = {};
  function categorizeVenues(venues: VenueProps[]) {
    var venueMap: VenueCategoryMap = {};
    venues.forEach(venue => {
      const category: string = venue.category;
      if (!(venueMap[category])) {
        venueMap[category] = [];
      }
      venueMap[category].push(venue);
    });
    return venueMap;
  }
  categorizedVenues = categorizeVenues(props.venues); 

  return (
    <div className="LocationDetails">
      {Object.keys(categorizedVenues).map(category => {
        return (<div className="category" key={props.id}><Row><Col>
        {VenueCategory({name: category, venueList: categorizedVenues[category]})}
        </Col></Row><br></br></div>);
      })}
    </div>
  );
}
export type {LocationDetailsProps};
export { LocationDetails };
