import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={AllTrainsPage} />
        <Route path="/train/:trainId" component={SingleTrainPage} />
      </Routes>
    </Router>
  );
};

export default App;
