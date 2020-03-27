import React from 'react';
import '../App.css';
import { Venue, VenueProps } from './Venue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';

interface VenueListProps {
  venues: VenueProps[];
}

function VenueList(props: VenueListProps) {
  return (
    <div className="VenueList">
      <Container fluid>
        <Carousel>
          {props.venues.map((venue: VenueProps) => {
            return (
              <Carousel.Item>
                {Venue({
                  rating: venue.rating,
                  name: venue.name,
                  key: venue.key,
                })}
                <br></br>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
      <br></br>
    </div>
  );
}

export type {VenueListProps};
export {VenueList};
