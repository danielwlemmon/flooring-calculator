import React, { useEffect, useState } from 'react';

const Measurements = ({ plankDimensions }) => {
  const [measurements, setMeasurements] = useState([]);
  const [newMeasurement, setNewMeasurement] = useState({
    id: null,
    name: "",
    measurement: null
  });
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {

  },[refresh]);

  const calcLastWidth = (m) => {
    const distance = parseFloat(m);
    const planksNeeded = ((distance + plankDimensions.offset) / plankDimensions.width).toFixed(2);
    const percentWidth = ((planksNeeded - Math.trunc(planksNeeded)) * 100).toFixed(1);

    return (
      <p># of planks to endpoint = {planksNeeded},
        and the last plank will be {percentWidth}% of a full plank</p>);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let addMeasurements = measurements;
    addMeasurements.push(newMeasurement);
    setMeasurements(addMeasurements);
    setRefresh(refresh+1);
    //document.querySelector("new-measurement").reset();
  };

  const handleChange = (e) => {
    setNewMeasurement((preValue) => {
      return { ...preValue, [e.target.name]: e.target.value };
    });
  };


  return (
    <div>
      {measurements.map((m, index) => (
        <div key={index}>
          {m.name}{calcLastWidth(m.measurement)}
          <br />
        </div>
      ))}
      <form name="new-measurement" onSubmit={handleSubmit}>
        <label htmlFor='name'>Name of measurement </label>

        <input placeholder='wall etc' type="text" name='name' onChange={handleChange} />
        <br />
        <label htmlFor='measurement'>Measurement </label>
        <input step='0.0001' placeholder='151.5' type='number' name='measurement' onChange={handleChange} />
        <button type='submit'>Add</button>
      </form>

    </div>
  )
};

export default Measurements