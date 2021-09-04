import React from "react";

const Wave = () => (
  <div>
    <svg
      viewBox="0 0 1440 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      width="100%"
      height="48px"
    >
      <path
        d="M0 0C182.213 38.063 288.346 48.0704 484 48C696.692 38.3627 793.234 31.0064 961 17.5C1136.33 -4.88982 1242.02 1.32327 1440 36.5V48H0V0Z"
        fill="#FFF7E8"
      />
    </svg>
    <style jsx>{`
      div {
        line-height: 0;
        display: block;
      }
    `}</style>
  </div>
);

export default Wave;
