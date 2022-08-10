import React from "react";
const UrsgalModal = ({ mouse, onClouse }) => {
  return (
    <div
      className="w-screen h-screen bg-white-100 absolute backdrop-brightness-50"
      style={{ left: 0, top: 0 }}
    >
      <div
        className="bg-white border border-slate-600 w-48 h-24 absolute flex justify-end"
        id="createdDiv"
        style={{ left: mouse.x, top: mouse.y }}
      >
        <button onClick={onClouse} className="w-6 h-6">
          X
        </button>
      </div>
    </div>
  );
};

export default UrsgalModal;
