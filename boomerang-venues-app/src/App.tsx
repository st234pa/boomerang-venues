import React, { useState, useEffect } from 'react';
import './App.css';
import { LocationList } from './components/LocationList';
import { LocationProps } from './components/Location';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { VenueProps } from './components/Venue';

interface LocationDataSet {
  locations: LocationProps[];
}

interface VenueDataSet {
  venues: VenueProps[];
}

function App() {
  const [locationData, setLocationData] = useState<LocationDataSet>({
    locations: [],
  });

  const [venueData, setVenueData] = useState<VenueDataSet>({ venues: [] });

  useEffect(() => {
    fetch('http://localhost:5000/locationdata')
      .then(res => res.json())
      .then(result => {
        setLocationData(result);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/samplevenuedata')
      .then(res => res.json())
      .then(result => {
        setVenueData(result);
      });
  }, []);

  if (locationData && venueData) {
    return (
      <div className="App">
        <br></br>
        <Container fluid>
          {LocationList({
            locations: locationData.locations,
            venues: venueData.venues,
          })}
        </Container>
        <br></br>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}

export default App;
