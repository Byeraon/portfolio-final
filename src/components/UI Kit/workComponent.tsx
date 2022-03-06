import React from "react";
import styled from "styled-components";

interface WorkComponentProps {
  id: number;
  name: string;
  type: string;
  url: string | boolean;
  delay: number;
}

const WorkComponentWrapper = styled.div`
  width: 100%;
  margin-bottom: 25px;
  opacity: 0;
  cursor: pointer;
  animation: showComponent 0.4s ease-out forwards;
  @keyframes showComponent {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const TitleWork = styled.p`
  font-size: 3em;
  text-align: left;
  color: white;
  @media screen and (max-width: 737px) {
    font-size: 2.5em;
  }
  @media screen and (max-width: 473px) {
    font-size: 1.7em;
  }
`;

const TagsWork = styled.p`
  font-size: 2em;
  text-align: left;
  color: white;
  @media screen and (max-width: 737px) {
    font-size: 1.4em;
  }
  @media screen and (max-width: 473px) {
    font-size: 1.1em;
  }
`;

export const WorkComponent: React.FC<WorkComponentProps> = ({
  id,
  name,
  type,
  delay,
  url,
}) => {
  return (
    <WorkComponentWrapper
      style={{ animationDelay: `${delay}s` }}
      onClick={
        typeof url !== "boolean"
          ? () => {
              window.open(url, "_blank");
            }
          : () => {}
      }
    >
      <TitleWork style={url === false ? { color: "#a3a3a3" } : {}}>
        {typeof url === "boolean" && "/*"} {name}
      </TitleWork>
      <TagsWork style={url === false ? { color: "#a3a3a3" } : {}}>
        — {type} {typeof url === "boolean" && "*/"}
      </TagsWork>
    </WorkComponentWrapper>
  );
};
