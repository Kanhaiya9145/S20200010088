// src/pages/AllTrainsPage.js
import React, { useState, useEffect } from 'react';
import TrainList from '../components/TrainList';
import './AllTrainsPage.css';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Replace this with actual API call to fetch train data
    const fetchedTrains = [
      {
        id: 1,
        departureTime: '09:00 AM',
        price: 50,
        seatsAvailable: 100,
        sleeperSeats: 50,
        acSeats: 50,
      },
      // ... more trains
    ];
    setTrains(fetchedTrains);
  }, []);

  return (
    <div className="container">
      <h1>Train Schedule</h1>
      <TrainList trains={trains} />
    </div>
  );
};

export default AllTrainsPage;
