import React from "react";
import styled from "styled-components";
import HeroMainBanner from "./assets/sliderImgDesign.png";
import Typeset from "../common/Typeset.js";
import TextButton from "../common/TextButton.js";

function SliderDesign() {
  return (
    <Container>
      <ContentBlock>
        <StatBars>
          <li>
            453ᶜᵐ
            <ul>Length</ul>
          </li>
          <li>
            197ᶜᵐ
            <ul>Width</ul>
          </li>
          <li>
            122ᶜᵐ
            <ul>Height</ul>
          </li>
        </StatBars>
        <TypeBlock>
          <Typeset
            subtitle="Design"
            headline="LEADING-EDGE
              Aerodynamics for increased downforce"
            body="As an all-electric supercar, Vega EVX maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency."
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
    font-size: 56px;
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

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 550px 60px 0 80px;
`;

export default SliderDesign;
