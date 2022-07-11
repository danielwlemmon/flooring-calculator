import React from 'react';

const Measurements = ({ plankDimensions }) => {

  const calcLastWidth = (distance) => {
    const planksNeeded = ((distance + plankDimensions.offset) / plankDimensions.width).toFixed(2);
    const percentWidth = ((planksNeeded - Math.trunc(planksNeeded)) * 100).toFixed(1);
    return (
    <p># of planks to endpoint = {planksNeeded}, 
    and the last plank will be {percentWidth}% of a full plank</p>);
  };

  return (
    <div>
      Measurement (42) : {calcLastWidth(141.875)}
    </div>
  )
};

export default Measurements