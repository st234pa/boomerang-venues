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
      props.locations.forEach((location: LocationProps)=> {
        const locationId: string = location.locationId;
        console.log(locationId)
        if (!(venueMap[locationId])) {
          venueMap[locationId] = [];
        }
      })
      console.log(props.venues)
      props.venues.forEach((venue: VenueProps) => {
        const venueLocationId: string = venue.locationId;
        console.log(venueLocationId);
        if (venueMap[venueLocationId]) {
          venueMap[venueLocationId].push(venue);
        }
      })
    return venueMap;
  }
  venuesByLocation = sortVenuesByLocation();
  console.log(venuesByLocation)
  return (
    <div className="Location">
      <br></br>
            {props.locations.map((location: LocationProps) => {
              return (<div key={location.locationId}>{Location({
                name: location.name, image: location.image, locationId: location.locationId, lat: location.lat, long: location.long, venues: venuesByLocation[location.locationId]
              })}</div>)
            })}
        <br></br>
    </div>
  );
}
export type { LocationListProps };
export { LocationList };
