// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AllTrainsPage/>} />
        <Route exact path="/train/:trainId" element={<SingleTrainPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
