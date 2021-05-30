import React, { Component } from "react";
import styled from "styled-components";
import TextButton from "../common/TextButton.js";
import img from "./assets/homeValuesImg.png";
import Headline from "../common/Headline.js";
import Subtitle from "../common/Subtitle.js";
import Body from "../common/Body.js";

class ValuesSliderFirst extends Component {
  render() {
    const GridTemplate = styled.div`
      height: 100vh;
      width: auto;
      display: grid;
      grid-template-columns: repeat(12, 141px);
      gap: 20px;
    `;

    const GridLayout = styled(GridTemplate)`
      align-items: center;
      justify-content: center;
    `;
    const Img = styled.img`
      height: 70vh;
      width: auto;
    `;
    const ImgContainer = styled.div`
      grid-column: 2/8;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const Container = styled.div`
      grid-column: 8/11;
    `;
    return (
      <GridLayout>
        <ImgContainer>
          <Img src={img} alt="Car spray painting" />
        </ImgContainer>
        <Container>
          <Subtitle content="values"></Subtitle>
          <Headline content="Redefining Tomorrow's World"></Headline>
          <Body
            content="Inspired by a hyper creative generation of multidisciplinary innovators, our passion brought us here.
We are now ready to revolutionise the world we live in with cutting-edge technology, to enhance lives, to bring people closer to nature and to each other in extraordinary ways.
"
          ></Body>
          <TextButton content="About Us"></TextButton>
        </Container>
      </GridLayout>
    );
  }
}

export default ValuesSliderFirst;
