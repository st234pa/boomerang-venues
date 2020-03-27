import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Venue(props) {
  return (
    <div class="row">
      <div class="col">
        <div className="Venue">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{props.index}</h5>
              <p class="card-text">{props.value}</p>
              <a href="#" class="btn btn-primary">
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
