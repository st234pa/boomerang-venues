import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface VenueProps {
  index: number;
  value: string;
}

function Venue(props: VenueProps) {
  return (
    <div className="row">
      <div className="col">
        <div className="Venue">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.index}</h5>
              <p className="card-text">{props.value}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Venue;
