import React, { Component } from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImgOverview.png";
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
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
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
      display: flex;
      align-self: center;
      padding: 550px 0 0 0;
    `;

    return (
      <Container>
        <NavBlock>
          <SliderInnerNav />
        </NavBlock>
        <ContentBlock>
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
        </ContentBlock>
      </Container>
    );
  }
}

export default SliderOverview;
