import React from "react";
import aircraftImages from "../Assets/Images/aircraft.png";

function Aircraft({ Xposition, Yposition }) {
  return (
    <div style={{ position: "absolute", zIndex: 1 }}>
      <img
        src={aircraftImages}
        alt="Aircraft"
        style={{
          width: "15%",
          marginTop: `${Xposition}%`,
          marginLeft: `${Yposition}%`,
        }}
      />
    </div>
  );
}

export default Aircraft;
