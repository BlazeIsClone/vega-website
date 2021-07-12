import React from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImgPerformance.png";
import Typeset from "../common/Typeset.js";
import TextButton from "../common/TextButton.js";

function SliderPerformance() {
  return (
    <Container>
      <ContentBlock>
        <StatBars>
          <ul>
            <LiLarge>3.1s</LiLarge>
            <LiLow>0-100Km/h</LiLow>
          </ul>
          <ul>
            <LiLarge>+300km/h</LiLarge>
            <LiLow>Top Speed</LiLow>
          </ul>
        </StatBars>
        <TypeBlock>
          <Typeset
            subtitle="chassis/ motor"
            headline="Astonishingly light for supreme performance"
            body="The light carbon fiber monocoque body ensures a prodigious power to weight ratio, for a jaw-dropping acceleration and top speed."
            color="white"
          />
          <TextButton
            content="Read More"
            color="white"
            onClick={() => window.open("/vega-evx", "_self")}
          />
        </TypeBlock>
      </ContentBlock>
    </Container>
  );
}

export default SliderPerformance;
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-height: 100vh;
  min-height: 1060px;
  width: auto;
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
    list-style: none;
    font-family: Ruda;
    font-style: normal;
    font-weight: normal;
    color: white;
    text-align: center;
  }
`;

const LiLarge = styled.li`
  font-size: 56px;
  line-height: 78px;
`;

const LiLow = styled.li`
  font-size: 24px;
  line-height: 29px;
`;
const TypeBlock = styled.div`
  width: 900px;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 550px 60px 0 60px;
`;
