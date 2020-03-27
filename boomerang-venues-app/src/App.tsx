import React from 'react';
import './App.css';
import Venue from './components/Venue';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const venues = [
    'Venue Name 1',
    'Venue Name 2',
    'Venue Name 3',
    'Venue Name 4',
    'Venue Name 5',
  ];
  return (
    <div className="App">
      <div className="container-fluid">
        {venues.map((value, index) => {
          return Venue({ value: value, index: index });
        })}
      </div>
    </div>
  );
}

export default App;
