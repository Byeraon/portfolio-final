import React, { useState } from "react";
import styled from "styled-components";
import bottle from "../../images/bottle.png";

interface BottleProps {
  id: number;
  name: string;
  waterColor: string;
  percent: number;
  delay: number;
}

const BottleStyle = styled.div`
  position: absolute;
  background-image: url(${bottle});
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 3;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const WaterCloser = styled.div`
  top: 30%;
  transition: 400ms all ease-out;
  z-index: -1;
  left: 0;
  position: absolute;
  background-color: black;
  width: 100%;
  height: ${(props) => {
    if (props.theme.bottleShowed) {
      return `${100 - props.theme.percent}%`;
    } else {
      return "100%";
    }
  }};
`;

const BottleName = styled.p`
  position: absolute;
  width: 120%;
  transition: 300ms all ease-out;
  min-height: 90px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  bottom: -130px;
  font-size: 2em;
`;

const BottleWater = styled.div`
  background-position: center center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  width: 180px;
  transition: 300ms all ease-out;
  z-index: 1;
  min-height: 280px;
  animation: showBottle 0.4s ease-out forwards;
  @keyframes showBottle {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  ${(props) => {
    return `background-image: url(${props.theme.waterColor}); animation-delay: ${props.theme.delay}s;`;
  }}
  ${(props) => {
    if (props.theme.bottleShowed) {
      return "animation: none; opacity: 1;";
    }
  }}
  &:hover {
    ${(props) => {
      if (props.theme.bottleShowed) {
        return "transform: scale(1.2) rotate(25deg);";
      }
    }}
  }
  &:hover p {
    ${(props) => {
      if (props.theme.bottleShowed) {
        return "transform: scale(0.8) rotate(-25deg);";
      }
    }}
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 200px;
  }
`;

export const Bottle: React.FC<BottleProps> = ({
  id,
  name,
  percent,
  waterColor,
  delay,
}) => {
  const [bottleShowed, setShow] = useState(false);
  return (
    <BottleWater
      onAnimationEnd={() => {
        setShow(true);
      }}
      theme={{ waterColor, delay, bottleShowed }}
    >
      <WaterCloser theme={{ bottleShowed, percent }}></WaterCloser>
      <BottleStyle></BottleStyle>
      <BottleName>
        {name}
        <br />
        {percent}%
      </BottleName>
    </BottleWater>
  );
};
