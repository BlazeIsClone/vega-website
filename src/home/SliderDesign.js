import React, { Component } from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImgDesign.png";
import Headline from "../common/Headline.js";
import Typeset from "../common/Typeset.js";
import TextButton from "../common/TextButton.js";
import SliderInnerNav from "../common/SliderInnerNav.js";

class SliderOverview extends Component {
  render() {
    const Container = styled.div`
      max-height: 100vh;
      min-height: 1060px;
      width: auto;
      display: flex;
      flex-direction: column;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: cover;
      background: linear-gradient(
          180deg,
          #ffffff 0%,
          rgba(255, 255, 255, 0) 0.01%,
          rgba(0, 0, 0, 0.2) 100%
        ),
        url(${HeroMainBanner});
    `;

    const StatBars = styled.ul`
      display: flex;
      align-self: flex-start;
      font-size: 36px;
      list-style: none;
      margin-bottom: 50px;
      gap: 40px;
      li,
      ul {
        font-family: Ruda;
        font-style: normal;
        font-weight: normal;
        color: #ffffff;
        text-align: center;
      }
      li {
        font-size: 42px;
        line-height: 78px;
      }
      ul {
        font-size: 24px;
        line-height: 29px;
      }
    `;
    const TypeBlock = styled.div`
      align-self: flex-start;
      width: 900px;
    `;

    const NavBlock = styled.div`
      justify-content: center;
      align-self: center;
      width: 80vw;
      margin-top: 100px;
    `;
    const ContentBlock = styled.div`
      display: flex;
      flex-direction: column;
      padding: 400px 0 0 60px;
    `;

    return (
      <Container>
        <NavBlock>
          <SliderInnerNav />
        </NavBlock>
        <ContentBlock>
          <StatBars>
            <li>
              3.1s
              <ul>0-100Km/hA</ul>
            </li>
            <li>
              +300km/h
              <ul>Top Speed</ul>
            </li>
            <li>
              +300km/h
              <ul>Range</ul>
            </li>
          </StatBars>
          <TypeBlock>
            <Typeset
              subtitle="vega evx"
              headline="The Vega evx pushes the boundaries of time. Race audaciously into a
            brave new future."
              body=" The Vega evx pushes the boundaries of time. Race audaciously into a
            brave new future."
              color="white"
            />
            <TextButton content="Read More" color="white" />
          </TypeBlock>
        </ContentBlock>
      </Container>
    );
  }
}

export default SliderOverview;
