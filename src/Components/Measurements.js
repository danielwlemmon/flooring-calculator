import React, { useState } from 'react';

const Measurements = ({ plankDimensions }) => {
  localStorage.setItem("plankDimensions", JSON.stringify(plankDimensions));
  const [measurements, setMeasurements] = useState([]);
  const [newMeasurement, setNewMeasurement] = useState({
    id: null,
    name: "",
    measurement: null
  });

  const calcLastWidth = (distance) => {
    console.log(distance)
    const planksNeeded = ((distance + plankDimensions.offset) / plankDimensions.width).toFixed(2);
    const percentWidth = ((planksNeeded - Math.trunc(planksNeeded)) * 100).toFixed(1);
    return (
      <p># of planks to endpoint = {planksNeeded},
        and the last plank will be {percentWidth}% of a full plank</p>);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getId = measurements.length;
    let abc  = (newMeasurement);
    abc.id = getId;
    let addMeasurements = measurements;
    addMeasurements.push(abc);
    setMeasurements(addMeasurements);
    console.log(measurements)
  };

  const handleChange = (e) => {
    setNewMeasurement((preValue) => {
      return { ...preValue, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name of measurement </label>

        <input placeholder='wall etc' type="text" name='name' onChange={handleChange} />
        <br />
        <label htmlFor='measurement'>Measurement </label>
        <input placeholder='151.5' type='number' name='measurement' onChange={handleChange} />
        <button type='submit'>Add</button>
      </form>
     
    </div>
  )
};

export default Measurements