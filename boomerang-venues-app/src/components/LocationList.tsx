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
  [id: string]: VenueProps[];
}
function LocationList(props: LocationListProps) {
  var venuesByLocation: VenueLocationMap = {};
  function sortVenuesByLocation() {
    var venueMap: VenueLocationMap = {};
    props.locations.forEach(location => {
      const locationid = location.id;
      if (!(venueMap[locationid])) {
        venueMap[locationid] = [];
      }
    })
    props.venues.forEach(venue => {
      const venueid = venue.id;
      if (venueMap[venueid]) {
        venueMap[venueid].push(venue);
      }
    })
    return venueMap;
  }
  venuesByLocation = sortVenuesByLocation();
  return (
    <div className="Location">
      <br></br>
            {props.locations.map((location: LocationProps) => {
              return (<div key={location.id}>{Location({
                name: location.name, image: location.image, lat: location.lat, long: location.long, id: location.id, venues: venuesByLocation[location.id]
              })}</div>)
            })}
        <br></br>
    </div>
  );
}
export type { LocationListProps };
export { LocationList };
