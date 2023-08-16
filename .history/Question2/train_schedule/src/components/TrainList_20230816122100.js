// src/components/TrainList.js
import React from 'react';
import { Link } from 'react-router-dom';

const TrainList = ({ trains }) => {
  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {trains.map(train => (
          <li key={train.id}>
            <Link to={`/train/${train.id}`}>Train {train.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
