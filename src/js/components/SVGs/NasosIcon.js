import React from "react";

const NasosIcon = ({ active }) => {
  return (
    <svg
      width="76"
      height="183"
      viewBox="0 0 76 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="38" width="38" height="183" fill={active ? "#5A5050" : "#000"} />
      <rect
        width="38"
        height="183"
        fill={active ? "#5A5050" : "#000"}
        fillOpacity="0.6"
      />
    </svg>
  );
};

export default NasosIcon;
