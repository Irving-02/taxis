import React from "react";

const CheckIcon = ({ width }) => {
  return (
    <svg
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 50 50'
      fill='#000000'
      width={width}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {" "}
        <circle
          style={{ fill: "#25AE88" }}
          cx='25'
          cy='25'
          r='25'
        ></circle>{" "}
        <polyline
          style={{
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
          points=' 38,15 22,33 12,25 '
        ></polyline>{" "}
      </g>
    </svg>
  );
};

export default CheckIcon;
