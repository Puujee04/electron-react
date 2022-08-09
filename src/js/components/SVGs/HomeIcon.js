import React from "react";
const HomeIcon = ({ height, width, active = false }) => {
  return (
    <svg
      width={"30"}
      height={"30"}
      viewBox="0 0 62 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31 0L0 25L0.492188 25.6543C1.85919 27.4773 4.46947 27.7917 6.23047 26.3457L31 6L55.7695 26.3457C57.5305 27.7917 60.1408 27.4773 61.5078 25.6543L62 25L53 17.7422V5H44V10.4844L31 0ZM31 10L7 29V53H55V32L31 10ZM25 31H37V49H25V31Z"
        fill="black"
      />
    </svg>
  );
};

export default HomeIcon;
