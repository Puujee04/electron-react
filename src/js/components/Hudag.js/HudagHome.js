import React, { useState } from "react";
import NasosIcon from "../SVGs/NasosIcon";
import UrsgalIcon from "../SVGs/UrsgalIcon";
const HudagHome = () => {
  const [value, setValue] = useState({
    ursgal: false,
    nasos: false,
    ursgalClick: false,
    nasosClick: false,
  });
  const [mouse, setMouse] = useState({ x: null, y: null, createDiv: false });
  const ursgalBtnClick = () => {
    console.log("ursgal");
    setValue({ ...value, ursgal: !value.ursgal });
  };
  const nasosBtnClick = () => {
    console.log("nasos");
    setValue({ ...value, nasos: !value.nasos });
  };

  return (
    <div className="w-full flex flex-col items-center p-1">
      {mouse.createDiv ? (
        <div
          className="bg-indigo-400 border border-indigo-600 w-48 h-24 absolute"
          style={{ left: mouse.x, top: mouse.y }}
        ></div>
      ) : (
        <></>
      )}
      <div className="border-t border-slate-900 w-full h-1"></div>
      <UrsgalIcon active={value.ursgal} setMouse={setMouse}></UrsgalIcon>
      <NasosIcon active={value.nasos}></NasosIcon>
      <button className="bg-sky-500 w-20 h-10" onClick={ursgalBtnClick}>
        Ursgal
      </button>
      <button className="bg-sky-500 w-20 h-10" onClick={nasosBtnClick}>
        Nasos
      </button>
    </div>
  );
};

export default HudagHome;
