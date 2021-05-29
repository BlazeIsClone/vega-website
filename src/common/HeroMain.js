import React, { Component } from "react";
import HeroMainBanner from "./assets/homeHeroMainBanner.png";
import styled from "styled-components";

class HeroMain extends Component {
  render() {
    const Box = styled.div`
      height: 100vh;
      width: 100%;
      background-image: url(${HeroMainBanner});
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `;
    return <Box alt="This img"></Box>;
  }
}

export default HeroMain;