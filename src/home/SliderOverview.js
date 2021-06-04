import React, { Component } from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImageHomepagoverview.png";
import Headline from "../common/Headline.js";
import Typeset from "../common/Typeset.js";

class SliderOverview extends Component {
  render() {
    const Container = styled.div`
      height: 92vh;
      width: 100%;
      background-image: url(${HeroMainBanner});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    `;

    const StatBars = styled.ul`
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
      font-size: 36px;
      list-style: none;
      grid-column: 2/3;
      grid-row: 2/3;
    `;
    const TypeBlock = styled.div`
      grid-column: 1/2;
      align-self: center;
      padding-left: 40px;
    `;

    return (
      <div>
        <Container alt="Image of the car">
          <Headline
            paddingLeft="slider"
            paddingTop="slider"
            content="OVERVIEW"
            color="white"
          ></Headline>
          <TypeBlock>
            <Typeset
              headline="The Vega evx pushes the boundaries of time. Race audaciously into a
            brave new future."
              subtitle="capabilities"
              body=" The Vega evx pushes the boundaries of time. Race audaciously into a
            brave new future."
            />
          </TypeBlock>
          <StatBars>
            <li>3.1s 0-100Km/hA</li>
            <li>+300km/h Top Speed</li>
            <li>+300km/h Range</li>
          </StatBars>
        </Container>
      </div>
    );
  }
}

export default SliderOverview;
