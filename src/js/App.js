import React, { useEffect, useState } from "react";
import HudagContainer from "./components/Hudag/HudagContainer";
export default function App() {
  // useEffect(() => {
  //   const handle = (e) => {};
  //   document.addEventListener("mouse");
  // });

  const sendNotification = () => {
    electron.notificationApi.sendNotification("My notifications !");
  };

  // console.log(process.env.FIREBASE_KEY, vgLogo);
  return (
    <div className="flex h-screen bg-stone-200">
      {/* <button className="bg-sky-300" onClick={sendNotification}>
        Click Me
      </button> */}
      <HudagContainer></HudagContainer>
      <HudagContainer></HudagContainer>
    </div>
  );
}
