// src/components/TrainList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const TrainList = ({ trains }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        All Trains
      </Typography>
      <List>
        {trains.map(train => (
          <ListItem key={train.id} button component={Link} to={`/train/${train.id}`}>
            <ListItemText primary={`Train ${train.id}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TrainList;
