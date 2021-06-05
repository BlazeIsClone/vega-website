import React, { Component } from "react";
import styled from "styled-components";
import videoSrc from "./assets/heroMainVideo.mp4";
import Container from "../common/HeroContainer.js";

class HeroSection extends Component {
  render() {
    const Player = styled.video`
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `;
    return (
      <Container
        content={
          <Player autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
          </Player>
        }
      />
    );
  }
}

export default HeroSection;
