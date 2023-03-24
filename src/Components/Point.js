import React from "react";

function Point(props) {
  return (
    <div style={{ position: "absolute", zIndex: 1, marginLeft: "3%" }}>
      <h1 style={{ color: "white", backgroundColor: "grey", padding: "10px" }}>
        {props.value}
      </h1>
    </div>
  );
}

export default Point;
