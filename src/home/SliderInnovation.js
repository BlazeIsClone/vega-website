import React, { Component } from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImageInnoveation.png";
import Headline from "../common/Headline.js";
import Typeset from "../common/Typeset.js";
import TextButton from "../common/TextButton.js";
import SliderInnerNav from "../common/SliderInnerNav.js";

class SliderOverview extends Component {
  render() {
    const Container = styled.div`
      max-height: 100vh;
      min-height: 1060px;
      width: auto;
      display: flex;
      flex-direction: column;
    `;
    const AutoPlayVideo = styled.img`
      height: 705px;
      width: auto;
    `;

    const TypeBlock = styled.div`
      align-self: center;
      grid-column: 2/3;
      width: 900px;
    `;

    const NavBlock = styled.div`
      justify-content: center;
      align-self: center;
      width: 80vw;
      margin-top: 100px;
    `;
    const ContentBlock = styled.div`
      position: absolute;
      z-index: -99;
    `;
    const TextBox = styled.div`
      height: 373px;
      background-color: #0f0f0f;
      width: 100%;
      padding: 60px 0 0 60px;
    `;
    return (
      <Container>
        <NavBlock>
          <SliderInnerNav />
        </NavBlock>
        <ContentBlock>
          <AutoPlayVideo src={HeroMainBanner}></AutoPlayVideo>
          <TextBox>
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
}

export default SliderOverview;
