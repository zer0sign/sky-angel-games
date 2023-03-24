import React from "react";
import { FaPlay } from "react-icons/fa";

function PlayButton(props) {
  return (
    <button
      style={{ width: "20%", height: "10%", opacity: "80%", marginTop: "40%" }}
    >
      <FaPlay
        style={{
          width: "40%",
          height: "40%",
          opacity: "80%",
        }}
      />
    </button>
  );
}

export default PlayButton;
