import React from "react";

function getLastWidth(m, plankDimensions) {
  //get measurement from starting point to measurement point
  const distance = parseFloat(m.measurement);

  //# rows of planks from starting point to measurement point
  const planksNeeded = ((distance + plankDimensions.offset) / plankDimensions.width).toFixed(2);

  //the last plank against a wall width
  const lastWidthPercent = ((planksNeeded - Math.trunc(planksNeeded)) * 100).toFixed(1);
  const lastWidth = (plankDimensions.width * (lastWidthPercent / 100)).toFixed(4);

  //flooring wraps around an edge, thickness of plank going around
  const wrapWidthPercent = (100 - lastWidthPercent);
  const wrapWidth = (plankDimensions.width - lastWidth).toFixed(4);

  //set background color depending on relevant thickness
  let bgColor = "rgb(42,134,107";
  if ((!m.wrap && lastWidth <= 1.75) || (wrapWidth <= 1.75 && m.wrap)) {
    bgColor = "red"
  } else if ((!m.wrap && lastWidth <= 2.25) || (wrapWidth <= 2.25 && m.wrap)) {
    bgColor = "orange"
  };

  if (m.wrap) {
    return (
      <div
        className="col-10 rounded text-center mt-1"
        style={{ backgroundColor: bgColor }}
      >
        <div className="p-1">
          {m.measurement} units to {m.name} width of plank {wrapWidth} units or {wrapWidthPercent}% of a plank
        </div>
      </div>
    )
  } else {
    return (
      <div
        className="col-10 rounded text-center mt-1"
        style={{ backgroundColor: bgColor }}
      >
        <div className="p-1">
          {m.measurement} units to {m.name} width of plank {lastWidth} units or {lastWidthPercent}% of a plank
        </div>
      </div>
    );
  }
};

export default getLastWidth;