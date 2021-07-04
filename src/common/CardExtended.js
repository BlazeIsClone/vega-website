import React from "react";
import styled from "styled-components";

// Components
import Headline from "./Headline.js";
import Subtitle from "./Subtitle.js";
import Body from "./Body.js";

function CardExtended(props) {
  return (
    <CardWrapper>
      <ImgWrapper>
        <img src={props.Img} alt="blog and news"></img>
      </ImgWrapper>
      <TextWrapper>
        <Subtitle content={props.Subtitle} />
        <Headline size="card" content={props.Headline} color={props.color} />
        <Body content={props.Body} color={props.color} />
      </TextWrapper>
    </CardWrapper>
  );
}

export default CardExtended;

const CardWrapper = styled.div`
  width: calc(465px * 2 + 20px);
  min-width: 300px;
  background-color: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 380px;
    margin-bottom: 10px;
    user-select: none;
    user-drag: none;
    cursor: pointer;
  }
`;
const ImgWrapper = styled.div`
  img {
    height: auto;
    width: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.1);
      padding-bottom: 15px;
    }
  }
`;
const TextWrapper = styled.div`
  background-color: ${(props) => props.theme.negativeColor};
  position: relative;
  z-index: 10;
`;
