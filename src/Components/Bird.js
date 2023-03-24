import { useState, useEffect } from "react";
import BirdImages from "../Assets/Images/bird.png";

function Bird() {
  const [position, setPosition] = useState(0);
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((position) => position - 1);
    }, 10);

    return () => clearInterval(intervalId);
  }, [animate]);

  useEffect(() => {
    if (position < -500) {
      setPosition(0);
      setAnimate(!animate);
    }
  }, [position]);

  return (
    <div>
      <img
        src={BirdImages}
        alt="Bird"
        style={{
          width: "20%",
        }}
      />
    </div>
  );
}

export default Bird;
