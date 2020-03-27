import React from 'react';
import '../App.css';
import {VenueCategory} from './VenueCategory';
import {VenueProps} from './Venue';
import 'bootstrap/dist/css/bootstrap.min.css';

interface LocationProps {
  image: string;
  lat: number;
  long: number;
  name: string;
  venues: VenueProps[];
}

function Location(props: LocationProps) {
  return (
    <div className="Location">
      <br></br>
      <div className="container-fluid">
        {VenueCategory({ name: 'Trending', venues: [] })}
      </div>
      <br></br>
    </div>
  );
}

export type {LocationProps};
export { Location};
