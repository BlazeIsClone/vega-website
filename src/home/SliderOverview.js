import React, { Component } from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImageHomepagoverview.png";
import Headline from "../common/Headline.js";
import Typeset from "../common/Typeset.js";
import TextButton from "../common/TextButton.js";

class SliderOverview extends Component {
  render() {
    const Container = styled.div`
      height: 94vh;
      width: 100%;
      background: linear-gradient(
          180deg,
          #ffffff 0%,
          rgba(255, 255, 255, 0) 0.01%,
          rgba(0, 0, 0, 0.2) 100%
        ),
        url(${HeroMainBanner});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      position: relative;
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
      margin-top: 130px;
      li {
        font-family: Ruda;
        font-style: normal;
        font-weight: normal;
        font-size: 56px;
        line-height: 78px;
        text-align: center;
        color: #ffffff;
      }
      ul {
        font-family: Ruda;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        text-align: center;

        color: #ffffff;
      }
    `;
    const TypeBlock = styled.div`
      grid-column: 1/2;
      align-self: center;
      padding-left: 40px;
      margin-top: 60px;
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
              subtitle="vega evx"
              headline="The Vega evx pushes the boundaries of time. Race audaciously into a
            brave new future."
              body=" The Vega evx pushes the boundaries of time. Race audaciously into a
            brave new future."
            />
            <TextButton content="Read More" color="white" />
          </TypeBlock>
          <StatBars>
            <li>
              3.1s <ul>0-100Km/hA</ul>
            </li>
            <li>
              +300km/h <ul>Top Speed</ul>
            </li>
            <li>
              +300km/h <ul>Range</ul>
            </li>
          </StatBars>
        </Container>
      </div>
    );
  }
}

export default SliderOverview;
