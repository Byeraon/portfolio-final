import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { About } from "./wrapperComponents/about";
import { Skills } from "./wrapperComponents/skills";
import { Works } from "./wrapperComponents/works";

export interface BlockWrapperInterface {
  route?: string;
}

const CloseButton = styled.button`
  left: 20px;
  top: 20px;
  display: none;
  position: absolute;
  width: 40px;
  opacity: 0;
  height: 40px;
  border-radius: 50%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAYAAADBNhlmAAAABGdBTUEAALGPC/xhBQAAAZNJREFUWAnN1zFOwzAUBuCUFXXiCr0EM2JhQ8ygngTYEWJjKxfoPXqRdkBcoFIlFH4neWmcJpVj+/0PS0/2s5v4i5soTlH8s1KW5QxxecJC5zvi6WSA2NHgvlBvEPN2aiQfCFd+ESZIzOtWboWQUiORvUlPU9ORmNfh3Mr1y7pAzz3i0BuhITFvf+WEskNjUf3NaJggg3ByI7KRk3BsZBSOhUzCaSOz4LSQWXG5kSq4XEhVXCqSgotFUnFTkSa4UKQpLgC5BLC7ZUJaleOLX06iXWPaoQ1G4/EqPk4uPgBph+sgH7z1OiY/aNb7OflxRH0RcUx7CAAzJHdth9+4QnrtdxEzh0MMPRDobovbmT8SWfVUmHQM940xs8+HSncGt8XYAjH0dHO+cc7gvKfVBBmKk/uNipyKoyJjcRRkKk4VmQungsyNy4rUwmVBauOSkCxcFJKNm4S0wgUjAfxE9Iv3bpWTadWYfHyDgcFbxL4jpOLkokeQL9V4B2mCG0G+Sr8gbwBN/obwThqRNCv5HHGozSF/PSu1R2pPpz8AAAAASUVORK5CYII=);
  background-color: black;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 60% 60%;
  border: 1px solid white;
  @media screen and (max-width: 767px) {
    display: block;
  }
  animation: showArrow 0.5s ease-out forwards;
  animation-delay: 0.5s;

  @keyframes showArrow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const getThemeType = (theme: any) => {
  if (theme === "about") {
    return "width: 100%; height: 0%; animation: fromTop .5s linear forwards;";
  } else if (theme === "skills") {
    return "left: 0; height: 100%; animation: fromLeft .5s linear forwards; background: #000000;";
  }
  return "right: 0; height: 100%; animation: fromLeft .5s linear forwards;";
};

const WrapperStyles = styled.div`
  z-index: 2;
  top: 0;
  transition: 0.4s all;
  position: absolute;
  background-color: #000000;
  ${(props) => getThemeType(props.theme)};
  @keyframes fromLeft {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
  @keyframes fromTop {
    from {
      height: 0%;
    }

    to {
      height: 100%;
    }
  }
`;

export const BlockWrapper: React.FC<BlockWrapperInterface> = ({ route }) => {
  const [closedWrapper, setClose] = useState(false);
  const [animationEnd, setEnd] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.cursor = `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAABGdBTUEAALGPC/xhBQAAANBJREFUOBGl1DEOwjAMQNFKnIJzMHIErsDAxgZXYGNC7F24SM9VCQbMd6hFi9I2di1ZSdP4NVWtVhUhIlsdlwTGnlwpdiU1TlGQ2nsSRB4KHsl3t+BGqTPsyXyXDsUkhGYxe00vOol50SKsFHVhc2gIG0HPi7ARFFN+rWGbvCNIo1IXtbd+sB/EmvbFPNz8Ce1h6TW5DjV/FrNjh9D/kxlmowudw1xoKVaEerFJFOxGaoSalrrh12fhQLbk9+doj3eMPfSSylhYO+qzWzE2euMDj8oV3tLyjUQAAAAASUVORK5CYII="), pointer`;
    return () => {
      document.body.style.cursor = "inherit";
    };
  }, []);

  const getWrapper = useMemo(() => {
    if (route === "about") {
      return <About />;
    } else if (route === "skills") {
      return <Skills />;
    }
    return <Works />;
  }, [route]);

  return (
    <WrapperStyles
      onAnimationEnd={() => setEnd(true)}
      onTransitionEnd={(event) => {
        if (event.propertyName === "opacity") {
          navigate("/");
        }
      }}
      style={closedWrapper ? { opacity: 0 } : {}}
      onClick={
        window.innerWidth > 767
          ? () => {
              setClose(true);
            }
          : () => {}
      }
      theme={route}
    >
      {animationEnd && getWrapper}
      <CloseButton
        onClick={() => {
          setClose(true);
        }}
      ></CloseButton>
    </WrapperStyles>
  );
};
