import React, { Component } from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImageSpecs.png";
import Headline from "../common/Headline.js";
import Typeset from "../common/Typeset.js";
import TextButton from "../common/TextButton.js";
import SliderInnerNav from "../common/SliderInnerNav.js";

class SliderSpecs extends Component {
  render() {
    const Container = styled.div`
      max-height: 100vh;
      min-height: 1060px;
      display: flex;
      flex-direction: column;
      background-color: #0f0f0f;
    `;

    const StatBars = styled.ul`
      display: flex;
      grid-column: 2/3;
      justify-content: space-around;
      align-items: center;
      color: white;
      font-size: 36px;
      list-style: none;
      width: 900px;

      li,
      ul {
        font-family: Ruda;
        font-style: normal;
        font-weight: normal;
        color: #ffffff;
        text-align: center;
      }
      li {
        font-size: 56px;
        line-height: 78px;
      }
      ul {
        font-size: 24px;
        line-height: 29px;
      }
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
      display: grid;
    `;

    return (
      <Container>
        <NavBlock>
          <SliderInnerNav />
        </NavBlock>
        <ContentBlock>
          <TypeBlock></TypeBlock>
        </ContentBlock>
      </Container>
    );
  }
}

export default SliderSpecs;
