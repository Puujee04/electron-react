import React, { useState } from "react";
import pipeLogo from "../img/3pipeOff.svg";
import svgLogo from "../img/logo.svg";
import likeSvg from "../img/Group 133.svg";
import ReactLogo from "./components/SVGs/ReactLogo";
import PipeLogo from "./components/SVGs/PipeLogo";
export default function App() {
  const sendNotification = () => {
    electron.notificationApi.sendNotification("My notifications !");
  };

  // console.log(process.env.FIREBASE_KEY, vgLogo);
  return (
    <div className="flex justify-center items-center h-screen">
      <button className="bg-sky-300" onClick={sendNotification}>
        Click Me
      </button>

      <ReactLogo color={"green"}></ReactLogo>
      <PipeLogo fill={"green"} stroke={"yellow"}></PipeLogo>
    </div>
  );
}
