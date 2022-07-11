import React, { useState } from 'react';

function Calculator() {
  const [startPoint, setStartPoint] = useState(0);

  const increaseStart = () => {
    const offSet = startPoint;
    setStartPoint(offSet + 0.25);
  };

  const decreaseStart = () => {
    const offSet = startPoint;
    setStartPoint(offSet - 0.25);
  };


  return(
    <div>
      <button onClick={decreaseStart}>-</button>
      {startPoint.toFixed(2)} inches
      <button onClick={increaseStart}>+</button>
    </div>
  )
};

export default Calculator;