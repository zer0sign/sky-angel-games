import React from "react";
import { FaArrowRight } from "react-icons/fa";

function RightButton(props) {
  function onClickRightButton() {
    props.onClick();
  }
  return (
    <button
      onClick={onClickRightButton}
      style={{ width: "60%", height: "60%", opacity: "80%" }}
    >
      <FaArrowRight style={{ width: "60%", height: "60%", opacity: "80%" }} />
    </button>
  );
}

export default RightButton;
