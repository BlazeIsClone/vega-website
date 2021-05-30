import React, { Component } from "react";
import styled from "styled-components";
import Video from "./assets/heroMainVideo.mp4";
import thisImg from "./assets/homeValuesImg.png";
import videoSrc from "./assets/heroMainVideo.mp4";

class HeroSection extends Component {
  render() {
    const Player = styled.video`
      height: 1080px;
      width: 1920px;
    `;
    return (
      <Player autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
      </Player>
    );
  }
}

export default HeroSection;
