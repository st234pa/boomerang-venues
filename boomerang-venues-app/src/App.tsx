import React, { useState, useEffect } from 'react';
import './App.css';
import { Location } from './components/Location';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VenueListProps } from './components/VenueList';

interface VenueListDataSet {
  [key: string]: VenueListProps;
}

interface CategoryDataSet {
  [key: string]: VenueListDataSet;
}

function App() {
  const [categoryData, setCategoryData] = useState<CategoryDataSet>({});

  useEffect(() => {
    fetch('http://localhost:5000/venues')
      .then(res => res.json())
      .then(result => {
        setCategoryData(result);
      });
  }, []);

  Object.keys(categoryData).forEach(key => {});

  return (
    <div className="App">
      <br></br>
      <div className="container-fluid">
        {Location({ name: '', image: '', lat: 0, long: 0, venues: [] })}
      </div>
      <br></br>
    </div>
  );
}

export default App;
