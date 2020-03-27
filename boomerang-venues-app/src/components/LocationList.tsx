import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { LocationDetailsProps } from './LocationDetails';
import { Location } from './Location';

interface LocationListProps {
  locations: LocationDetailsProps[];
}

function LocationList(props: LocationListProps) {
  return (
    <div className="Location">
      <br></br>
            {props.locations.map((location: LocationDetailsProps) => {
              return Location({
                name: location.name, image: location.image, lat: location.lat, long: location.long, venues: location.venues
              });
            })}
        <br></br>
    </div>
  );
}
export type { LocationListProps };
export { LocationList };
