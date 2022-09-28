import React, { useState } from "react";
import styled from "styled-components";
import { InnerWrapper } from "./generalWrapper";
import { CursorContext } from "../context/cursorContext";

const AboutWrapper = styled(InnerWrapper)`
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

const CopyBlock = styled.div`
  position: absolute;
  width: max-content;
  padding: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`;

const ResumeText = styled.p`
  animation: bottomText 0.5s ease-out forwards;
  color: white;
  opacity: 0;
  display: block;
  text-align: left;

  &:nth-child(1) {
    font-size: 4em;
    @media screen and (max-width: 580px) {
      & {
        font-size: 3em;
      }
    }
    @media screen and (max-width: 440px) {
      & {
        font-size: 2.3em;
      }
    }
    @media screen and (max-width: 370px) {
      & {
        font-size: 2em;
      }
    }
  }

  &:nth-child(2) {
    font-size: 2.8em;
    animation-delay: 0.3s;
    @media screen and (max-width: 580px) {
      & {
        font-size: 2em;
      }
    }
    @media screen and (max-width: 440px) {
      & {
        font-size: 1.8em;
      }
    }
    @media screen and (max-width: 370px) {
      & {
        font-size: 1.4em;
      }
    }
  }

  &:nth-child(3) {
    font-size: 2.2em;
    animation-delay: 0.6s;
    @media screen and (max-width: 580px) {
      & {
        font-size: 1.3em;
      }
    }
    @media screen and (max-width: 440px) {
      & {
        font-size: 1.4em;
      }
    }
    @media screen and (max-width: 370px) {
      & {
        font-size: 1.2em;
      }
    }
  }

  &:nth-child(3) a {
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
  }

  &:nth-child(3) a:nth-child(2):hover {
    color: #a8a8a8;
  }

  &:nth-child(3) a:nth-child(3):hover {
    color: rgb(235, 76, 137);
  }

  &:nth-child(3) a:nth-child(4):hover {
    color: rgb(93, 151, 243);
  }

  & a {
    color: white;
  }

  margin-bottom: 20px;
  @keyframes bottomText {
    from {
      opacity: 0;
      transform: translateY(70px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const About: React.FC = () => {
  const [showCopyBlock, setShow] = useState(false);
  const [clientCursor, setCursor] = useState({ x: 0, y: 0 });
  return (
    <CursorContext.Consumer>
      {(value) => {
        const cursorTransition = value.cursorTransition;
        return (
          <AboutWrapper
            style={{
              transform: `translate(${cursorTransition.x}px, ${cursorTransition.y}px)`,
            }}
          >
            <ResumeText>
              I am Nikita, react developer who loves bringing design and code
              together to create intuitive solutions for complicated problems.
              Thank you very much for coming to this page :3
            </ResumeText>
            <ResumeText>
              Currently open to full time and contracting opportunities —&nbsp;
              <a
                rel="noreferrer"
                target="_blank"
                href="https://hh.ru/resume/df589cdbff08d41f0a0039ed1f7a714a626f55"
              >
                View CV
              </a>
            </ResumeText>
            <ResumeText>
              <span
                onMouseMove={(event) =>
                  setCursor({
                    x: event.clientX - window.innerWidth / 2,
                    y: event.clientY - window.innerHeight / 2 + 30,
                  })
                }
                onMouseEnter={() => setShow(true)}
                onMouseOut={() => setShow(false)}
                onClick={() => {
                  navigator.clipboard.writeText("nikitka.crasnov2013@mail.ru");
                }}
              >
                nikitka.crasnov2013@mail.ru
              </span>
              .&nbsp;
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Byeraon"
              >
                GitHub
              </a>
              .&nbsp;
              <a
                rel="noreferrer"
                target="_blank"
                href="https://instagram.com/byeraon"
              >
                Instagram
              </a>
              .&nbsp;
              <a
                rel="noreferrer"
                target="_blank"
                href="https://telegram.me/byeraon"
              >
                Telegram
              </a>
            </ResumeText>
            {showCopyBlock && (
              <CopyBlock
                style={{
                  transform: `translate(${clientCursor.x}px, ${clientCursor.y}px)`,
                }}
              >
                Click to copy
              </CopyBlock>
            )}
          </AboutWrapper>
        );
      }}
    </CursorContext.Consumer>
  );
};
