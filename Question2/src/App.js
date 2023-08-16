import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';
import Traintable from './components/Traintable';

function App() {
  return (
    <>
  <Router>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Routes>
        <Route exact path='/traintable' element={<Traintable/>}></Route>
      </Routes>
      {/* <Traintable/> */}
      <Footer/>
    </Router>
    
  </>
  );
}

export default App;
