import React from "react";

const ErrorIcon = ({ width }) => {
  return (
    <svg
      version='1.1'
      id='Capa_1'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 50 50'
      fill='#000000'
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
          style={{ fill: "#D75A4A" }}
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
            strokeMiterlimit: 10,
          }}
          points='16,34 25,25 34,16 '
        ></polyline>{" "}
        <polyline
          style={{
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeMiterlimit: 10,
          }}
          points='16,16 25,25 34,34 '
        ></polyline>{" "}
      </g>
    </svg>
  );
};

export default ErrorIcon;
