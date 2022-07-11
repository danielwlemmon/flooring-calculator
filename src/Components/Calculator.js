import React, { useState } from 'react';
import Measurements from './Measurements';

function Calculator() {
  const [offset, setOffset] = useState(0);
  const [plankDimensions, setPlankDimensions] = useState({
    width: 0,
    length: 0
  });

  const increaseStart = () => {
    const offSetAdjust = offset;
    setOffset(offSetAdjust + 0.25);
  };

  const decreaseStart = () => {
    const offSetAdjust = offset;
    setOffset(offSetAdjust - 0.25);
  };

  const handleChange = (e) => {
    setPlankDimensions((preValue) => {
      return { ...preValue, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <div className='dimensions-input'>
        <h2>Set floor plank dimensions</h2>
        <label name="plankWidth">Plank Width </label>
        <input onChange={handleChange}
          type="number"
          name="width"
          placeholder="7.75 - shorter side"
        />
        units
        <br />
        <label name="plankLength">Plank Length </label>
        <input onChange={handleChange}
          type="number"
          name="length"
          placeholder="48.5 - longer side"
        />
        units
      </div>
      <div>
        <h2>Starting point adjustment</h2>
        <button onClick={decreaseStart}>-</button>
        {offset.toFixed(2)} units
        <button onClick={increaseStart}>+</button>
      </div>
      <Measurements plankDimensions={{...plankDimensions, offset}} />
    </div>
  )
};

export default Calculator;