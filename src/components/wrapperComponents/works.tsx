import React from "react";
import styled from "styled-components";
import { InnerWrapper } from "./generalWrapper";
import { CursorContext } from "../context/cursorContext";
import { WorkComponent } from "../UI Kit/workComponent";

const WorksWrapper = styled(InnerWrapper)`
  margin: 0px auto;
  width: 70em;
  box-sizing: border-box;
  padding: 7rem 2rem 6rem;
  @media screen and (max-width: 920px) {
    & {
      width: 90%;
      padding-top: 5rem;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
`;

export const Works: React.FC = () => {
  const myWorks = [
    {
      id: 0,
      name: "Loft Fitness",
      type: "Admin Panel, Vue, CSS, Bitrix24",
      url: "https://admin.loftfitness.ru/login",
    },
    {
      id: 1,
      name: "PAC Manager",
      type: "CRM, React, Redux, SCSS",
      url: "http://manager.pac-and.ru/",
    },
    {
      id: 2,
      name: "Thread Ultrastab / In dev",
      type: "Landing, HTML, JS, CSS, Fullscreen Scroll",
      url: "https://thread.ultrastab.ru/",
    },

    {
      id: 3,
      name: "Loft Fitness App",
      type: "Mobile, React Native, CSS",
      url: false,
    },
  ];
  return (
    <CursorContext.Consumer>
      {(value) => {
        const cursorTransition = value.cursorTransition;
        return (
          <WorksWrapper
            style={{
              transform: `translate(${cursorTransition.x}px, ${cursorTransition.y}px)`,
            }}
          >
            {myWorks.map((el) => (
              <WorkComponent
                delay={el.id / 5}
                key={el.id}
                id={el.id}
                name={el.name}
                type={el.type}
                url={el.url}
              />
            ))}
          </WorksWrapper>
        );
      }}
    </CursorContext.Consumer>
  );
};
