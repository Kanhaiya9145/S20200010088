import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TrainDetails from '../components/TrainDetails';

const SingleTrainPage = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch single train data from API based on trainId and set the state
    // Replace this with actual API call
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
