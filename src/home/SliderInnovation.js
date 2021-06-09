import React from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImageInnoveation.png";
import Typeset from "../common/Typeset.js";
import TextButton from "../common/TextButton.js";

function SliderInnovation() {
  return (
    <Container>
      <ContentBlock>
        <AutoPlayVideo src={HeroMainBanner}></AutoPlayVideo>
        <TextBox data-scroll data-scroll-speed="1">
          <TypeBlock>
            <Typeset
              subtitle="autonomous driving"
              headline="Redefining the Future of Driving"
              body="Advance traction control inverters for electric vehicle applications, using patent pending technology for lightweight, high power density requirements."
              color="white"
            />
            <TextButton content="Read More" color="white" />
          </TypeBlock>
        </TextBox>
      </ContentBlock>
    </Container>
  );
}

export default SliderInnovation;

const Container = styled.div`
  max-height: 100vh;
  min-height: 1060px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const AutoPlayVideo = styled.img`
  height: 100%;
  width: 100%;
`;

const TypeBlock = styled.div`
  width: 900px;
`;

const ContentBlock = styled.div``;
const TextBox = styled.div`
  height: 373px;
  background-color: #0f0f0f;
  padding: 60px 0 0 60px;
`;
