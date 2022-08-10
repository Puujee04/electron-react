import React, { useState } from "react";
import UrsgalModal from "../Modals/UrsgalModal";
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

  const onClouse = () => {
    setMouse({ ...mouse, createDiv: false });
  };

  return (
    <div className="w-full flex flex-col items-center p-2">
      <div className="w-full flex">
        <div className="flex-1 px-2">
          <p>0 давтамж</p>
          <p>0 ампер</p>
          <p>0 эргэлтийн</p>
        </div>
        <div className="flex-1 px-8">
          <p>0 метр</p>
          <p>0 %</p>
          <p>0 °C</p>
          <p>0 m³</p>
        </div>
      </div>
      <div className="border-t border-slate-900 w-full h-1 m-1"></div>
      <UrsgalIcon active={value.ursgal} setMouse={setMouse}></UrsgalIcon>
      <NasosIcon active={value.nasos}></NasosIcon>
      {mouse.createDiv ? (
        <UrsgalModal mouse={mouse} onClouse={onClouse}></UrsgalModal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HudagHome;
