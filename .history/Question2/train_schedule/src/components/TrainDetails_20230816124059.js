// src/components/TrainDetails.js
import React from 'react';
import './TrainDetails.css';

const TrainDetails = ({ train }) => {
  return (
    <div className="card">
      <h2>Train {train.id} Details</h2>
      <p>Departure: {train.departureTime}</p>
      <p>Price: {train.price}</p>
      <p>Seats Available: {train.seatsAvailable}</p>
      <p>Sleeper Seats: {train.sleeperSeats}</p>
      <p>AC Seats: {train.acSeats}</p>
    </div>
  );
};

export default TrainDetails;
