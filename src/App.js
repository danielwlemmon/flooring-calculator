import './App.css';
import Calculator from './Components/Calculator';
import React, { useState, useEffect } from 'react';
import Footer from './Components/Footer';

function App() {
  
  return (
    <div className="App">
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
