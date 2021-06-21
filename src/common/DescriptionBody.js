import React from "react";
import styled from "styled-components";
import ProgressiveImage from "react-progressive-image";

// Components
import Typeset from "./Typeset";

function DescriptionBody(props) {
  const isFliped = props.isFliped;
  let body;
  if (isFliped) {
    body = (
      <BodyWrapperFliped>
        <Col1>
          <TextContainer data-scroll data-scroll-speed="1">
            <Typeset
              subtitle={props.subtitle}
              headline={props.headline}
              body={props.body}
              color="black"
              size="var"
            />
          </TextContainer>
        </Col1>
        <Col2>
          <ImgWrapper>
            <ImageHandler src={props.img} placeholder={{}}>
              {(src) => <img src={src} alt="vega evx car" />}
            </ImageHandler>
          </ImgWrapper>
        </Col2>
      </BodyWrapperFliped>
    );
  } else {
    body = (
      <BodyWrapper>
        <Col1>
          <ImgWrapper>
            <ImageHandler src={props.img} placeholder={{}}>
              {(src) => <img src={src} alt="vega evx car" />}
            </ImageHandler>
          </ImgWrapper>
        </Col1>
        <Col2>
          <TextContainer data-scroll data-scroll-speed="1">
            <Typeset
              subtitle={props.subtitle}
              headline={props.headline}
              body={props.body}
              color="black"
              size="var"
            />
          </TextContainer>
        </Col2>
      </BodyWrapper>
    );
  }

  return <div>{body}</div>;
}
export default DescriptionBody;

const BodyWrapperFliped = styled.div`
  max-height: 100vh;
  min-height: 1080px;
  width: 100%;
  background-color: ${(props) => props.theme.negativeColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 200px 0 100px;
  img {
    width: 100%;
    height: auto;
    min-width: 400px;
  }
`;

const BodyWrapper = styled.div`
  max-height: 100vh;
  min-height: 1080px;
  width: 100%;
  background-color: ${(props) => props.theme.negativeColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 100px 0 100px;
  img {
    width: 100%;
    height: auto;
    min-width: 400px;
  }
`;

const ImgWrapper = styled.div`
  margin: 0 100px 0 100px;
  width: 80%;
`;
const Col1 = styled.div`
  width: 100%;
`;
const Col2 = styled.div`
  width: 100%;
`;
const TextContainer = styled.div`
  width: clamp(40rem, 50%, 100px);
  align-self: center;
`;

const ImageHandler = styled(ProgressiveImage)``;
