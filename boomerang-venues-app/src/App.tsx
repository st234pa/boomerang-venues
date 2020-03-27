import React, { useState, useEffect } from 'react';
import './App.css';
import { LocationList } from './components/LocationList';
import { LocationProps } from './components/Location';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { VenueProps } from './components/Venue';

interface LocationDataSet {
  locations: LocationProps[];
}

interface VenueDataSet {
  venues: VenueProps[];
}

function App() {
  const [refreshCount, setRefreshCount] = useState(0);

  const [locationData, setLocationData] = useState<LocationDataSet>({
    locations: [{ lat: 0, long: 0, name: '', image: '', id: '', venues: [] }],
  });

  const [lat, setLat] = useState(40.7484);
  const [long, setLong] = useState(-73.9857);

  const [venueData, setVenueData] = useState<VenueDataSet>({ venues: [] });

  useEffect(() => {
    const url: string = 'http://localhost:5000/locationdata/' + refreshCount;
    fetch(url)
      .then(res => res.json())
      .then(result => {
        setLocationData(result);
      });
  }, [refreshCount, lat, long]);

  useEffect(() => {
    setLat(locationData.locations[0].lat);
    setLong(locationData.locations[0].long);
  }, [locationData]);

  useEffect(() => {
    fetch('http://localhost:5000/venuedata/' + lat + ',' + long)
      .then(res => res.json())
      .then(result => {
        setVenueData(result.venues);
      });
  }, [lat, long]);

  if (locationData && venueData) {
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
                locations: locationData.locations,
                venues: venueData.venues,
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
