import React from 'react'

const TrainList = ({ trains }) => {
  return (
    <div>
      {trains.map(train => (
        <div key={train.id}>
          <h3>Train {train.id}</h3>
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
      ))}
    </div>
  )
}

export default TrainList
