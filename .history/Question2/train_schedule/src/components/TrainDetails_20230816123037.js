// src/components/TrainDetails.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TrainDetails = ({ train }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Train {train.id} Details
        </Typography>
        <Typography>Departure: {train.departureTime}</Typography>
        <Typography>Price: {train.price}</Typography>
        <Typography>Seats Available: {train.seatsAvailable}</Typography>
        <Typography>Sleeper Seats: {train.sleeperSeats}</Typography>
        <Typography>AC Seats: {train.acSeats}</Typography>
      </CardContent>
    </Card>
  );
};

export default TrainDetails;
