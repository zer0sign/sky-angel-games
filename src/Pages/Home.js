import React from "react";
import "../App.css";
import PlayButton from "../Components/Buttons/PlayButton";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div className="Canvas">
        <h1 style={{ color: "white" }}>Sky Angel Games</h1>
        <Link to={"/play"}>
          <PlayButton />
        </Link>
      </div>
    </div>
  );
}

export default Home;
