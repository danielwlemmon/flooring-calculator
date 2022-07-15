import React from "react";

// this function will return the appropriate thickness of the plank at the measurement
// location
function calcThickness(reverse, wrap, m, o, w) {
  let t = 0;
  if (reverse) {
    o = o * -1;
  };

  t = ((m - o) % w);

  if (wrap) {
    t = w - t;
  };
  return (t.toFixed(4));
};


function getLastWidth(mData, plankDimensions) {
  if (!mData || !plankDimensions) {
    return (
      <div>measurement Data error</div>
    )
  };

  let bgColor = "rgb(42,134,107";

  const thickness = calcThickness(
    mData.reverse,
    mData.wrap,
    parseFloat(mData.measurement),
    plankDimensions.offset,
    plankDimensions.width
  );

  //set background color depending on relevant thickness

  if (thickness <= 1.75 && thickness > 0) {
    bgColor = "red"
  } else if (thickness <= 2.25) {
    bgColor = "orange"
  };

  if (mData.wrap) {
    return (
      <div
        className="col-10 rounded text-center mt-1"
        style={{ backgroundColor: bgColor }}
      >
        <div className="p-1">
          {mData.name} ({mData.measurement}): width of plank around corner will be {thickness} units 
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
        {mData.name} ({mData.measurement}): last plank will be {thickness} units wide
        </div>
      </div>
    );
  }
};

export default getLastWidth;