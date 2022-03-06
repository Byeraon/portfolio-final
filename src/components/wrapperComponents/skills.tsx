import React from "react";
import styled from "styled-components";
import { InnerWrapper } from "./generalWrapper";
import blue from "../../images/blueWater.png";
import gray from "../../images/grayWater.png";
import yellow from "../../images/yellowWater.png";
import pink from "../../images/pinkWater.png";
import { Bottle } from "../UI Kit/bottle";
import { CursorContext } from "../context/cursorContext";

const SkillsWrapper = styled(InnerWrapper)`
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  overflow-x: hidden;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
  }
`;

export const Skills: React.FC = () => {
  const myTechs = [
    { id: 0, name: "React / Redux", percent: 75, waterColor: blue },
    { id: 1, name: "Styled Components / SCSS", percent: 80, waterColor: pink },
    { id: 2, name: "JS / TS", percent: 65, waterColor: yellow },
    { id: 3, name: "GIT", percent: 80, waterColor: gray },
  ];

  return (
    <CursorContext.Consumer>
      {(value) => {
        const cursorTransition = value.cursorTransition;
        return (
          <SkillsWrapper
            style={{
              transform: `translate(${cursorTransition.x}px, ${cursorTransition.y}px)`,
            }}
          >
            {myTechs.map((el) => (
              <Bottle
                delay={el.id / 3}
                key={el.id}
                id={el.id}
                name={el.name}
                percent={el.percent}
                waterColor={el.waterColor}
              />
            ))}
          </SkillsWrapper>
        );
      }}
    </CursorContext.Consumer>
  );
};
