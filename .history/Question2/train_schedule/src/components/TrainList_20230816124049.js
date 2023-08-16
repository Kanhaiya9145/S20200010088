// src/components/TrainList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TrainList.css';

const TrainList = ({ trains }) => {
  return (
    <div>
      <h2>All Trains</h2>
      <ul className="list">
        {trains.map(train => (
          <li key={train.id} className="listItem">
            <Link to={`/train/${train.id}`}>Train {train.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
