import React, { useEffect, useState } from 'react';
import getLastWidth from './GetLastWidth';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let addMeasurements = measurements;
    addMeasurements.push(newMeasurement);
    setMeasurements(addMeasurements);
    setRefresh(refresh + 1);
    document.querySelector('#m-form').reset();
  };

  const handleChange = (e) => {
    const element = e.target.name;
    setNewMeasurement((preValue) => {
      return { ...preValue, [e.target.name]: e.target.value };
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const i = (e.target.name);
    let itemRemoved = measurements;
    itemRemoved.splice(i, 1);
    setMeasurements(itemRemoved);
    setRefresh(refresh + 1);
  };

  return (
    <div>
      <div className='container'>


        {measurements.map((m, index) => (
          <div className='row align-items-center' key={index}>
            {getLastWidth(m, plankDimensions)}
            <div className='col-2'>
              <button name={index} className='btn btn-danger' onClick={handleDelete} >Delete</button>
            </div>
          </div>
        ))}
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <form id='m-form' onSubmit={handleSubmit}>
              <div className=''>
                <label className='for-label'>Name of measurement </label>
                <input className='form-control' placeholder='wall etc' type="text" name='name' onChange={handleChange} />
              </div>
              <div className=''>
                <label className='for-label' htmlFor='measurement'>Measurement </label>
                <input className='form-control' step='0.0001' placeholder='151.5' type='number' name='measurement' onChange={handleChange} />
              </div>
              <div >
                <div className='form-check form-switch'>
                  <label className='form-check-label' htmlFor='flexSwitchCheckDefault'> wrap?</label>
                  <input
                    type='checkbox'
                    checked={newMeasurement.wrap}
                    onChange={e => setNewMeasurement((preValue) => { return { ...preValue, wrap: e.target.checked } })}
                    className='form-check-input'
                    role='switch'
                    id='flexSwitchCheckDefault'
                  />
                </div>
                <button type='submit' style={{ width: "100%" }} className='btn btn-primary'>Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Measurements