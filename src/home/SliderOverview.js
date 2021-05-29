import React, { Component } from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImageHomepagoverview.png";

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
    const HeroText = styled.h1`
      font-family: sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      text-transform: uppercase;
      padding: 188px 0 0 40px;
      color: white;
    `;

    const TitleText = styled.h2`
      width: 832px;
      color: white;
      padding: auto 0 0 40px;
      font-family: Ruda, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 46px;
      display: flex;
      text-transform: uppercase;
      gird-column: 1/2;
      grid-row: 3/4;
    `;
    const StatBars = styled.ul`
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
      font-size: 36px;
      list-style: none;
      grid-column: 3/4;
      grid-row: 3/4
    `;

    return (
      <div>
        <Box alt="Image of the car">
          <HeroText>OVERVIEW</HeroText>
          <StatBars>
            <li>3.1s 0-100Km/hA</li>
            <li>+300km/h Top Speed</li>
            <li>+300km/h Range</li>
          </StatBars>
          <TitleText>
            The Vega evx pushes the boundaries of time. Race audaciously into a
            brave new future.
          </TitleText>
        </Box>
      </div>
    );
  }
}

export default SliderOverview;
