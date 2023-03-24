import React, { useState, useEffect } from "react";
import "../App.css";
import Aircraft from "../Components/Aircraft";
// import Bird from "../Components/Bird";
import Bird2 from "../Components/Bird2";
import UpButton from "../Components/Buttons/UpButton";
import DownButton from "../Components/Buttons/DownButton";
import RightButton from "../Components/Buttons/RightButton";
import LeftButton from "../Components/Buttons/LeftButton";
import TextPoint from "../Components/Point";
import { Link } from "react-router-dom";
import Parachute from "../Components/Parachute";

function Index() {
  const [Xposition, setXposition] = useState(60);
  const [Yposition, setYposition] = useState(-20);
  const [Point, setPoint] = useState(10);

  // const style = {
  //     left: '10%',
  //     top : '10%'
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      setPoint((prevScore) => prevScore + 10);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function onClickUpButton() {
    if (Xposition > 0) {
      setXposition(Xposition - 10);
    }
  }

  function onClickDownButton() {
    if (Xposition < 70) {
      setXposition(Xposition + 10);
    }
  }

  function onClickLeftButton() {
    if (Yposition > -80) {
      setYposition(Yposition - 10);
    }
  }

  function onClicRightButton() {
    if (Yposition < 100) {
      setYposition(Yposition + 10);
    }
  }
  return (
    <div className="App">
      <div className="Canvas">
        <TextPoint value={Point} />
        <Link to={"/"}>
          <h3 style={{ color: "white", marginLeft: "2%" }}>Quit</h3>
        </Link>

        <Bird2 width={80} height={80} duration={7} />
        <Aircraft Xposition={Xposition} Yposition={Yposition} />
        <Parachute />
        <div className="Control">
          <div className="verticalAction">
            <UpButton onClick={onClickUpButton} />
            <DownButton onClick={onClickDownButton} />
          </div>

          <div className="HorizontalAction">
            <LeftButton onClick={onClickLeftButton} />
            <RightButton onClick={onClicRightButton} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
