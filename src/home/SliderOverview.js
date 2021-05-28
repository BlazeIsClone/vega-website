import React, { Component } from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImageHomepagoverview.png";

class SliderOverview extends Component {
  render() {
    const Box = styled.div`
      height: 92vh;
      width: 100%;
      background-image: url(${HeroMainBanner});
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `;

    return <Box></Box>;
  }
}

export default SliderOverview;
