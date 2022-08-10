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
      <button
        onClick={homeClicked}
        style={{ width: 40, height: 40 }}
        className={"border border-stone-400 flex justify-center items-center"}
      >
        <HomeIcon></HomeIcon>
      </button>
      <button
        onClick={alarmClicked}
        style={{ width: 40, height: 40 }}
        className={"border border-stone-400 flex justify-center items-center"}
      >
        <AlarmIcon></AlarmIcon>
      </button>
      <div className="flex-1 bg-stone-200"></div>
    </div>
  );
};

export default SideBar;
