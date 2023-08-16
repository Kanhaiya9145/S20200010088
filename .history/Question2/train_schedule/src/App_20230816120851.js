import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';


function App() {
  return (
    <div className="App">
      kanhaiya kr
      <Router>
      <Routes>
        <Route path="/" exact component={AllTrainsPage} />
        <Route path="/train/:trainId" component={SingleTrainPage} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
