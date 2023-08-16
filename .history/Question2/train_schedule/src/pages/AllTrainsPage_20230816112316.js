import React, { useState, useEffect } from 'react';
import TrainList from '../components/TrainList';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch trains data from API and set the state
    // Replace this with actual API call
    const fetchedTrains = [
      // Sample data for demonstration
      {
        id: 1,
        departureTime: '09:00 AM',
        price: 50,
        seatsAvailable: 100,
        sleeperSeats: 50,
        acSeats: 50,
      },
      // ...
    ];
    setTrains(fetchedTrains);
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <TrainList trains={trains} />
    </div>
  );
};

export default AllTrainsPage;
