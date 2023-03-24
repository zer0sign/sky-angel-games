import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import BirdImages from "../Assets/Images/bird.png";

const moveRight = keyframes`
  0% { transform: translateX(1700%); }
  100% { transform: translateX(-1000%); }
`;

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  animation: ${moveRight} ${(props) => props.duration}s linear infinite;
`;

const Bird2 = ({ width, height, duration }) => {
  const [position, setPosition] = useState({ top: 50, left: 150 });

  useEffect(() => {
    const newPosition = {
      top: Math.floor(Math.random() * (500 - 20) + 20),
      left: Math.floor(Math.random() * (210 - 210) + 210),
    };
    setPosition(newPosition);
  }, [width, height]);

  return (
    <Container top={position.top} left={position.left} duration={duration}>
      <div style={{ width, height }}>
        <img
          src={BirdImages}
          alt="Bird"
          style={{
            width: "120%",
          }}
        />
      </div>
    </Container>
  );
};

export default Bird2;
