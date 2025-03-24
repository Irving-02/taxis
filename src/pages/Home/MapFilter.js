import React from "react";

function MapFilter() {
  return (
    <div className='map-filter'>
      <div className='map'>
        <img src='map.png' alt='Map' />
      </div>
      <div className='stops'>
        <button className='active'>NON STOP</button>
        <button>ONE STOP</button>
        <button>MORE STOP</button>
      </div>
      <div className='price-range'>
        <h3>PRICE</h3>
        <div className='range'>
          <span>$500</span>
          <span>$2500</span>
        </div>
      </div>
    </div>
  );
}

export default MapFilter;
