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
    console.log(e.target.value + e.target.name)
    setPlankDimensions((preValue) => {
      return {...preValue, [e.target.name]: e.target.value};
    });
  };

  return(
    <div>
      <h2>Set floor plank dimensions</h2>
      <label name="plankWidth">Plank Width</label>
      <input onChange = {handleChange}
      type="number"
      name="width"
      />
       units
      <br/>
      <label name="plankLength">Plank Length</label>
      <input onChange = {handleChange}
      type="number"
      name="length"
      />
       units
      <br/>
      <h2>Starting point adjustment</h2>
      <button onClick={decreaseStart}>-</button>
      {offset.toFixed(2)} units
      <button onClick={increaseStart}>+</button>
      <Measurements />
    </div>
  )
};

export default Calculator;