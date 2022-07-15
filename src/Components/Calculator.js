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
    setOffset(offSetAdjust + 0.5);
  };

  const decreaseStart = () => {
    const offSetAdjust = offset;
    setOffset(offSetAdjust - 0.5);
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
            {/* <label className='form-label' name="plankLength">dist base wall to starting line </label>
            <input className='form-control' onChange={handleChange}
              type="number"
              name="length"
              placeholder="48.5 - longer side"
            /> */}
            
            <div className='align-items-center row mt-2 '>
            <div>Starting row adjust</div>
              <div className='col-sm-1 align-content-around'>
                <button type='button' className='btn btn-danger' onClick={decreaseStart}>-</button>
              </div>
              <div className='col-sm-3 ps-4 '>{offset.toFixed(2)} units </div>
              <div className='col-sm-1'>
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