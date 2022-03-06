import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router";

const HeaderMenu = styled.header`
  & a:nth-child(1) button {
    top: 2em;
    transform: translateX(-50%);
    left: 50%;
  }
  & a:nth-child(2) button {
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    right: 2em;
  }
  & a:nth-child(3) button {
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    left: 2em;
  }

  @media screen and (max-width: 400px) {
    & a:nth-child(1) button {
      top: 1em;
    }
    & a:nth-child(2) button {
      right: 1em;
    }
    & a:nth-child(3) button {
      left: 1em;
    }
  }
  z-index: 1;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  transition: 0.5s all ease-out;
  overflow: hidden;

  animation: visible 0.5s ease-out forwards;
  ${(props) => {
    return props.theme.animationEnd && "animation: none;";
  }}
  ${(props) => {
    return props.theme.path === "/"
      ? "width: 100%;  height: 100%;"
      : "width: 110%;  height: 110%; opacity: 0;";
  }}
  @keyframes visible {
    from {
      width: 110%;
      height: 110%;
    }
    to {
      width: 100%;
      height: 100%;
    }
  }
`;

const ButtonMenu = styled.button`
  padding: 5px;
  position: absolute;
  background-color: transparent;
  color: white;
  font-weight: 600;
  transition: 400ms all;
  border: none;
  user-select: none;
  text-align: center;
  font-size: 1.3em;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const Menu: React.FC = () => {
  const [animationEnd, setEndAnim] = useState(false);
  const location = useLocation();

  return (
    <HeaderMenu
      onAnimationEnd={() => setEndAnim(true)}
      theme={{ path: location.pathname, animationEnd: animationEnd }}
    >
      <Link to={"/about"}>
        <ButtonMenu>About</ButtonMenu>
      </Link>
      <Link to={"/works"}>
        <ButtonMenu>Works</ButtonMenu>
      </Link>
      <Link to={"/skills"}>
        <ButtonMenu>Skills</ButtonMenu>
      </Link>
    </HeaderMenu>
  );
};
