import React from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImgOverview.png";
import Typeset from "../common/Typeset.js";
import TextButton from "../common/TextButton.js";

function SliderOverview() {
  return (
    <Container>
      <ContentBlock>
        <TypeBlock>
          <Typeset
            subtitle="vega evx"
            headline="The Vega evx pushes the boundaries of time. Race audaciously into a
            brave new future."
            body="Race-inspired refinement. Every detail heightens the connection between you and your Vega EVX."
            color="white"
          />
          <TextButton
            content="Read More"
            color="white"
            onClick={() => window.open("/vega-evx", "_self")}
          />
        </TypeBlock>
        <StatBars>
          <ul>
            <LiLarge>3.1s</LiLarge>
            <LiLow>0-100Km/hA</LiLow>
          </ul>
          <ul>
            <LiLarge>+300km/h</LiLarge>
            <LiLow>Top Speed</LiLow>
          </ul>
          <ul>
            <LiLarge>600km</LiLarge>
            <LiLow>Range</LiLow>
          </ul>
        </StatBars>
      </ContentBlock>
    </Container>
  );
}

export default SliderOverview;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-height: 100vh;
  min-height: 1060px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 0.01%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(${HeroMainBanner});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StatBars = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 36px;
  list-style: none;
  width: 800px;
  li,
  ul {
    list-style: none;
    font-family: Ruda;
    font-style: normal;
    font-weight: normal;
    color: #ffffff;
    text-align: center;
  }
`;

const LiLarge = styled.li`
  font-size: 46px;
  line-height: 78px;
`;

const LiLow = styled.li`
  font-size: 24px;
  line-height: 29px;
`;

const TypeBlock = styled.div`
  align-self: center;
  width: 800px;

  @media (max-width: 1600px) {
    width: 500px;
    margin: 0 50px 0 70px;
  }
  @media (max-width: 1200px) {
    width: 300px;
    margin: 0 50px 0 70px;
    h1 {
      font-size: 1.4rem;
    }
  }
`;

const ContentBlock = styled.div`
  display: flex;
  align-self: center;
  margin: 700px 300px 0 300px;
`;
