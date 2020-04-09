import React from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './containers/Template'
import Footer from './containers/Footer'
import Navbar from './containers/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Template />
      <Footer />
    </div>
  );
}

export default App;
