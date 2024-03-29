import React from "react";
import styled from "styled-components";
import { InnerWrapper } from "./generalWrapper";
import Blue from "../../images/blueWater.png";
import Gray from "../../images/grayWater.png";
import Yellow from "../../images/yellowWater.png";
import Pink from "../../images/pinkWater.png";
import { Bottle } from "../UI Kit/bottle";
import { CursorContext } from "../context/cursorContext";
import { Ripple } from "react-preloaders2";
import techs from "../../techs.json";

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

const colorConnect: Record<string, any> = {
  blue: Blue,
  pink: Pink,
  yellow: Yellow,
  gray: Gray,
};

export const Skills: React.FC = () => {
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
            <>
              {techs.length === 0 ? (
                <Ripple color="white" background="transparent" />
              ) : (
                techs.map((el) => (
                  <Bottle
                    delay={Number(el.id) / 3}
                    key={el.id}
                    id={Number(el.id)}
                    name={el.name}
                    percent={Number(el.percent)}
                    waterColor={colorConnect[el.color]}
                  />
                ))
              )}
            </>
          </SkillsWrapper>
        );
      }}
    </CursorContext.Consumer>
  );
};
