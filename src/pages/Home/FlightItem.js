import React from "react";

function FlightItem({ flight }) {
  return (
    <div className='flight'>
      <div className='flight-info'>
        <img
          src={`${flight.airline.toLowerCase()}.png`}
          alt={flight.airline}
          className='airline-logo'
        />
        <div className='details'>
          <p>
            {flight.from} <span>{flight.timeFrom}</span>
          </p>
          <p>{flight.duration}</p>
          <p>{flight.stops}</p>
        </div>
        <div className='details'>
          <p>
            {flight.to} <span>{flight.timeTo}</span>
          </p>
        </div>
      </div>
      <div className='price'>
        <span>{flight.price}</span>
        <button className='book-now'>BOOK NOW</button>
      </div>
    </div>
  );
}

export default FlightItem;
