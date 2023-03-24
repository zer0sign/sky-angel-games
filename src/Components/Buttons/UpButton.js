import React from "react";
import { FaArrowUp } from "react-icons/fa";

function UpButton(props) {
  function onClickUpButton() {
    props.onClick();
  }

  return (
    <button
      onClick={onClickUpButton}
      style={{ width: "60%", height: "60%", opacity: "80%" }}
    >
      <FaArrowUp style={{ width: "60%", height: "60%", opacity: "80%" }} />
    </button>
  );
}

export default UpButton;
