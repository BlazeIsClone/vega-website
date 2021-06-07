import React, { Component } from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImgPerformance.png";
import Headline from "../common/Headline.js";
import Typeset from "../common/Typeset.js";
import TextButton from "../common/TextButton.js";

class SliderPerformance extends Component {
  render() {
    const Container = styled.div`
      max-height: 100vh;
      min-height: 1060px;
      width: auto;
      display: flex;
      flex-direction: column;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
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
      align-items: center;
      color: white;
      font-size: 36px;
      list-style: none;
      width: 900px;
      gap: 40px;
      margin-bottom: 50px;

      li,
      ul {
        font-family: Ruda;
        font-style: normal;
        font-weight: normal;
        color: white;
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
      width: 900px;
    `;

    const ContentBlock = styled.div`
      display: flex;
      flex-direction: column;
      padding: 550px 60px 0 60px;
    `;

    return (
      <Container>
        <ContentBlock>
          <StatBars>
            <li>
              3.1s
              <ul>0-100Km/h</ul>
            </li>
            <li>
              +300km/h
              <ul>Top Speed</ul>
            </li>
          </StatBars>
          <TypeBlock>
            <Typeset
              subtitle="chassis/ motor"
              headline="Astonishingly light for supreme performance"
              body="The light carbon fiber monocoque body ensures a prodigious power to weight ratio, for a jaw-dropping acceleration and top speed."
              color="white"
            />
            <TextButton content="Read More" color="white" />
          </TypeBlock>
        </ContentBlock>
      </Container>
    );
  }
}

export default SliderPerformance;
