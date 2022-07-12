import './App.css';
import Calculator from './Components/Calculator';
import React, { useState, useEffect } from 'react';
import CalculatorContext from './Services/CalculatorContext';


function App() {
  // const [allMeasurements, setAllMeasurements] = useState([]);
  // const [newMeasurement, setNewMeasurement] = useState({
  //   name: "",
  //   measurement: ""
  // });

  // const [refresh, setRefresh] = useState({count: 0});
  
  // const contextObject = {
  //   handleSubmit: (e) => {
  //     e.preventDefault();
  
  //     let addMeasurements = measurements;
  //     addMeasurements.push(newMeasurement);
  //     setMeasurements(addMeasurements);
  //     setRefresh(refresh+1);
  //     document.querySelector(".forms").requestFullscreen();
  //   };

  // };

  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
