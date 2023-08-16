import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={AllTrainsPage} />
        <Route path="/train/:trainId" element={SingleTrainPage} />
      </Routes>
    </Router>
  );
};

export default App;
