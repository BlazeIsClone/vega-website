import React, { Component } from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImageHomepagedesign.png";
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
      display: flex;
      flex-direction: column;
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
      padding-left: 40px;
      margin-top: 60px;
    `;

    return (
      <div>
        <Container alt="Image of the car">
          <Headline
            paddingLeft="slider"
            paddingTop="slider"
            content="Design"
            color="white"
          ></Headline>
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
          <TypeBlock>
            <Typeset
              subtitle="vega evx"
              headline="LEADING-EDGE
              Aerodynamics
              for increased downforce"
              body="As an all-electric supercar, Vega EVX maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency."
            />
            <TextButton content="Read More" color="white" />
          </TypeBlock>
        </Container>
      </div>
    );
  }
}

export default SliderOverview;
