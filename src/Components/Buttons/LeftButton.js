import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function LeftButton(props) {
  function onClickLeftButton() {
    props.onClick();
  }
  return (
    <button
      onClick={onClickLeftButton}
      style={{ width: "60%", height: "60%", opacity: "80%" }}
    >
      <FaArrowLeft style={{ width: "60%", height: "60%", opacity: "80%" }} />
    </button>
  );
}

export default LeftButton;
