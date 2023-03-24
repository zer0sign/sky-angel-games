import React from "react";
import { FaArrowDown } from "react-icons/fa";

function DownButton(props) {
  function onClickDownButton() {
    props.onClick();
  }
  return (
    <button
      onClick={onClickDownButton}
      style={{ width: "60%", height: "60%", opacity: "80%" }}
    >
      <FaArrowDown style={{ width: "60%", height: "60%", opacity: "80%" }} />
    </button>
  );
}

export default DownButton;
