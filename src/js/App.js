import React, { useEffect, useState } from "react";
import HudagContainer from "./components/Hudag.js/HudagContainer";
export default function App() {
  // useEffect(() => {
  //   const handle = (e) => {};
  //   document.addEventListener("mouse");
  // });
  const everyClick = (e) => {
    console.log("e->", e);
  };
  const sendNotification = () => {
    electron.notificationApi.sendNotification("My notifications !");
  };

  // console.log(process.env.FIREBASE_KEY, vgLogo);
  return (
    <div
      onClick={(e) => {
        everyClick(e);
      }}
      className="flex justify-center items-center h-screen"
    >
      {/* <button className="bg-sky-300" onClick={sendNotification}>
        Click Me
      </button> */}
      <HudagContainer></HudagContainer>
    </div>
  );
}
