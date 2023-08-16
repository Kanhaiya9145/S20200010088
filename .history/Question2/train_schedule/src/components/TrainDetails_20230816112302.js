import React from 'react';

const TrainDetails = ({ train }) => {
  return (
    <div>
      <h2>Train {train.id} Details</h2>
      <p>Departure: {train.departureTime}</p>
      <p>Price: {train.price}</p>
      <p>Seats Available: {train.seatsAvailable}</p>
      <p>Coach Types:</p>
      <ul>
        <li>Sleeper: {train.sleeperSeats}</li>
        <li>AC: {train.acSeats}</li>
      </ul>
      {/* Add additional info like delays, etc. */}
    </div>
  );
};

export default TrainDetails;
