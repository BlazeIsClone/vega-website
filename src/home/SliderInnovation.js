import React from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImgInnovation.mp4";
import Typeset from "../common/Typeset.js";
import TextButton from "../common/TextButton";

function SliderInnovation() {
  return (
    <Container>
      <VideoWrapper>
        <AutoPlayVideo
          autoPlay
          loop
          muted
          data-keepplaying
          src={HeroMainBanner}
          type="video/mp4"
        ></AutoPlayVideo>
      </VideoWrapper>
      <TextBox>
        <TypeBlock>
          <div>
            <Typeset
              subtitle="autonomous driving"
              headline="Redefining the Future of Driving"
              body="Advance traction control inverters for electric vehicle applications, using patent pending technology for lightweight, high power density requirements."
              color="white"
            />
            <ButtonWrapper>
              <TextButton
                content="innovation"
                color="white"
                body="white"
                text="black"
                onClick={() => window.open("/vega-evx", "_self")}
              />
            </ButtonWrapper>
          </div>
        </TypeBlock>
      </TextBox>
    </Container>
  );
}

export default SliderInnovation;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-height: 100vh;
  min-height: 1060px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const AutoPlayVideo = styled.video``;

const TypeBlock = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const TextBox = styled.div`
  height: 300px;
  margin-top: auto;
  background-color: ${(props) => props.theme.secondaryColor};
  justify-content: center;
  padding: 40px 60px 0 60px;
`;

const VideoWrapper = styled.div`
  height: 700px;
  z-index: -10;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-self: flex-end;
`;
