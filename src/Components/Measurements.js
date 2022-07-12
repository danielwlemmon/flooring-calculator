import React, { useEffect, useState } from 'react';

const Measurements = ({ plankDimensions }) => {
  const [measurements, setMeasurements] = useState([]);
  const [newMeasurement, setNewMeasurement] = useState({
    name: "",
    measurement: null,
    wrap: false
  });
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {

  }, [refresh]);

  const calcLastWidth = (m) => {
    const distance = parseFloat(m.measurement);
    const planksNeeded = ((distance + plankDimensions.offset) / plankDimensions.width).toFixed(2);
    const lastWidthPercent = ((planksNeeded - Math.trunc(planksNeeded)) * 100).toFixed(1);
    const lastWidth = (plankDimensions.width * (lastWidthPercent / 100)).toFixed(4);
    const wrapWidthPercent = (100 - lastWidthPercent);
    const wrapWidth = (plankDimensions.width - lastWidth).toFixed(4);
    if (m.wrap) {
      return (
        <div >
          <p>There will be {planksNeeded} rows from the starting point to the {m.name}, Width of board after measurement: {wrapWidth} units or {wrapWidthPercent}% of a plank</p>
        </div>
      )
    } else {
      return (
        <div>
          <p>There will be {planksNeeded} rows from the starting point to the {m.name}, Width of final board: {lastWidth} units or {lastWidthPercent}% of a plank</p>
        </div>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let addMeasurements = measurements;
    addMeasurements.push(newMeasurement);
    setMeasurements(addMeasurements);
    setRefresh(refresh + 1);
    document.querySelector('.forms').reset();
  };

  const handleChange = (e) => {
    const element = e.target.name;
    setNewMeasurement((preValue) => {
      return { ...preValue, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      {measurements.map((m, index) => (
        <div className='measurement' key={index}>
          {calcLastWidth(m)}
        </div>
      ))}
      <form className='forms' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name of measurement </label>
        <input placeholder='wall etc' type="text" name='name' onChange={handleChange} />
        <br />
        <label htmlFor='measurement'>Measurement </label>
        <input step='0.0001' placeholder='151.5' type='number' name='measurement' onChange={handleChange} />
        <label htmlFor='wrap'> wrap?</label>
        <input
          type='checkbox'
          checked={newMeasurement.wrap}
          onChange={e => setNewMeasurement((preValue) => { return { ...preValue, wrap: e.target.checked } })}
          className='checkbox'
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
};

export default Measurements