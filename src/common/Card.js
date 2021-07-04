import React from "react";
import styled from "styled-components";

// Components
import Headline from "./Headline.js";
import Subtitle from "./Subtitle.js";
import Body from "./Body.js";

function Card(props) {
  const isCompactDark = props.isCompactDark;
  let body;
  if (isCompactDark) {
    body = (
      <CompactCardWrapper>
        <img src={props.Img} alt="blog and news"></img>
        <Subtitle content={props.Subtitle} />
        <Headline size="card" content={props.Headline} color={props.color} />
        <Body content={props.Body} color={props.color} />
      </CompactCardWrapper>
    );
  } else {
    body = (
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
  return <div>{body}</div>;
}

export default Card;

const CompactCardWrapper = styled.div`
  width: 465px;
  height: 590px;
  min-width: 300px;
  background-color: none;
  align-items: center;
  justify-content: center;
  gap: 20px;
  img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    user-select: none;
    user-drag: none;
  }
`;
const CardWrapper = styled.div`
  width: 465px;
  height: 590px;
  min-width: 300px;
  background-color: none;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
  img {
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
