import React, { useState } from "react";
import AlarmIcon from "./SVGs/AlarmIcon";
import HomeIcon from "./SVGs/HomeIcon";
// import HomeIcon from "./SVGs/HomeIcon";
const SideBar = ({ isHome, setIsHome }) => {
  const homeClicked = () => {
    setIsHome(true);
  };
  const alarmClicked = () => {
    setIsHome(false);
  };
  return (
    <div className="flex flex-col">
      <button onClick={homeClicked} style={{ width: 30, height: 30 }}>
        <HomeIcon></HomeIcon>
      </button>
      <button onClick={alarmClicked} style={{ width: 30, height: 30 }}>
        <AlarmIcon></AlarmIcon>
      </button>
    </div>
  );
};

export default SideBar;
