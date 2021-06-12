import React, { Component } from "react";
import styled from "styled-components";
import TextButton from "../common/TextButton.js";
import img from "./assets/homeValuesImg.png";
import Headline from "../common/Headline.js";
import Subtitle from "../common/Subtitle.js";
import Body from "../common/Body.js";

function ValuesHome() {
  return (
    <GridLayout>
      <ImgContainer>
        <Img src={img} />
      </ImgContainer>
      <Container>
        <div data-scroll data-scroll-speed="1">
          <Subtitle content="values"></Subtitle>
          <Headline content="Redefining Tomorrow's World"></Headline>
          <Body
            content="Inspired by a hyper creative generation of multidisciplinary innovators, our passion brought us here.
We are now ready to revolutionise the world we live in with cutting-edge technology, to enhance lives, to bring people closer to nature and to each other in extraordinary ways.
"
            width="clamp"
          />
          <TextButton content="About Us"></TextButton>
        </div>
      </Container>
    </GridLayout>
  );
}

export default ValuesHome;

const GridTemplate = styled.div`
  max-height: 100vh;
  min-height: 780px;
  width: auto;
  display: flex;
  column-gap: 60px;
  background-color: white;
  align-items: center;
  justify-self: center;
  padding: 100px 60px 0 160px;
`;

const GridLayout = styled(GridTemplate)`
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  max-height: 605px;
  width: auto;
`;
const ImgContainer = styled.div`
  display: flex;
`;

const Container = styled.div``;
