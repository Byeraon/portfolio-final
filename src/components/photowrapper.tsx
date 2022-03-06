import React from "react";
import photo from "../images/background.png";
import tazik from "../images/tazik.png";
import styled from "styled-components";
import { CursorContext } from "./context/cursorContext";

const Image = styled.img`
  opacity: 0.9;
`;

const Main = styled.main`
  display: flex;
  width: 100%;
  position: relative;
  user-select: none;
  justify-content: center;
  transition: 0.2s all ease-out;
  align-items: center;
  height: 100vh;
`;

const Tazik = styled.div`
  display: inline-block;
  border: none;
  background: url(${tazik});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transform: translateY(6px);
  width: 38px;
  height: 52px;
`;

const H1 = styled.h1`
  position: absolute;
  font-size: 4em;
  top: 50%;
  font-weight: 600;
  color: white;
  user-select: none;
  width: 83%;
  line-height: 1em;
  left: 50%;
  max-width: 100%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 850px) {
    font-size: 2.2em;
    width: 60%;
  }
`;

export const PhotoWrapper: React.FC = () => {
  return (
    <CursorContext.Consumer>
      {(value) => {
        const cursorTransition = value.cursorTransition;
        return (
          <Main
            style={{
              transform: `translate(${-cursorTransition.x}px, ${-cursorTransition.y}px)`,
            }}
          >
            <Image src={photo}></Image>
            <H1>
              {window.innerWidth < 767 ? (
                <>
                  Nikita Krasnov. <br />
                  Frontend Developer.
                  <br />
                  <Tazik /> <br />
                  Creating simple and complicated websites!
                </>
              ) : (
                <>
                  Nikita Krasnov. Frontend Developer.
                  <Tazik /> <br />
                  Creating simple and complicated websites!
                </>
              )}
            </H1>
          </Main>
        );
      }}
    </CursorContext.Consumer>
  );
};
