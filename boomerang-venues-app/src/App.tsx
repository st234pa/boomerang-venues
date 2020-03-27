import React, { useState, useEffect } from 'react';
import './App.css';
import { LocationList } from './components/LocationList';
import { LocationProps } from './components/Location';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { VenueProps } from './components/Venue';

interface LocationsDataSet {
  locations: LocationProps[];
}

interface VenuesDataSet {
  venues: VenueProps[];
}

function App() {
  const [refreshCount, setRefreshCount] = useState(0);

  const [locationsData, setLocationsData] = useState<LocationsDataSet>({
    locations: [
      {
        lat: 0,
        long: 0,
        name: '',
        image: '',
        locationId: '',
        venues: [],
      },
    ],
  });

  const [venuesData, setVenuesData] = useState<VenueProps[]>([]);

  const venueIds: string[] = [];
  const venues: VenueProps[] = [];

  useEffect(() => {
    const locationsUrl: string =
      'http://localhost:5000/locationsdata/' + refreshCount;
    fetch(locationsUrl)
      .then(locationsResult => locationsResult.json())
      .then(locationsObject => {
        setLocationsData(locationsObject);
        locationsObject.locations.forEach((location: LocationProps) => {
          const venueIdsUrl: string =
            'http://localhost:5000/venueidsdata/' +
            location.lat +
            ',' +
            location.long;
          fetch(venueIdsUrl)
            .then(venueIdsResult => venueIdsResult.json())
            .then(venuesIdsObject => {
              venuesIdsObject.venueIds.forEach((venueId: string) => {
                venueIds.push(venueId);
              });
              venueIds.forEach((venueId: string) => {
                const venueUrl =
                  'http://localhost:5000/venuedata/' +
                  venueId +
                  ',' +
                  location.locationId;
                fetch(venueUrl)
                  .then(venueResult => venueResult.json())
                  .then(venueObject => {
                    venues.push(venueObject);
                    setVenuesData(venues);
                  });
              });
            });
        });
      });
  }, [refreshCount]);

  if (locationsData && venues) {
    return (
      <div className="App">
        <br></br>
        <Container fluid>
          <Row>
            <Col>
              <Button
                variant="outline-dark"
                onClick={() => {
                  setRefreshCount(refreshCount + 1);
                }}
              >
                New Destination
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              {LocationList({
                locations: locationsData.locations,
                venues: venuesData,
              })}
            </Col>
          </Row>
        </Container>
        <br></br>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}

export default App;
