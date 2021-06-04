import React, { Component } from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImageHomepagoverview.png";
import Headline from "../common/Headline.js";
import Subtitle from "../common/Subtitle.js";
import Body from "../common/Body.js";

class SliderOverview extends Component {
  render() {
    const Box = styled.div`
      height: 92vh;
      width: 100%;
      background-image: url(${HeroMainBanner});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    `;

    const StatBars = styled.ul`
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
      font-size: 36px;
      list-style: none;
      grid-column: 3/4;
      grid-row: 3/4;
    `;

    return (
      <div>
        <Box alt="Image of the car">
          <Headline content="OVERVIEW" color="white"></Headline>
          <StatBars>
            <li>3.1s 0-100Km/hA</li>
            <li>+300km/h Top Speed</li>
            <li>+300km/h Range</li>
          </StatBars>
          <Headline
            content="
            The Vega evx pushes the boundaries of time. Race audaciously into a
            brave new future."
          color="white"></Headline>
        </Box>
      </div>
    );
  }
}

export default SliderOverview;
