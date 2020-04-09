import React from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './containers/Template'
import Footer from './containers/Footer'
import Navbar from './containers/Navbar'
import Jobs from './containers/Jobs'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Template /> */}
      <Jobs />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
