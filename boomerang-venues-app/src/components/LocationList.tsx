import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Location, LocationProps } from './Location';
import { VenueProps } from './Venue';

interface LocationListProps {
  locations: LocationProps[];
  venues: VenueProps[];
}
interface VenueLocationMap {
  [key: number]: VenueProps[];
}
function LocationList(props: LocationListProps) {
  var venuesByLocation: VenueLocationMap = {};
  function sortVenuesByLocation() {
    var venueMap: VenueLocationMap = {};
    props.locations.forEach(location => {
      const locationkey = location.key;
      if (!(venueMap[locationkey])) {
        venueMap[locationkey] = [];
      }
    })
    props.venues.forEach(venue => {
      const venuekey = venue.key;
      venueMap[venuekey].push(venue);
    })
    return venueMap;
  }
  venuesByLocation = sortVenuesByLocation();
  console.log(venuesByLocation);
  return (
    <div className="Location">
      <br></br>
            {props.locations.map((location: LocationProps) => {
              return (<div key={location.key}>{Location({
                name: location.name, image: location.image, lat: location.lat, long: location.long, key: location.key, venues: venuesByLocation[location.key]
              })}</div>)
            })}
        <br></br>
    </div>
  );
}
export type { LocationListProps };
export { LocationList };
