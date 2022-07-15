import './App.css';
import Calculator from './Components/Calculator';
import React, { useState, useEffect } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  
  return (
    <div >
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
