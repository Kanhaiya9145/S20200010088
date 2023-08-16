// src/pages/SingleTrainPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TrainDetails from '../components/TrainDetails';
import './SingleTrainPage.css';

const SingleTrainPage = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Replace this with actual API call to fetch single train data
    // Check the trainId and fetch data for the corresponding train
    if (trainId === '1') {
      const fetchedTrain = {
        id: 1,
        departureTime: '09:00 AM',
        price: 50,
        seatsAvailable: 100,
        sleeperSeats: 50,
        acSeats: 50,
      };
      setTrain(fetchedTrain);
    } else if (trainId === '2') {
      const fetchedTrain = {
        id: 2,
        departureTime: '10:30 AM',
        price: 65,
        seatsAvailable: 80,
        sleeperSeats: 30,
        acSeats: 50,
      };
      setTrain(fetchedTrain);
    } else {
      // Handle the case when an invalid trainId is provided
      setTrain(null);
    }
  }, [trainId]);

  return (
    <div className="container">
      {train ? (
        <TrainDetails train={train} />
      ) : (
        <p>Loading train details...</p>
      )}
    </div>
  );
};

export default SingleTrainPage;
