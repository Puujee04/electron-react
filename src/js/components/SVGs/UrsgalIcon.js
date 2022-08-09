import React from "react";
const UrsgalIcon = ({ active, setMouse }) => {
  const clicked = (e) => {
    console.log(e.pageX, e.pageY, e.screenY);
    setMouse({ x: e.pageX, y: e.pageY, createDiv: true });
  };
  return (
    <svg
      onClick={(e) => {
        clicked(e);
      }}
      width="184"
      height="77"
      viewBox="0 0 184 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="ursgal"
        x="183.5"
        y="38.622"
        width="38"
        height="183"
        transform="rotate(90.0764 183.5 38.622)"
        fill={active ? "#53AB71" : "#000"}
      />
      <rect
        x="183.551"
        y="0.62204"
        width="38"
        height="183"
        transform="rotate(90.0764 183.551 0.62204)"
        fill={active ? "#53AB71" : "#000"}
        fillOpacity="0.6"
      />
    </svg>
  );
};

export default UrsgalIcon;
