// src/pages/SingleTrainPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TrainDetails from '../components/TrainDetails';

const SingleTrainPage = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Replace this with actual API call to fetch single train data
    const fetchedTrain = {
      id: trainId,
      departureTime: '09:00 AM',
      price: 50,
      seatsAvailable: 100,
      sleeperSeats: 50,
      acSeats: 50,
    };
    setTrain(fetchedTrain);
  }, [trainId]);

  return (
    <div>
      {train ? (
        <TrainDetails train={train} />
      ) : (
        <p>Loading train details...</p>
      )}
    </div>
  );
};

export default SingleTrainPage;
