import React from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './containers/Template'
import Footer from './containers/Footer'
import Navbar from './containers/Navbar'
import Jobs from './containers/Jobs'
import Home from './containers/Home'
import JobList from './containers/JobList'

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Home />
      {/* <Jobs /> */}
         {/* <SingleJob /> */}
      {/* <JobForm/> */}
      {/* <Companies /> */}
        {/* <SingleCompany /> */}
      {/* <About /> */}
    
      <Footer />
    </div>
  );
}

export default App;
