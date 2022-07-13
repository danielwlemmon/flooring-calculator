import React, { useCallback, useContext, useState } from 'react';
import Measurements from './Measurements';

function Calculator() {
  const [offset, setOffset] = useState(0);
  const [plankDimensions, setPlankDimensions] = useState({
    width: null,
    length: null
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
    <div >

      <div className='container m-3 '>
        <div className='row'>
          <div className='col-sm-12 col-md-4 m-0 '>
            <label className='form-label' name="plankWidth">Plank Width </label>
            <input className='form-control ' onChange={handleChange}
              type="number"
              name="width"
              placeholder="7.75 - shorter side"
            />
            <label className='form-label' name="plankLength">Plank Length </label>
            <input className='form-control' onChange={handleChange}
              type="number"
              name="length"
              placeholder="48.5 - longer side"
            />

            <div className='row mt-2 pt-1 pb-2'>
              <div className='col-sm-1 col-md-3'>
                <button type='button' className='btn btn-danger' onClick={decreaseStart}>-</button>
              </div>
              <div className='col-sm-3 col-md-6'>{offset.toFixed(2)} units </div>
              <div className='col-sm-1 col-md-3'>
                <button type='button' className='btn btn-success' onClick={increaseStart}>+</button>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-8'>
            <Measurements plankDimensions={{ ...plankDimensions, offset }} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Calculator;