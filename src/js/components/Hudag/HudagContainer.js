import React, { useState } from "react";
import SideBar from "../SideBar";
import HudagAlarm from "./HudagAlarm";
import HudagHome from "./HudagHome";
const HudagContainer = () => {
  const [isHome, setIsHome] = useState(true);
  return (
    <div className="w-72 h-96 bg-white border-t border-b border-stone-400 m-5 overflow-hidden">
      <div className="flex">
        <SideBar isHome={isHome} setIsHome={setIsHome}></SideBar>
        <div className="flex flex-col items-center flex-1">
          <h1 className="bg-green-200"> Hudag Container</h1>
          {isHome ? <HudagHome></HudagHome> : <HudagAlarm></HudagAlarm>}
        </div>
      </div>
    </div>
  );
};

export default HudagContainer;
