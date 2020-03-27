import React, { useState, useEffect } from 'react';
import './App.css';
import { LocationList } from './components/LocationList';
import { LocationDetailsProps } from './components/LocationDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

interface AppDataSet {
  [key: string]: LocationDetailsProps;
}

function App() {
  const [data, setData] = useState<AppDataSet>({
    'placeholder location 0': {
      name: 'Niagara Falls',
      image: '',
      lat: 0,
      long: 0,
      venues: {
        trending: [
          { name: 'Support Your', rating: 5, key: 0 },
          { name: 'Local Businesses', rating: 5, key: 1 },
        ],
        food: [],
      },
    },
    'placeholder location 1': {
      name: 'Grand Canyon',
      image: '',
      lat: 0,
      long: 0,
      venues: {
        trending: [
          { name: 'Support Your', rating: 5, key: 0 },
          { name: 'Local Businesses', rating: 5, key: 1 },
        ],
        food: [],
      },
    },
  });
  var locations: LocationDetailsProps[] = [];

  useEffect(() => {
    fetch('http://localhost:5000/venues')
      .then(res => res.json())
      .then(result => {
        // setData(result);
      });
  }, []);

  Object.keys(data).forEach(key => {
    locations.push(data[key]);
  });

  return (
    <div className="App">
      <br></br>
      <Container fluid>{LocationList({ locations: locations })}</Container>
      <br></br>
    </div>
  );
}

export default App;
