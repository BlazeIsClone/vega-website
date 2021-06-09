import React from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImgOverview.png";
import Typeset from "../common/Typeset.js";
import TextButton from "../common/TextButton.js";

function SliderOverview() {
  return (
    <Container>
      <ContentBlock>
        <TypeBlock data-scroll data-scroll-speed="1">
          <Typeset
            subtitle="vega evx"
            headline="The Vega evx pushes the boundaries of time. Race audaciously into a
            brave new future."
            body="Race-inspired refinement. Every detail heightens the connection between you and your Vega EVX."
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

export default SliderOverview;
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
    font-size: 42px;
    line-height: 78px;
  }
  ul {
    font-size: 24px;
    line-height: 29px;
  }
`;
const TypeBlock = styled.div`
  align-self: center;
  width: 800px;
`;

const ContentBlock = styled.div`
  display: flex;
  align-self: center;
  padding: 700px 60px 0 60px;
`;
