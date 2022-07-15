import React from "react";

function Header() {

  return (
    <div>
      <div className="row">
        <div className="collapse col-12 bg-light" id="moreInfo">
          <div className="text-black p-2 ps-3">
            Instructions:
            <br />1 Measure the width of the finished surface of your plank and enter it in the "Plank Width" box.
            <br />2 Take a measurement from your starting row to an endpoint. Usually this is the wall on the oposite side.
            <br />3 Add the measurement.  Now a width will be displayed, this is how wide the last plank will be.
            <br />4 Adjust the starting point for the first row to increase the width of the final plank.
            <br />*plus arrow moves starting point toward endpoint. (narrows width of final board).
            <br />*Multiple mesurements can be added.  Wrap will calculate widths of planks around corners.
            <br />*Reverse should be used when placing rows in the oposite direction of the endpoint.
            <br />*Always use either Inches or Centimeters.  Do not mix units.
            <br /><a href="https://www.youtube.com/c/SoThatsHowYouDoThat">More in-depth instructions on flooring installation</a>
          </div>

        </div>
        <button className="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#moreInfo" aria-expanded="false" aria-controls="collapseExample">
          show/hide instructions
        </button>
      </div>

    </div>
  )
}

export default Header;